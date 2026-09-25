import React, { useLayoutEffect, useRef } from 'react';

interface DotzeroWordmarkProps {
  className?: string;
}

const LETTERS = ['D', 'O', 'T', 'Z', 'E', 'R', 'O'];

export const DotzeroWordmark: React.FC<DotzeroWordmarkProps> = ({ className = '' }) => {
  const frameRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const frame = frameRef.current;
    const word = wordRef.current;
    if (!frame || !word) return;

    let raf = 0;

    const fit = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const available = frame.getBoundingClientRect().width;
        if (available <= 0) return;

        // Measure the actual rendered word at a stable reference size.
        word.style.fontSize = '100px';
        const measured = word.getBoundingClientRect().width;
        if (measured <= 0) return;

        // Fit inside the frame with a tiny safety margin for font rasterisation.
        const nextSize = Math.max(1, (available / measured) * 99.2);
        word.style.fontSize = `${nextSize}px`;
      });
    };

    const observer = new ResizeObserver(fit);
    observer.observe(frame);
    fit();

    document.fonts?.ready.then(fit).catch(() => undefined);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={frameRef} className={`dz-wordmark-frame ${className}`} data-wordmark="dotzero">
      <h1 ref={wordRef} id="dotzero-wordmark" className="dz-wordmark" aria-label="DOTZERO.">
        <span className="dz-wordmark-letters" aria-hidden="true">
          {LETTERS.map((letter, index) => (
            <span
              key={`${letter}-${index}`}
              className="dz-wordmark-letter"
              data-letter={letter}
              data-letter-index={index}
            >
              {letter}
            </span>
          ))}
          <span className="dz-wordmark-dot" data-letter="." data-letter-index={LETTERS.length}>.</span>
        </span>
      </h1>
    </div>
  );
};
