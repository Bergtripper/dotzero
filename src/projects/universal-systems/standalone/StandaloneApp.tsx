import React from 'react';
import { LanguageProvider } from '../../../context/LanguageContext';
import { TypographyProvider } from '../../../context/TypographyContext';
import { UniversalSystemsProject } from '../UniversalSystemsProject';

export const UniversalSystemsStandaloneApp: React.FC = () => (
  <TypographyProvider>
    <LanguageProvider>
      <UniversalSystemsProject />
    </LanguageProvider>
  </TypographyProvider>
);
