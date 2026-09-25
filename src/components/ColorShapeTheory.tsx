import React, { useState } from 'react';
import { CheckCircle2, RefreshCw } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { UI_TEXT } from '../translations';

interface ShapeMapping {
  triangle: string;
  square: string;
  circle: string;
}

export const ColorShapeTheory: React.FC = () => {
  const { language } = useLanguage();
  const t = UI_TEXT.theory;

  const [userMapping, setUserMapping] = useState<ShapeMapping>({
    triangle: '',
    square: '',
    circle: '',
  });

  const [tested, setTested] = useState(false);

  // Kandinsky's historic answer: Triangle -> Yellow, Square -> Red, Circle -> Blue
  const correctMapping: ShapeMapping = {
    triangle: '#F7B801',
    square: '#DE3831',
    circle: '#1350B0',
  };

  const colors = [
    { id: '#DE3831', label: language === 'de' ? 'Kadmiumrot' : language === 'en' ? 'Cadmium Red' : 'Rosso Cadmio', hex: '#DE3831' },
    { id: '#1350B0', label: language === 'de' ? 'Kobaltblau' : language === 'en' ? 'Cobalt Blue' : 'Blu Cobalto', hex: '#1350B0' },
    { id: '#F7B801', label: language === 'de' ? 'Chromgelb' : language === 'en' ? 'Chrome Yellow' : 'Giallo Cromo', hex: '#F7B801' },
  ];

  const handleAssign = (shape: 'triangle' | 'square' | 'circle', colorHex: string) => {
    setUserMapping((prev) => ({
      ...prev,
      [shape]: colorHex,
    }));
    setTested(false);
  };

  const handleTest = () => {
    setTested(true);
  };

  const handleReset = () => {
    setUserMapping({ triangle: '', square: '', circle: '' });
    setTested(false);
  };

  const isComplete =
    Boolean(userMapping.triangle && userMapping.square && userMapping.circle);

  const isExactKandinsky =
    userMapping.triangle === correctMapping.triangle &&
    userMapping.square === correctMapping.square &&
    userMapping.circle === correctMapping.circle;

  return (
    <section id="teoria" className="py-20 border-b-2 border-[#121212] bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 pb-6 border-b-2 border-[#121212] flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#1350B0] uppercase tracking-[0.2em] font-bold mb-2">
              <span className="w-2.5 h-2.5 bg-[#1350B0] inline-block" />
              <span>{t.badge[language]}</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase font-display tracking-tight text-[#121212]">
              {t.title[language]}
            </h2>
          </div>
          <div className="font-mono text-xs max-w-sm text-zinc-700">
            {t.intro[language]}
          </div>
        </div>

        {/* Interactive Experiment Box */}
        <div className="border-2 border-[#121212] bg-white p-6 sm:p-10 shadow-[8px_8px_0px_0px_#121212] mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b-2 border-[#121212] gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#DE3831] font-bold">
                {t.expBadge[language]}
              </span>
              <h3 className="font-display font-bold text-2xl uppercase text-[#121212] mt-1">
                {t.expInstruction[language]}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleReset}
                className="px-3 py-1.5 border border-[#121212] font-mono text-xs uppercase hover:bg-zinc-100 flex items-center gap-1.5"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>{t.resetBtn[language]}</span>
              </button>
              {isComplete && (
                <button
                  type="button"
                  id="btn-verify-kandinsky"
                  onClick={handleTest}
                  className="px-4 py-1.5 bg-[#121212] text-white font-mono text-xs uppercase font-bold border border-[#121212] hover:bg-[#DE3831] transition-colors"
                >
                  {t.verifyBtn[language]}
                </button>
              )}
            </div>
          </div>

          {/* 3 Shapes to Color */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            
            {/* Shape 1: Triangolo */}
            <div className="border-2 border-[#121212] p-6 bg-[#FAF8F5] flex flex-col items-center justify-between text-center">
              <div className="font-mono text-xs uppercase font-bold tracking-widest mb-4">
                {t.triangleTitle[language]}
              </div>

              <div className="my-4 h-36 flex items-center justify-center">
                <svg width="120" height="120" viewBox="0 0 100 100">
                  <polygon
                    points="50,10 95,90 5,90"
                    fill={userMapping.triangle || '#E8E4D9'}
                    stroke="#121212"
                    strokeWidth="3"
                    className="transition-colors duration-200"
                  />
                </svg>
              </div>

              <div className="w-full mt-4">
                <div className="font-mono text-[11px] text-zinc-500 mb-2 uppercase">
                  {t.selectColorHint[language]}
                </div>
                <div className="flex justify-center gap-2">
                  {colors.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => handleAssign('triangle', c.hex)}
                      className={`w-7 h-7 border-2 border-[#121212] transition-transform ${
                        userMapping.triangle === c.hex
                          ? 'scale-125 ring-2 ring-[#121212] z-10'
                          : 'opacity-80 hover:opacity-100 hover:scale-110'
                      }`}
                      style={{ backgroundColor: c.hex }}
                      title={c.label}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Shape 2: Quadrato */}
            <div className="border-2 border-[#121212] p-6 bg-[#FAF8F5] flex flex-col items-center justify-between text-center">
              <div className="font-mono text-xs uppercase font-bold tracking-widest mb-4">
                {t.squareTitle[language]}
              </div>

              <div className="my-4 h-36 flex items-center justify-center">
                <div
                  className="w-28 h-28 border-2 border-[#121212] transition-colors duration-200"
                  style={{ backgroundColor: userMapping.square || '#E8E4D9' }}
                />
              </div>

              <div className="w-full mt-4">
                <div className="font-mono text-[11px] text-zinc-500 mb-2 uppercase">
                  {t.selectColorHint[language]}
                </div>
                <div className="flex justify-center gap-2">
                  {colors.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => handleAssign('square', c.hex)}
                      className={`w-7 h-7 border-2 border-[#121212] transition-transform ${
                        userMapping.square === c.hex
                          ? 'scale-125 ring-2 ring-[#121212] z-10'
                          : 'opacity-80 hover:opacity-100 hover:scale-110'
                      }`}
                      style={{ backgroundColor: c.hex }}
                      title={c.label}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Shape 3: Cerchio */}
            <div className="border-2 border-[#121212] p-6 bg-[#FAF8F5] flex flex-col items-center justify-between text-center">
              <div className="font-mono text-xs uppercase font-bold tracking-widest mb-4">
                {t.circleTitle[language]}
              </div>

              <div className="my-4 h-36 flex items-center justify-center">
                <div
                  className="w-28 h-28 rounded-full border-2 border-[#121212] transition-colors duration-200"
                  style={{ backgroundColor: userMapping.circle || '#E8E4D9' }}
                />
              </div>

              <div className="w-full mt-4">
                <div className="font-mono text-[11px] text-zinc-500 mb-2 uppercase">
                  {t.selectColorHint[language]}
                </div>
                <div className="flex justify-center gap-2">
                  {colors.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => handleAssign('circle', c.hex)}
                      className={`w-7 h-7 border-2 border-[#121212] transition-transform ${
                        userMapping.circle === c.hex
                          ? 'scale-125 ring-2 ring-[#121212] z-10'
                          : 'opacity-80 hover:opacity-100 hover:scale-110'
                      }`}
                      style={{ backgroundColor: c.hex }}
                      title={c.label}
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Test Result Evaluation */}
          {tested && (
            <div
              className={`p-6 border-2 border-[#121212] font-mono text-sm ${
                isExactKandinsky ? 'bg-[#FAF8F5]' : 'bg-[#ECE8DD]'
              }`}
            >
              <div className="flex items-center gap-2 mb-2 font-bold uppercase text-[#121212]">
                <CheckCircle2 className="w-5 h-5 text-[#DE3831]" />
                <span>
                  {isExactKandinsky
                    ? t.resultSuccessTitle[language]
                    : t.resultAltTitle[language]}
                </span>
              </div>
              <p className="text-zinc-800 font-sans text-base">
                {isExactKandinsky
                  ? t.resultSuccessDesc[language]
                  : t.resultAltDesc[language]}
              </p>
            </div>
          )}
        </div>

        {/* Deep Dive Theory Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Card Yellow */}
          <div className="border-2 border-[#121212] bg-white p-6 relative">
            <div className="w-full h-3 bg-[#F7B801] mb-4 border border-[#121212]" />
            <div className="flex items-center justify-between mb-3">
              <span className="font-display font-bold text-xl uppercase text-[#121212]">
                {t.yellowCard.title[language]}
              </span>
              <span className="font-mono text-xs text-zinc-500">{t.yellowCard.angle[language]}</span>
            </div>
            <p className="text-sm text-zinc-700 leading-relaxed font-sans">
              {t.yellowCard.body[language]}
            </p>
            <div className="mt-4 pt-3 border-t border-[#121212] font-mono text-[11px] text-zinc-600 flex justify-between">
              <span>{t.yellowCard.force[language]}</span>
              <span>{t.yellowCard.sound[language]}</span>
            </div>
          </div>

          {/* Card Red */}
          <div className="border-2 border-[#121212] bg-white p-6 relative">
            <div className="w-full h-3 bg-[#DE3831] mb-4 border border-[#121212]" />
            <div className="flex items-center justify-between mb-3">
              <span className="font-display font-bold text-xl uppercase text-[#121212]">
                {t.redCard.title[language]}
              </span>
              <span className="font-mono text-xs text-zinc-500">{t.redCard.angle[language]}</span>
            </div>
            <p className="text-sm text-zinc-700 leading-relaxed font-sans">
              {t.redCard.body[language]}
            </p>
            <div className="mt-4 pt-3 border-t border-[#121212] font-mono text-[11px] text-zinc-600 flex justify-between">
              <span>{t.redCard.force[language]}</span>
              <span>{t.redCard.sound[language]}</span>
            </div>
          </div>

          {/* Card Blue */}
          <div className="border-2 border-[#121212] bg-white p-6 relative">
            <div className="w-full h-3 bg-[#1350B0] mb-4 border border-[#121212]" />
            <div className="flex items-center justify-between mb-3">
              <span className="font-display font-bold text-xl uppercase text-[#121212]">
                {t.blueCard.title[language]}
              </span>
              <span className="font-mono text-xs text-zinc-500">{t.blueCard.angle[language]}</span>
            </div>
            <p className="text-sm text-zinc-700 leading-relaxed font-sans">
              {t.blueCard.body[language]}
            </p>
            <div className="mt-4 pt-3 border-t border-[#121212] font-mono text-[11px] text-zinc-600 flex justify-between">
              <span>{t.blueCard.force[language]}</span>
              <span>{t.blueCard.sound[language]}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};