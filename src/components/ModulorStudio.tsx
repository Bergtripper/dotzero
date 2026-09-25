import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { UI_TEXT } from '../translations';
import { MODULOR_PRESETS } from '../data';
import { ModulorPreset, Language } from '../types';
import {
  ArrowLeft,
  Volume2,
  VolumeX,
  Camera,
  RotateCcw,
  Sparkles,
  Sliders,
  Zap,
  Activity,
  Maximize2,
  Check,
  Disc
} from 'lucide-react';

export interface ModulorStudioProps {
  onBack: () => void;
}

export type MusaStudioProps = ModulorStudioProps;

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseSize: number;
  color: string;
  shape: 'circle' | 'square' | 'triangle';
  angle: number;
  va: number;
}

export const ModulorStudio: React.FC<ModulorStudioProps> = ({ onBack }) => {
  const { language, setLanguage } = useLanguage();
  const t = UI_TEXT.musaStudio;

  const [activePreset, setActivePreset] = useState<ModulorPreset>(MODULOR_PRESETS[0]);
  const [particleDensity, setParticleDensity] = useState<number>(activePreset.particleCount);
  const [speedMultiplier, setSpeedMultiplier] = useState<number>(activePreset.speed);
  const [glowIntensity, setGlowIntensity] = useState<number>(activePreset.glow);
  const [trailPersistence, setTrailPersistence] = useState<number>(activePreset.trail);
  const [shapeMode, setShapeMode] = useState<'particles' | 'geometric-mesh' | 'waveform'>('geometric-mesh');

  // Audio synthesis state
  const [audioActive, setAudioActive] = useState<boolean>(false);
  const [snapshotTaken, setSnapshotTaken] = useState<boolean>(false);

  // References
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameId = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<{ x: number; y: number; isDown: boolean; moved: boolean }>({
    x: 0,
    y: 0,
    isDown: false,
    moved: false,
  });

  // Web Audio Context & Oscillators
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscNodesRef = useRef<OscillatorNode[]>([]);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const [audioMeter, setAudioMeter] = useState<number[]>([12, 28, 54, 30, 18, 62, 44, 20]);

  // Color schemes for presets
  const colorPalettes = {
    'bauhaus-neon': ['#DE3831', '#1350B0', '#F7B801', '#FFFFFF', '#FF3B30'],
    'cyber-amber': ['#F7B801', '#FFAA00', '#FF5500', '#FFFFFF', '#E63946'],
    'liquid-cobalt': ['#1350B0', '#0096FF', '#00D4FF', '#FFFFFF', '#0B2545'],
    'monochrome-ghost': ['#FFFFFF', '#C0C0C0', '#808080', '#404040', '#E5E5E5'],
    'solar-red': ['#DE3831', '#FF2A2A', '#FF7700', '#F7B801', '#FFFFFF'],
  };

  // Switch preset
  const handleSelectPreset = (preset: ModulorPreset) => {
    setActivePreset(preset);
    setParticleDensity(preset.particleCount);
    setSpeedMultiplier(preset.speed);
    setGlowIntensity(preset.glow);
    setTrailPersistence(preset.trail);
    setShapeMode(preset.shapeMorph);
    initParticles(preset.particleCount, preset.colorScheme);
  };

  // Initialize particles
  const initParticles = (count: number, paletteKey: keyof typeof colorPalettes) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const w = canvas.width;
    const h = canvas.height;
    const palette = colorPalettes[paletteKey] || colorPalettes['bauhaus-neon'];

    const newParticles: Particle[] = [];
    const shapes: ('circle' | 'square' | 'triangle')[] = ['circle', 'square', 'triangle'];

    for (let i = 0; i < count; i++) {
      const size = Math.random() * 5 + 2;
      newParticles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size,
        baseSize: size,
        color: palette[Math.floor(Math.random() * palette.length)],
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        angle: Math.random() * Math.PI * 2,
        va: (Math.random() - 0.5) * 0.05,
      });
    }
    particlesRef.current = newParticles;
  };  // Shockwave burst on click or manual trigger
  const triggerShockwave = (clientX?: number, clientY?: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const cx = clientX !== undefined ? (clientX - rect.left) * (canvas.width / rect.width) : canvas.width / 2;
    const cy = clientY !== undefined ? (clientY - rect.top) * (canvas.height / rect.height) : canvas.height / 2;

    particlesRef.current.forEach((p) => {
      const dx = p.x - cx;
      const dy = p.y - cy;
      const dist = Math.hypot(dx, dy) || 1;
      const force = Math.min(25, 450 / dist);
      p.vx += (dx / dist) * force;
      p.vy += (dy / dist) * force;
    });

    // Play subtle synth pulse
    if (audioActive && audioCtxRef.current) {
      try {
        const pulseOsc = audioCtxRef.current.createOscillator();
        const pulseGain = audioCtxRef.current.createGain();
        pulseOsc.type = 'sawtooth';
        pulseOsc.frequency.setValueAtTime(320, audioCtxRef.current.currentTime);
        pulseOsc.frequency.exponentialRampToValueAtTime(80, audioCtxRef.current.currentTime + 0.3);
        pulseGain.gain.setValueAtTime(0.15, audioCtxRef.current.currentTime);
        pulseGain.gain.exponentialRampToValueAtTime(0.001, audioCtxRef.current.currentTime + 0.3);
        pulseOsc.connect(pulseGain);
        pulseGain.connect(audioCtxRef.current.destination);
        pulseOsc.start();
        pulseOsc.stop(audioCtxRef.current.currentTime + 0.3);
      } catch {
        // audio fail
      }
    }
  };

  // Web Audio Synth Toggle
  const toggleAudio = () => {
    if (audioActive) {
      // Stop
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.linearRampToValueAtTime(0, audioCtxRef.current.currentTime + 0.3);
        setTimeout(() => {
          oscNodesRef.current.forEach((osc) => {
            try {
              osc.stop();
            } catch {
              // already stopped
            }
          });
          oscNodesRef.current = [];
          setAudioActive(false);
        }, 320);
      } else {
        setAudioActive(false);
      }
    } else {
      // Start
      try {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioContextClass();
        audioCtxRef.current = ctx;

        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
        masterGain.gain.linearRampToValueAtTime(0.12, ctx.currentTime + 0.5);
        masterGain.connect(ctx.destination);
        gainNodeRef.current = masterGain;

        const analyser = ctx.createAnalyser();
        analyser.fftSize = 32;
        masterGain.connect(analyser);
        analyserRef.current = analyser;

        // Triad chords tuned to Bauhaus harmonics (C, G, E / 130.81Hz, 196.00Hz, 329.63Hz)
        const baseFreqs = [130.81, 196.0, 261.63, 329.63];
        const oscs: OscillatorNode[] = [];

        baseFreqs.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);
          osc.connect(masterGain);
          osc.start();
          oscs.push(osc);
        });

        oscNodesRef.current = oscs;
        setAudioActive(true);
      } catch {
        console.warn('Web Audio could not be initialized');
      }
    }
  };

  // Modulate Audio with cursor movement
  useEffect(() => {
    if (!audioActive || !audioCtxRef.current || oscNodesRef.current.length === 0) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const normX = Math.max(0, Math.min(1, mouseRef.current.x / canvas.width));
    const normY = Math.max(0, Math.min(1, mouseRef.current.y / canvas.height));

    const ctx = audioCtxRef.current;
    // Modulate base frequencies
    const baseFreqs = [130.81, 196.0, 261.63, 329.63];
    oscNodesRef.current.forEach((osc, i) => {
      const targetFreq = baseFreqs[i] * (1 + normX * 0.8) + (1 - normY) * 50;
      osc.frequency.setTargetAtTime(targetFreq, ctx.currentTime, 0.08);
    });
  }, [mouseRef.current.x, mouseRef.current.y, audioActive]);

  // Audio spectrum visualizer loop
  useEffect(() => {
    if (!audioActive || !analyserRef.current) return;
    const interval = setInterval(() => {
      if (!analyserRef.current) return;      const dataArray = new Uint8Array(8);
      analyserRef.current.getByteFrequencyData(dataArray);
      const heights = Array.from(dataArray).map((val) => Math.max(10, Math.min(80, (val / 255) * 80)));
      setAudioMeter(heights);
    }, 100);
    return () => clearInterval(interval);
  }, [audioActive]);

  // Clean up audio on unmount
  useEffect(() => {
    return () => {
      if (oscNodesRef.current) {
        oscNodesRef.current.forEach((osc) => {
          try {
            osc.stop();
          } catch {
            // ignore
          }
        });
      }
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  // Main Canvas Render Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Resize handler
    const updateSize = () => {
      const container = canvas.parentElement;
      if (!container) return;
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight || 560;
      if (particlesRef.current.length === 0) {
        initParticles(particleDensity, activePreset.colorScheme);
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);

    // Animation loop
    const render = () => {
      const w = canvas.width;
      const h = canvas.height;

      // Dark canvas fade trail effect (creates fluid optical trails)
      ctx.fillStyle = `rgba(7, 8, 12, ${trailPersistence})`;
      ctx.fillRect(0, 0, w, h);

      // Render subtle background laser grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 1;
      const gridStep = 48;
      for (let x = 0; x < w; x += gridStep) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += gridStep) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const isMouseActive = mouseRef.current.moved;
      const particles = particlesRef.current;

      // Update & Draw particles
      ctx.shadowBlur = glowIntensity;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Velocity & motion
        p.x += p.vx * speedMultiplier;
        p.y += p.vy * speedMultiplier;
        p.angle += p.va;

        // Bounce or wrap edges
        if (p.x < 0) { p.x = w; } else if (p.x > w) { p.x = 0; }
        if (p.y < 0) { p.y = h; } else if (p.y > h) { p.y = 0; }

        // Interaction with mouse cursor (attraction and gravitational vortex)
        if (isMouseActive) {
          const dx = mx - p.x;
          const dy = my - p.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 220 && dist > 10) {
            const angle = Math.atan2(dy, dx);
            const force = (1 - dist / 220) * 0.45;
            p.vx += Math.cos(angle) * force + Math.sin(angle) * 0.15;
            p.vy += Math.sin(angle) * force - Math.cos(angle) * 0.15;
          }
        }

        // Apply slight drag
        p.vx *= 0.985;
        p.vy *= 0.985;

        // Keep minimum gentle drift
        if (Math.abs(p.vx) < 0.1) p.vx += (Math.random() - 0.5) * 0.4;
        if (Math.abs(p.vy) < 0.1) p.vy += (Math.random() - 0.5) * 0.4;

        ctx.shadowColor = p.color;
        ctx.fillStyle = p.color;
        ctx.strokeStyle = p.color;

        // Render based on shape mode
        if (shapeMode === 'particles') {          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        } else if (shapeMode === 'geometric-mesh') {
          // Geometric Bauhaus primitives with rotation
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.angle);

          if (p.shape === 'circle') {
            ctx.beginPath();
            ctx.arc(0, 0, p.size, 0, Math.PI * 2);
            ctx.fill();
          } else if (p.shape === 'square') {
            ctx.fillRect(-p.size, -p.size, p.size * 2, p.size * 2);
          } else if (p.shape === 'triangle') {
            ctx.beginPath();
            ctx.moveTo(0, -p.size * 1.3);
            ctx.lineTo(p.size, p.size);
            ctx.lineTo(-p.size, p.size);
            ctx.closePath();
            ctx.fill();
          }
          ctx.restore();

          // Connect nearby particles with luminous constellation lines
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
            if (dist < 75) {
              const alpha = (1 - dist / 75) * 0.35;
              ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
              ctx.lineWidth = 0.8;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        } else if (shapeMode === 'waveform') {
          // Flow lines connecting particles
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 0.8, 0, Math.PI * 2);
          ctx.fill();

          for (let j = i + 1; j < Math.min(i + 4, particles.length); j++) {
            const p2 = particles[j];
            const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
            if (dist < 120) {
              const alpha = (1 - dist / 120) * 0.4;
              ctx.strokeStyle = p.color;
              ctx.globalAlpha = alpha;
              ctx.lineWidth = 1.2;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.quadraticCurveTo((p.x + p2.x) / 2 + 10, (p.y + p2.y) / 2 - 10, p2.x, p2.y);
              ctx.stroke();
              ctx.globalAlpha = 1.0;
            }
          }
        }
      }

      ctx.shadowBlur = 0; // reset
      animationFrameId.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener('resize', updateSize);
    };
  }, [speedMultiplier, glowIntensity, trailPersistence, shapeMode, activePreset]);

  // Snapshot PNG generator
  const captureSnapshot = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const url = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = url;
    a.download = `dotzero-modulor-studio-${Date.now()}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    setSnapshotTaken(true);
    setTimeout(() => setSnapshotTaken(false), 2400);
  };

  return (
    <div className="min-h-screen bg-[#07080C] text-[#EDEDED] font-sans relative selection:bg-[var(--accent)] selection:text-[var(--on-accent)] pb-20">
      
      {/* Top Bar for Musa Subpage */}
      <header className="sticky top-0 z-50 bg-[#07080C]/90 backdrop-blur-md border-b border-white/10 px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        
        {/* Left: Back to Dotzero */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center gap-2 px-3 py-1.5 border border-white/20 bg-[var(--surface-raised)]/5 hover:bg-[var(--surface-raised)]/15 text-[var(--on-accent)] font-mono text-xs uppercase tracking-wider transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[var(--accent)]" />
            <span>{t.backToDotzero[language]}</span>
          </button>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-secondary)] animate-pulse" />
            <span className="tracking-widest uppercase">{t.status[language]}</span>
          </div>
        </div>

        {/* Right: Language Switcher & Audio quick-toggle */}
        <div className="flex items-center gap-3">
          
          {/* Audio Synth Toggle */}          <button
            type="button"
            onClick={toggleAudio}
            className={`flex items-center gap-1.5 px-3 py-1.5 border text-xs font-mono uppercase tracking-wider transition-all ${
              audioActive
                ? 'border-[var(--accent-tertiary)] bg-[var(--accent-tertiary)]/10 text-[var(--accent-tertiary)] shadow-[0_0_12px_rgba(247,184,1,0.3)]'
                : 'border-white/20 bg-[var(--surface-raised)]/5 text-zinc-400 hover:text-[var(--on-accent)]'
            }`}
            title="Audio-reactive ambient synth"
          >
            {audioActive ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            <span className="hidden sm:inline">
              {audioActive ? t.audioToggleStop[language] : t.audioToggleStart[language]}
            </span>
          </button>

          {/* Language Switcher Segmented Control */}
          <div className="flex items-center border border-white/20 bg-black/40 p-0.5 font-mono text-xs">
            {(['it', 'de', 'en'] as Language[]).map((lng) => (
              <button
                key={lng}
                type="button"
                onClick={() => setLanguage(lng)}
                className={`px-2 py-0.5 uppercase transition-all ${
                  language === lng
                    ? 'bg-[var(--accent)] text-[var(--on-accent)] font-bold'
                    : 'text-zinc-400 hover:text-[var(--on-accent)]'
                }`}
              >
                {lng.toUpperCase()}
              </button>
            ))}
          </div>

        </div>
      </header>

      {/* Main Musa FX Stage */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Title Lockup */}
        <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-[var(--accent-tertiary)] mb-2 font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>DOTZERO // NEXT-GEN KINETICS</span>
            </div>
            <h1 className="dz-h1 flex items-center gap-3 text-3xl sm:text-4xl md:text-5xl uppercase text-[var(--on-accent)]">
              <span>{t.title[language]}</span>
              <span className="text-xs px-2 py-0.5 border border-[var(--accent)] text-[var(--accent)] font-mono tracking-widest">
                v2.0
              </span>
            </h1>
          </div>

          <p className="font-mono text-xs text-zinc-400 max-w-md leading-relaxed">
            {t.subtitle[language]}
          </p>
        </div>

        {/* Viewport Canvas + Side Controls Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Real-Time Interactive Canvas (8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            
            <div className="relative w-full h-[460px] sm:h-[540px] bg-[#07080C] border-2 border-white/15 overflow-hidden rounded-xs shadow-[0_0_50px_rgba(0,0,0,0.8)]">
              
              {/* Canvas element */}
              <canvas
                ref={canvasRef}
                className="w-full h-full cursor-crosshair block"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  mouseRef.current = {
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                    isDown: mouseRef.current.isDown,
                    moved: true,
                  };
                }}
                onMouseDown={(e) => {
                  mouseRef.current.isDown = true;
                  triggerShockwave(e.clientX, e.clientY);
                }}
                onMouseUp={() => {
                  mouseRef.current.isDown = false;
                }}
                onTouchMove={(e) => {
                  if (e.touches[0]) {
                    const rect = e.currentTarget.getBoundingClientRect();
                    mouseRef.current = {
                      x: e.touches[0].clientX - rect.left,
                      y: e.touches[0].clientY - rect.top,
                      isDown: true,
                      moved: true,
                    };
                  }
                }}
                onTouchStart={(e) => {
                  if (e.touches[0]) {
                    triggerShockwave(e.touches[0].clientX, e.touches[0].clientY);
                  }
                }}
              />

              {/* Viewport Overlay HUD Details */}
              <div className="absolute top-3 left-3 pointer-events-none flex items-center gap-2 font-mono text-[10px] text-zinc-400 bg-black/60 backdrop-blur-xs px-2 py-1 border border-white/10">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-ping" />
                <span>REALTIME 4K SHADER · {activePreset.name}</span>
              </div>

              <div className="absolute top-3 right-3 pointer-events-none font-mono text-[10px] text-zinc-400 bg-black/60 backdrop-blur-xs px-2 py-1 border border-white/10">
                <span>FPS: 60 · PARTICELLE: {particlesRef.current.length}</span>
              </div>

              {/* Shockwave hint */}
              <div className="absolute bottom-3 left-3 pointer-events-none font-mono text-[10px] text-zinc-500 bg-black/60 px-2 py-1 border border-white/10">
                <span>CLICK = EMETTI ONDA D’URTO · TRASCINA = MODULA CAMPO GRAVITAZIONALE</span>
              </div>              {/* Audio visualizer bars on canvas HUD */}
              {audioActive && (
                <div className="absolute bottom-3 right-3 flex items-end gap-1 bg-black/70 px-2 py-1.5 border border-[var(--accent-tertiary)]/30">
                  {audioMeter.map((val, idx) => (
                    <div
                      key={idx}
                      className="w-1.5 bg-[var(--accent-tertiary)] transition-all duration-75"
                      style={{ height: `${val / 3}px` }}
                    />
                  ))}
                  <span className="font-mono text-[9px] text-[var(--accent-tertiary)] ml-1 uppercase">SYNTH LIVE</span>
                </div>
              )}
            </div>

            {/* Quick Actions Bar below canvas */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-[var(--surface-raised)]/5 border border-white/10 font-mono text-xs">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={captureSnapshot}
                  className="px-3 py-1.5 bg-[var(--accent)] text-[var(--on-accent)] uppercase font-bold flex items-center gap-1.5 hover:bg-[var(--accent)]/80 transition-colors"
                >
                  {snapshotTaken ? <Check className="w-3.5 h-3.5" /> : <Camera className="w-3.5 h-3.5" />}
                  <span>{snapshotTaken ? t.snapshotSaved[language] : t.snapshotBtn[language]}</span>
                </button>

                <button
                  type="button"
                  onClick={() => triggerShockwave()}
                  className="px-3 py-1.5 border border-white/20 bg-[var(--surface-raised)]/5 text-[var(--on-accent)] uppercase flex items-center gap-1.5 hover:bg-[var(--surface-raised)]/10 transition-colors"
                >
                  <Zap className="w-3.5 h-3.5 text-[var(--accent-tertiary)]" />
                  <span>{t.burstBtn[language]}</span>
                </button>

                <button
                  type="button"
                  onClick={() => initParticles(particleDensity, activePreset.colorScheme)}
                  className="px-3 py-1.5 border border-white/20 bg-[var(--surface-raised)]/5 text-zinc-300 uppercase flex items-center gap-1.5 hover:bg-[var(--surface-raised)]/10 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{t.resetCanvasBtn[language]}</span>
                </button>
              </div>

              {/* Shape Morph Mode Segmented Tabs */}
              <div className="flex items-center border border-white/20 bg-black/50 p-0.5 text-[11px]">
                <button
                  type="button"
                  onClick={() => setShapeMode('geometric-mesh')}
                  className={`px-2.5 py-1 uppercase transition-all ${
                    shapeMode === 'geometric-mesh' ? 'bg-[var(--surface-raised)] text-black font-bold' : 'text-zinc-400 hover:text-[var(--on-accent)]'
                  }`}
                >
                  Bauhaus Mesh
                </button>
                <button
                  type="button"
                  onClick={() => setShapeMode('particles')}
                  className={`px-2.5 py-1 uppercase transition-all ${
                    shapeMode === 'particles' ? 'bg-[var(--surface-raised)] text-black font-bold' : 'text-zinc-400 hover:text-[var(--on-accent)]'
                  }`}
                >
                  Fluid Dust
                </button>
                <button
                  type="button"
                  onClick={() => setShapeMode('waveform')}
                  className={`px-2.5 py-1 uppercase transition-all ${
                    shapeMode === 'waveform' ? 'bg-[var(--surface-raised)] text-black font-bold' : 'text-zinc-400 hover:text-[var(--on-accent)]'
                  }`}
                >
                  Waveform
                </button>
              </div>
            </div>

          </div>

          {/* Side Controls & Parametric Inspector (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Preset Selector Panel */}
            <div className="border border-white/15 bg-[var(--surface-raised)]/5 p-4 rounded-xs">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--accent-tertiary)] font-bold mb-3">
                <Sliders className="w-3.5 h-3.5" />
                <span>{t.presetLabel[language]}</span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {MODULOR_PRESETS.map((p: ModulorPreset) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => handleSelectPreset(p)}
                    className={`p-2.5 border text-left font-mono text-xs uppercase transition-all ${
                      activePreset.id === p.id
                        ? 'border-[var(--accent)] bg-[var(--accent)]/15 text-[var(--on-accent)] font-bold shadow-[0_0_15px_rgba(222,56,49,0.3)]'
                        : 'border-white/10 bg-black/40 text-zinc-400 hover:border-white/30 hover:text-[var(--on-accent)]'
                    }`}
                  >
                    <div className="text-[11px] truncate">{p.name}</div>
                    <div className="text-[9px] text-zinc-500 mt-1">{p.colorScheme}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Parametric Shader Sliders */}
            <div className="border border-white/15 bg-[var(--surface-raised)]/5 p-4 rounded-xs space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[#EDEDED] font-bold uppercase">
                <span>{t.shaderControls[language]}</span>
                <span className="text-[10px] text-zinc-400">GLSL PARAMS</span>
              </div>

              {/* Particle Count */}
              <div>
                <div className="flex justify-between text-zinc-300 mb-1">                  <span>{t.particlesLabel[language]}</span>
                  <span className="text-[var(--accent)]">{particleDensity}</span>
                </div>
                <input
                  type="range"
                  min="60"
                  max="320"
                  step="10"
                  value={particleDensity}
                  onChange={(e) => {
                    const count = Number(e.target.value);
                    setParticleDensity(count);
                    initParticles(count, activePreset.colorScheme);
                  }}
                  className="w-full accent-[#DE3831] bg-[var(--surface-raised)]/10 h-1.5 rounded-none"
                />
              </div>

              {/* Speed Multiplier */}
              <div>
                <div className="flex justify-between text-zinc-300 mb-1">
                  <span>{t.speedLabel[language]}</span>
                  <span className="text-[var(--accent-secondary)]">{speedMultiplier.toFixed(1)}x</span>
                </div>
                <input
                  type="range"
                  min="0.2"
                  max="3.0"
                  step="0.1"
                  value={speedMultiplier}
                  onChange={(e) => setSpeedMultiplier(Number(e.target.value))}
                  className="w-full accent-[#1350B0] bg-[var(--surface-raised)]/10 h-1.5 rounded-none"
                />
              </div>

              {/* Bloom Glow */}
              <div>
                <div className="flex justify-between text-zinc-300 mb-1">
                  <span>{t.glowLabel[language]}</span>
                  <span className="text-[var(--accent-tertiary)]">{glowIntensity}px</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="45"
                  step="1"
                  value={glowIntensity}
                  onChange={(e) => setGlowIntensity(Number(e.target.value))}
                  className="w-full accent-[#F7B801] bg-[var(--surface-raised)]/10 h-1.5 rounded-none"
                />
              </div>

              {/* Trail persistence */}
              <div>
                <div className="flex justify-between text-zinc-300 mb-1">
                  <span>{t.trailLabel[language]}</span>
                  <span className="text-[var(--on-accent)]">{Math.round((1 - trailPersistence) * 100)}%</span>
                </div>
                <input
                  type="range"
                  min="0.04"
                  max="0.35"
                  step="0.01"
                  value={trailPersistence}
                  onChange={(e) => setTrailPersistence(Number(e.target.value))}
                  className="w-full accent-white bg-[var(--surface-raised)]/10 h-1.5 rounded-none"
                />
              </div>
            </div>

            {/* Web Audio Synth Panel */}
            <div className="border border-white/15 bg-[var(--surface-raised)]/5 p-4 rounded-xs space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="font-bold uppercase text-[var(--accent-tertiary)] flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5" />
                  <span>{t.audioTitle[language]}</span>
                </span>
                <span className="text-[10px] text-zinc-400">432Hz</span>
              </div>

              <p className="text-zinc-400 text-[11px] leading-relaxed font-sans">
                {t.audioDesc[language]}
              </p>

              <button
                type="button"
                onClick={toggleAudio}
                className={`w-full py-2.5 border uppercase font-bold tracking-wider transition-all flex items-center justify-center gap-2 ${
                  audioActive
                    ? 'border-[var(--accent-tertiary)] bg-[var(--accent-tertiary)] text-black shadow-[0_0_15px_rgba(247,184,1,0.4)]'
                    : 'border-white/20 bg-[var(--surface-raised)]/10 text-[var(--on-accent)] hover:bg-[var(--surface-raised)]/20'
                }`}
              >
                {audioActive ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                <span>{audioActive ? t.audioToggleStop[language] : t.audioToggleStart[language]}</span>
              </button>
            </div>

          </div>

        </div>

        {/* Multimodal Generation Pipeline Nodes */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex items-center gap-2 font-mono text-xs text-[var(--accent)] uppercase tracking-[0.2em] font-bold mb-4">
            <span className="w-2.5 h-2.5 bg-[var(--accent)] inline-block" />
            <span>{t.nodesTitle[language]}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {t.nodes.map((node: { id: string; title: Record<Language, string>; desc: Record<Language, string>; tag: string }, i: number) => (
              <div
                key={node.id}
                className="p-4 border border-white/15 bg-[var(--surface-raised)]/5 hover:border-white/30 transition-all flex flex-col justify-between font-mono"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] px-1.5 py-0.5 border border-white/20 text-zinc-400">
                      NODE 0{i + 1}
                    </span>                    <span className="text-[10px] text-[var(--accent-tertiary)] font-bold">
                      {node.tag}
                    </span>
                  </div>

                  <h3 className="dz-h3 mb-1 text-sm uppercase text-[var(--on-accent)]">
                    {node.title[language]}
                  </h3>
                  <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                    {node.desc[language]}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-zinc-500">
                  <span>STATUS: RUNNING</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
};

export const MusaStudio = ModulorStudio;
