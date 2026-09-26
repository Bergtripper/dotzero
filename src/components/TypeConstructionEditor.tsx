import React, { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { DEFAULT_GLYPH, EditorMode, GlyphDesign, PartId, Tool } from './type-construction/model';
import { ToolRail } from './type-construction/ToolRail';
import { GlyphCanvas } from './type-construction/GlyphCanvas';
import { GlyphInspector } from './type-construction/GlyphInspector';
import { TypeSpecimen } from './type-construction/TypeSpecimen';

export const TypeConstructionEditor: React.FC = () => {
  const [design, setDesign] = useState<GlyphDesign>(DEFAULT_GLYPH);
  const [selected, setSelected] = useState<PartId>('bowl');
  const [tool, setTool] = useState<Tool>('select');
  const [mode, setMode] = useState<EditorMode>('design');

  const handleToolChange = (next: Tool) => {
    setTool(next);
    if (next === 'bowl') setSelected('bowl');
    if (next === 'stem') setSelected('stem');
  };

  return (
    <div className="tc-editor">
      <div className="tc-editor-topbar">
        <div>
          <div className="tc-label">TYPE CONSTRUCTION LAB / STEP 01</div>
          <div className="tc-editor-title">GLYPH d</div>
        </div>
        <button
          type="button"
          className="tc-reset"
          onClick={() => {
            setDesign(DEFAULT_GLYPH);
            setSelected('bowl');
            setTool('select');
            setMode('design');
          }}
        >
          <RotateCcw className="h-3.5 w-3.5" />
          RESET
        </button>
      </div>

      <div className="tc-editor-main">
        <ToolRail tool={tool} mode={mode} onToolChange={handleToolChange} onModeChange={setMode} />

        <GlyphCanvas
          design={design}
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
          selected={selected}
          onSelect={setSelected}
          onChange={setDesign}
        />
      </div>

      <TypeSpecimen design={design} />
    </div>
  );
};
