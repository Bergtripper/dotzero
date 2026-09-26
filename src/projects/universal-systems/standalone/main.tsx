import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { UniversalSystemsStandaloneApp } from './StandaloneApp';
import '../../../index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UniversalSystemsStandaloneApp />
  </StrictMode>,
);
