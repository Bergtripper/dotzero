import React, { useState, useRef } from 'react';
import { GeometricElement } from '../types';
import { LAB_PRESETS } from '../data';
import {
  Plus,
  Trash2,
  Download,
  Layers,
  Copy,
  Check,
  Volume2,
  VolumeX,
  Shuffle
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { UI_TEXT } from '../translations';

export const BauhausLaboratory: React.FC = () => {
  const { language } = useLanguage();
  const t = UI_TEXT.laboratory;

  const [elements, setElements] = useState<GeometricElement[]>(LAB_PRESETS[0].elements);
  const [selectedId, setSelectedId] = useState<string | null>(LAB_PRESETS[0].elements[0].id);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [copiedSvg, setCopiedSvg] = useState(false);

  const canvasRef = useRef<SVGSVGElement | null>(null);

  // Web Audio subtle mechanical Bauhaus sound generator
  const playBauhausTone = (freq = 440, type: OscillatorType = 'sine') => {
    if (!soundEnabled || typeof window === 'undefined') return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.12);
    } catch {
      // AudioContext unavailable or blocked
    }
  };

  const selectedElement = elements.find((el) => el.id === selectedId) || null;

  // Add new primitive
  const addPrimitive = (type: GeometricElement['type'], defaultColor: string) => {
    playBauhausTone(type === 'circle' ? 520 : type === 'triangle' ? 660 : 380, 'square');
    const newEl: GeometricElement = {
      id: Date.now().toString(),
      type,
      x: 180 + Math.floor(Math.random() * 40),
      y: 180 + Math.floor(Math.random() * 40),
      size: type === 'line' ? 240 : 100,
      rotation: 0,
      color: defaultColor,
      opacity: 0.95,
    };
    setElements((prev) => [...prev, newEl]);
    setSelectedId(newEl.id);
  };

  const updateSelected = (updates: Partial<GeometricElement>) => {
    if (!selectedId) return;
    setElements((prev) =>
      prev.map((el) => (el.id === selectedId ? { ...el, ...updates } : el))
    );
  };

  const removeSelected = () => {
    if (!selectedId) return;
    playBauhausTone(220, 'sawtooth');
    setElements((prev) => prev.filter((el) => el.id !== selectedId));
    setSelectedId(null);
  };

  const bringToFront = () => {
    if (!selectedId) return;
    setElements((prev) => {
      const target = prev.find((el) => el.id === selectedId);
      if (!target) return prev;
      return [...prev.filter((el) => el.id !== selectedId), target];
    });
  };

  const loadPreset = (presetName: string) => {
    const p = LAB_PRESETS.find((preset) => preset.name === presetName);
    if (p) {
      playBauhausTone(440, 'triangle');
      setElements([...p.elements]);
      setSelectedId(p.elements[0]?.id || null);
    }
  };

  // Export SVG markup download
  const handleExportSvg = () => {
    playBauhausTone(880, 'sine');
    if (!canvasRef.current) return;
    const svgData = new XMLSerializer().serializeToString(canvasRef.current);
    const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `dotzero-bauhaus-${Date.now()}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopySvg = () => {
    if (!canvasRef.current) return;
    playBauhausTone(750, 'sine');
    const svgData = new XMLSerializer().serializeToString(canvasRef.current);
    navigator.clipboard.writeText(svgData).then(() => {
      setCopiedSvg(true);
      setTimeout(() => setCopiedSvg(false), 2500);
    });
  };

  const randomizePalette = () => {
    playBauhausTone(580, 'triangle');
    const palette = ['#DE3831', '#1350B0', '#F7B801', '#121212', '#FAF8F5'];
    setElements((prev) =>
      prev.map((el) => ({
        ...el,
        color: palette[Math.floor(Math.random() * palette.length)],
        rotation: (el.rotation + Math.floor(Math.random() * 4) * 45) % 360,
      }))
    );
  };

  const primaryColors = [
    { hex: '#DE3831', name: language === 'de' ? 'Kadmiumrot' : language === 'en' ? 'Cadmium Red' : 'Rosso Cadmio' },
    { hex: '#1350B0', name: language === 'de' ? 'Kobaltblau' : language === 'en' ? 'Cobalt Blue' : 'Blu Cobalto' },
    { hex: '#F7B801', name: language === 'de' ? 'Chromgelb' : language === 'en' ? 'Chrome Yellow' : 'Giallo Cromo' },
    { hex: '#121212', name: language === 'de' ? 'Graphitschwarz' : language === 'en' ? 'Carbon Black' : 'Nero Grafite' },
    { hex: '#FAF8F5', name: language === 'de' ? 'Büttenweiß' : language === 'en' ? 'Paper White' : 'Crema Carta' },
  ];

  return (
    <section id="laboratorio" className="py-20 border-b-2 border-[#121212] bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b-2 border-[#121212] gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#DE3831] uppercase tracking-[0.2em] font-bold mb-2">
              <span className="w-2.5 h-2.5 bg-[#DE3831] inline-block" />
              <span>{t.badge[language]}</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase font-display tracking-tight text-[#121212]">
              {t.title[language]}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setSoundEnabled(!soundEnabled)}
              className={`p-2 border border-[#121212] font-mono text-xs uppercase flex items-center gap-1.5 transition-colors ${
                soundEnabled ? 'bg-[#121212] text-white' : 'bg-white text-zinc-700'
              }`}
              title="Feedback sonoro Bauhaus"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-[#F7B801]" /> : <VolumeX className="w-4 h-4" />}
              <span className="hidden sm:inline">{t.audioToggle[language]}</span>
            </button>

            <button
              type="button"
              onClick={randomizePalette}
              className="p-2 border border-[#121212] bg-white font-mono text-xs uppercase flex items-center gap-1.5 hover:bg-[#ECE8DD]"
              title="Variazione casuale canone Bauhaus"
            >
              <Shuffle className="w-4 h-4 text-[#DE3831]" />
              <span className="hidden sm:inline">{t.variationToggle[language]}</span>
            </button>
          </div>
        </div>

        {/* Workspace Container */}
        <div className="border-2 border-[#121212] bg-white shadow-[8px_8px_0px_0px_#121212] grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left: Interactive Canvas (7 cols) */}
          <div className="lg:col-span-7 p-6 border-b-2 lg:border-b-0 lg:border-r-2 border-[#121212] flex flex-col items-center justify-center bg-[#FAF8F5]">
            
            {/* Top Canvas Bar */}
            <div className="w-full flex items-center justify-between pb-3 mb-3 border-b border-[#121212] font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#DE3831]" />
                <span className="font-bold uppercase">CANVAS 400×400 PT</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-600">
                <span>{t.elementsCount[language]}: {elements.length}</span>
              </div>
            </div>

            {/* SVG Visual Stage */}
            <div className="relative w-full max-w-[420px] aspect-square bg-[#F6F4EE] border-2 border-[#121212] shadow-inner overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bauhaus-grid-pattern opacity-60 pointer-events-none" />

              <svg
                ref={canvasRef}
                viewBox="0 0 400 400"
                className="w-full h-full cursor-pointer select-none"
                id="bauhaus-vector-canvas"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="400" height="400" fill="#F6F4EE" />

                {elements.map((el) => {
                  const isSelected = el.id === selectedId;

                  let shapeNode = null;
                  if (el.type === 'circle') {
                    shapeNode = (
                      <circle
                        cx="0"
                        cy="0"
                        r={el.size / 2}
                        fill={el.color}
                        opacity={el.opacity}
                        stroke="#121212"
                        strokeWidth="2"
                      />
                    );
                  } else if (el.type === 'square') {
                    shapeNode = (
                      <rect
                        x={-el.size / 2}
                        y={-el.size / 2}
                        width={el.size}
                        height={el.size}
                        fill={el.color}
                        opacity={el.opacity}
                        stroke="#121212"
                        strokeWidth="2"
                      />
                    );
                  } else if (el.type === 'triangle') {
                    const h = (el.size * Math.sqrt(3)) / 2;
                    shapeNode = (
                      <polygon
                        points={`0,${-h / 1.5} ${el.size / 2},${h / 3} ${-el.size / 2},${h / 3}`}
                        fill={el.color}
                        opacity={el.opacity}
                        stroke="#121212"
                        strokeWidth="2"
                      />
                    );
                  } else if (el.type === 'semicircle') {
                    const r = el.size / 2;
                    shapeNode = (
                      <path
                        d={`M ${-r},0 A ${r},${r} 0 0,1 ${r},0 Z`}
                        fill={el.color}
                        opacity={el.opacity}
                        stroke="#121212"
                        strokeWidth="2"
                      />
                    );
                  } else if (el.type === 'line') {
                    shapeNode = (
                      <rect
                        x={-el.size / 2}
                        y="-4"
                        width={el.size}
                        height="8"
                        fill={el.color}
                        opacity={el.opacity}
                      />
                    );
                  }

                  return (
                    <g
                      key={el.id}
                      transform={`translate(${el.x}, ${el.y}) rotate(${el.rotation})`}
                      onClick={(e) => {
                        e.stopPropagation();
                        playBauhausTone(350, 'sine');
                        setSelectedId(el.id);
                      }}
                      className="cursor-pointer"
                    >
                      {shapeNode}
                      {isSelected && (
                        <rect
                          x={-el.size / 2 - 8}
                          y={-el.size / 2 - 8}
                          width={el.size + 16}
                          height={el.size + 16}
                          fill="none"
                          stroke="#DE3831"
                          strokeWidth="1.5"
                          strokeDasharray="4 3"
                          pointerEvents="none"
                        />
                      )}
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Canvas Actions footer */}
            <div className="w-full mt-4 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  id="btn-export-svg"
                  onClick={handleExportSvg}
                  className="px-3 py-1.5 bg-[#121212] text-white font-mono text-xs uppercase font-bold flex items-center gap-1.5 hover:bg-[#DE3831] transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{t.exportSvg[language]}</span>
                </button>

                <button
                  type="button"
                  id="btn-copy-svg"
                  onClick={handleCopySvg}
                  className="px-3 py-1.5 border border-[#121212] bg-white font-mono text-xs uppercase flex items-center gap-1.5 hover:bg-zinc-100"
                >
                  {copiedSvg ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedSvg ? t.copied[language] : t.copyCode[language]}</span>
                </button>
              </div>

              {/* Presets dropdown */}
              <div className="flex items-center gap-1 font-mono text-xs">
                <span className="text-zinc-500 hidden sm:inline">Preset:</span>
                <select
                  aria-label="Carica composizione preset"
                  onChange={(e) => loadPreset(e.target.value)}
                  className="border border-[#121212] bg-white px-2 py-1 font-mono text-xs outline-none"
                >
                  {LAB_PRESETS.map((preset) => (
                    <option key={preset.name} value={preset.name}>
                      {preset.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

          </div>

          {/* Right: Primitives Toolbar & Inspector (5 cols) */}
          <div className="lg:col-span-5 p-6 flex flex-col justify-between space-y-6">
            
            {/* Primitives Creator Panel */}
            <div>
              <div className="font-mono text-xs uppercase font-bold text-zinc-600 mb-3 flex items-center gap-2">
                <Plus className="w-3.5 h-3.5" />
                <span>{t.insertTitle[language]}</span>
              </div>

              <div className="grid grid-cols-5 gap-2">
                <button
                  type="button"
                  onClick={() => addPrimitive('circle', '#DE3831')}
                  className="p-2.5 border-2 border-[#121212] bg-white hover:bg-[#FAF8F5] flex flex-col items-center gap-1 transition-transform active:scale-95"
                  title="Aggiungi Cerchio"
                >
                  <span className="w-6 h-6 rounded-full bg-[#DE3831] border border-[#121212]" />
                  <span className="font-mono text-[10px] uppercase">{t.circle[language]}</span>
                </button>

                <button
                  type="button"
                  onClick={() => addPrimitive('square', '#1350B0')}
                  className="p-2.5 border-2 border-[#121212] bg-white hover:bg-[#FAF8F5] flex flex-col items-center gap-1 transition-transform active:scale-95"
                  title="Aggiungi Quadrato"
                >
                  <span className="w-6 h-6 bg-[#1350B0] border border-[#121212]" />
                  <span className="font-mono text-[10px] uppercase">{t.square[language]}</span>
                </button>

                <button
                  type="button"
                  onClick={() => addPrimitive('triangle', '#F7B801')}
                  className="p-2.5 border-2 border-[#121212] bg-white hover:bg-[#FAF8F5] flex flex-col items-center gap-1 transition-transform active:scale-95"
                  title="Aggiungi Triangolo"
                >
                  <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-[#F7B801]" />
                  <span className="font-mono text-[10px] uppercase">{t.triangle[language]}</span>
                </button>

                <button
                  type="button"
                  onClick={() => addPrimitive('semicircle', '#121212')}
                  className="p-2.5 border-2 border-[#121212] bg-white hover:bg-[#FAF8F5] flex flex-col items-center gap-1 transition-transform active:scale-95"
                  title="Aggiungi Semicerchio"
                >
                  <div className="w-6 h-3 bg-[#121212] rounded-t-full border border-[#121212]" />
                  <span className="font-mono text-[10px] uppercase">{t.semicircle[language]}</span>
                </button>

                <button
                  type="button"
                  onClick={() => addPrimitive('line', '#121212')}
                  className="p-2.5 border-2 border-[#121212] bg-white hover:bg-[#FAF8F5] flex flex-col items-center gap-1 transition-transform active:scale-95"
                  title="Aggiungi Linea"
                >
                  <div className="w-6 h-1 bg-[#121212] mt-2.5" />
                  <span className="font-mono text-[10px] uppercase">{t.line[language]}</span>
                </button>
              </div>
            </div>

            {/* Selected Element Inspector */}
            {selectedElement ? (
              <div className="border-2 border-[#121212] p-4 bg-[#FAF8F5] space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-[#121212] font-mono text-xs">
                  <span className="font-bold uppercase text-[#DE3831]">
                    {t.modifyLabel[language]} {selectedElement.type.toUpperCase()}
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={bringToFront}
                      className="p-1 border border-[#121212] bg-white hover:bg-zinc-100"
                      title="Porta in primo piano"
                    >
                      <Layers className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={removeSelected}
                      className="p-1 border border-[#121212] bg-white text-red-600 hover:bg-red-50"
                      title="Elimina elemento"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Color Chooser */}
                <div>
                  <div className="font-mono text-[11px] text-zinc-600 uppercase mb-1.5">
                    {t.colorLabel[language]}
                  </div>
                  <div className="flex gap-2">
                    {primaryColors.map((c) => (
                      <button
                        key={c.hex}
                        type="button"
                        onClick={() => {
                          playBauhausTone(500, 'sine');
                          updateSelected({ color: c.hex });
                        }}
                        className={`w-7 h-7 border-2 border-[#121212] transition-transform ${
                          selectedElement.color === c.hex
                            ? 'scale-115 ring-2 ring-[#121212]'
                            : 'hover:scale-110'
                        }`}
                        style={{ backgroundColor: c.hex }}
                        title={c.name}
                      />
                    ))}
                  </div>
                </div>

                {/* Position X & Y */}
                <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                  <div>
                    <label className="block text-zinc-600 uppercase mb-1">
                      X: {selectedElement.x}pt
                    </label>
                    <input
                      type="range"
                      min="20"
                      max="380"
                      value={selectedElement.x}
                      onChange={(e) => updateSelected({ x: Number(e.target.value) })}
                      className="w-full accent-[#121212]"
                    />
                  </div>
                  <div>
                    <label className="block text-zinc-600 uppercase mb-1">
                      Y: {selectedElement.y}pt
                    </label>
                    <input
                      type="range"
                      min="20"
                      max="380"
                      value={selectedElement.y}
                      onChange={(e) => updateSelected({ y: Number(e.target.value) })}
                      className="w-full accent-[#121212]"
                    />
                  </div>
                </div>

                {/* Size & Rotation */}
                <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                  <div>
                    <label className="block text-zinc-600 uppercase mb-1">
                      {t.sizeLabel[language]} {selectedElement.size}pt
                    </label>
                    <input
                      type="range"
                      min="20"
                      max="280"
                      value={selectedElement.size}
                      onChange={(e) => updateSelected({ size: Number(e.target.value) })}
                      className="w-full accent-[#1350B0]"
                    />
                  </div>
                  <div>
                    <label className="block text-zinc-600 uppercase mb-1">
                      {t.rotationLabel[language]} {selectedElement.rotation}°
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="360"
                      step="5"
                      value={selectedElement.rotation}
                      onChange={(e) => updateSelected({ rotation: Number(e.target.value) })}
                      className="w-full accent-[#F7B801]"
                    />
                  </div>
                </div>

                {/* Opacity */}
                <div className="font-mono text-xs">
                  <label className="block text-zinc-600 uppercase mb-1">
                    {t.opacityLabel[language]} {Math.round(selectedElement.opacity * 100)}%
                  </label>
                  <input
                    type="range"
                    min="0.2"
                    max="1"
                    step="0.05"
                    value={selectedElement.opacity}
                    onChange={(e) => updateSelected({ opacity: Number(e.target.value) })}
                    className="w-full accent-[#DE3831]"
                  />
                </div>
              </div>
            ) : (
              <div className="border-2 border-dashed border-[#121212] p-6 text-center font-mono text-xs text-zinc-500">
                {t.selectHint[language]}
              </div>
            )}

            {/* Quick Helper Note */}
            <div className="font-mono text-[11px] text-zinc-500 border-t border-[#121212] pt-3">
              {t.tip[language]}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
