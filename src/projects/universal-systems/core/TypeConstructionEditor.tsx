import React, { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import {
  DEFAULT_GLYPH,
  EditorMode,
  GlyphDesign,
  GlyphId,
  PartId,
  Tool,
} from './model';
import { ToolRail } from './ToolRail';
import { GlyphCanvas } from './GlyphCanvas';
import { GlyphInspector } from './GlyphInspector';
import { TypeSpecimen } from './TypeSpecimen';
import { SharedDna } from './SharedDna';
import { SystemView } from './SystemView';
import { TypeTester } from './TypeTester';

export const TypeConstructionEditor: React.FC = () => {
  const [design, setDesign] = useState<GlyphDesign>(DEFAULT_GLYPH);
  const [glyph, setGlyph] = useState<GlyphId>('d');
  const [selected, setSelected] = useState<PartId>('bowl');
  const [tool, setTool] = useState<Tool>('select');
  const [mode, setMode] = useState<EditorMode>('design');

  const handleToolChange = (next: Tool) => {
    if (glyph === 'o' && next === 'stem') return;
    setTool(next);
    if (next === 'bowl') setSelected('bowl');
    if (next === 'stem') setSelected('stem');
  };

  const handleGlyphChange = (next: GlyphId) => {
    setGlyph(next);
    if (next === 'o') {
      setSelected('bowl');
      setTool('bowl');
    } else {
      setTool('select');
    }
  };

  const reset = () => {
    setDesign(DEFAULT_GLYPH);
    setGlyph('d');
    setSelected('bowl');
    setTool('select');
    setMode('design');
  };

  return (
    <div className="tc-editor">
      <div className="tc-editor-topbar">
        <div>
          <div className="tc-label">TYPE CONSTRUCTION LAB / STEP 05</div>
          <div className="tc-editor-title">TYPE SYSTEM</div>
        </div>

        <div className="tc-editor-actions-top">
          <div className="tc-glyph-switch" aria-label="Select glyph">
            {(['d', 'o'] as GlyphId[]).map((id) => (
              <button
                key={id}
                type="button"
                className={glyph === id ? 'is-active' : ''}
                onClick={() => handleGlyphChange(id)}
              >
                {id}
              </button>
            ))}
          </div>

          <button type="button" className="tc-reset" onClick={reset}>
            <RotateCcw className="h-3.5 w-3.5" />
            RESET
          </button>
        </div>
      </div>

      <div className="tc-editor-main">
        <ToolRail
          tool={tool}
          mode={mode}
          glyph={glyph}
          onToolChange={handleToolChange}
          onModeChange={setMode}
        />

        {mode === 'system' ? (
          <div className="tc-system-slot">
            <SystemView design={design} />
          </div>
        ) : mode === 'test' ? (
          <div className="tc-system-slot">
            <TypeTester design={design} onChange={setDesign} />
          </div>
        ) : (
          <>
            <GlyphCanvas
              design={design}
              glyph={glyph}
              selected={selected}
              mode={mode}
              onSelect={(part) => {
                setSelected(part);
                setTool(part);
              }}
              onChange={setDesign}
            />

            <GlyphInspector
              design={design}
              glyph={glyph}
              selected={selected}
              onSelect={setSelected}
              onChange={setDesign}
            />
          </>
        )}
      </div>

      <SharedDna design={design} />
      <TypeSpecimen design={design} />
    </div>
  );
};
