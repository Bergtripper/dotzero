import React from 'react';
import { FEEDBACK_INDICATORS } from './model';

export function FeedbackProject() {
  return (
    <main id="main-content" className="relative z-10">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-20">
        <div className="grid grid-cols-6 lg:grid-cols-12 gap-x-4">
          <div className="col-span-6 lg:col-span-2">
            <p className="dz-meta">06 / Research / 2026</p>
          </div>
          <div className="col-span-6 lg:col-span-9 lg:col-start-4 mt-8 lg:mt-0">
            <p className="dz-meta mb-5">DOTZERO / FEEDBACK</p>
            <h1 className="dz-h1 text-[clamp(3.5rem,9vw,9rem)] max-w-6xl">
              Can AI learn to build better AI?
            </h1>
            <p className="dz-body-strong max-w-3xl mt-10 sm:mt-14 text-xl sm:text-2xl">
              An observatory of AI capability, research automation and recursive progress.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y dz-rule">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-6 lg:grid-cols-12 gap-x-4 gap-y-10">
            <div className="col-span-6 lg:col-span-3">
              <p className="dz-meta">00 / Premise</p>
            </div>
            <div className="col-span-6 lg:col-span-7 lg:col-start-5">
              <p className="dz-h3 text-3xl sm:text-5xl">
                The important question isn't only whether AI gets smarter.
              </p>
              <p className="dz-h3 text-3xl sm:text-5xl mt-4" style={{ color: 'var(--accent)' }}>
                It's whether getting smarter makes it better at getting smarter.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="flex items-end justify-between gap-6 border-b dz-rule pb-5">
          <div>
            <p className="dz-meta">02 / Where are we?</p>
            <h2 className="dz-h2 text-4xl sm:text-6xl mt-3">Four things to watch.</h2>
          </div>
          <p className="dz-meta hidden sm:block">F0 / structure only</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {FEEDBACK_INDICATORS.map((indicator, index) => (
            <article
              key={indicator.id}
              className={`py-8 sm:py-10 border-b dz-rule ${index % 2 === 0 ? 'lg:pr-8 lg:border-r' : 'lg:pl-8'}`}
            >
              <div className="flex items-start justify-between gap-8">
                <span className="dz-h1 text-6xl sm:text-8xl" style={{ color: 'var(--accent)' }}>
                  {indicator.symbol}
                </span>
                <span className="dz-meta">{indicator.status}</span>
              </div>
              <h3 className="dz-h3 text-2xl sm:text-3xl mt-8">{indicator.label}</h3>
              <p className="dz-body-strong mt-3 max-w-xl">{indicator.publicQuestion}</p>
              <p className="dz-meta mt-8">{indicator.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t dz-rule">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 grid grid-cols-6 lg:grid-cols-12 gap-x-4 gap-y-8">
          <p className="dz-meta col-span-6 lg:col-span-3">Method / F0</p>
          <div className="col-span-6 lg:col-span-7 lg:col-start-5">
            <p className="dz-body-strong">
              FEEDBACK separates observations, estimates, hypotheses and scenarios. No single score is presented as a probability of AGI or superintelligence.
            </p>
            <p className="dz-body mt-5">
              Evidence, uncertainty, the interactive model and falsification tests will be added as distinct layers in the next phases.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
