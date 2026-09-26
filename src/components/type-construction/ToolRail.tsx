import React from 'react';
import { EditorMode, Tool } from './model';

interface ToolRailProps {
  tool: Tool;
  mode: EditorMode;
  onToolChange: (tool: Tool) => void;
  onModeChange: (mode: EditorMode) => void;
}

export const ToolRail: React.FC<ToolRailProps> = ({ tool, mode, onToolChange, onModeChange }) => (
  <aside className="tc-rail">
    <div className="tc-label">TOOLS</div>
    <div className="tc-rail-tools">
      {([
        ['select', '↖', 'Select'],
        ['bowl', '○', 'Bowl'],
        ['stem', '│', 'Stem'],
      ] as Array<[Tool, string, string]>).map(([id, symbol, label]) => (
        <button key={id} className={`tc-tool ${tool === id ? 'is-active' : ''}`} onClick={() => onToolChange(id)}>
          <span>{symbol}</span>
          <small>{label}</small>
        </button>
      ))}
    </div>

    <div className="tc-rail-mode">
      <div className="tc-label">VIEW</div>
      <button className={mode === 'design' ? 'is-active' : ''} onClick={() => onModeChange('design')}>DESIGN</button>
      <button className={mode === 'construction' ? 'is-active' : ''} onClick={() => onModeChange('construction')}>CONSTRUCTION</button>
    </div>
  </aside>
);
