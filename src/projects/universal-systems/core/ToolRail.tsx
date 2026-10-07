import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { UNIVERSAL_CORE_COPY } from './copy';
import { EditorMode, GlyphId, Tool } from './model';

interface ToolRailProps {
  tool: Tool;
  mode: EditorMode;
  onToolChange: (tool: Tool) => void;
  onModeChange: (mode: EditorMode) => void;
  glyph: GlyphId;
}

export const ToolRail: React.FC<ToolRailProps> = ({ tool, mode, onToolChange, onModeChange, glyph }) => {
  const { language } = useLanguage();
  const t = UNIVERSAL_CORE_COPY[language];
  return (
  <aside className="tc-rail">
    <div className="tc-label">{t.tools}</div>
    <div className="tc-rail-tools">
      {([
        ['select', '↖', t.toolSelect],
        ['bowl', '○', t.toolBowl],
        ['stem', '│', t.toolStem],
        ['crossbar', '—', t.toolBar],
      ] as Array<[Tool, string, string]>).map(([id, symbol, label]) => (
        <button
          key={id}
          disabled={
            (id === 'stem' && (glyph === 'o' || glyph === 'c' || glyph === 'e')) ||
            (id === 'crossbar' && glyph !== 'e')
          }
          className={`tc-tool ${tool === id ? 'is-active' : ''}`}
          onClick={() => onToolChange(id)}
        >
          <span>{symbol}</span>
          <small>{label}</small>
        </button>
      ))}
    </div>

    <div className="tc-rail-mode">
      <div className="tc-label">{t.view}</div>
      <button className={mode === 'design' ? 'is-active' : ''} onClick={() => onModeChange('design')}>{t.design}</button>
      <button className={mode === 'construction' ? 'is-active' : ''} onClick={() => onModeChange('construction')}>{t.construction}</button>
      <button className={mode === 'system' ? 'is-active' : ''} onClick={() => onModeChange('system')}>{t.system}</button>
      <button className={mode === 'test' ? 'is-active' : ''} onClick={() => onModeChange('test')}>{t.test}</button>
    </div>
  </aside>
  );
};
