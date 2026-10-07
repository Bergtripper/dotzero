import React from 'react';
import { DotzeroMark } from './DotzeroMark';

const Section = ({n,title,children}:{n:string;title:string;children:React.ReactNode}) => (
  <section className="border-b dz-border">
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-2"><div className="dz-meta">{n} / {title}</div></div>
        <div className="lg:col-span-10">{children}</div>
      </div>
    </div>
  </section>
);

export const IdentityPage: React.FC = () => (
  <main id="identity" className="pt-16">
    <section className="border-b dz-border">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="dz-meta">DOTZERO / CD + CI / WORKING SYSTEM v0.1</div>
        <div className="mt-10 grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8"><h1 className="dz-h1 text-[clamp(4.5rem,12vw,11rem)]">IDENTITY.</h1><p className="dz-body-strong mt-8 max-w-2xl">A living corporate design and identity system for DOTZERO and the projects that inherit it.</p></div>
          <div className="flex justify-end lg:col-span-4"><DotzeroMark size={170}/></div>
        </div>
      </div>
    </section>
    <Section n="01" title="MARK">
      <div className="grid gap-px border dz-border bg-[var(--line)] md:grid-cols-2">
        <div className="flex min-h-80 items-center justify-center bg-[var(--bg)]"><DotzeroMark size={170}/></div>
        <div className="bg-[var(--bg)] p-8"><div className="dz-meta">SEMANTICS</div><h2 className="dz-h2 mt-8 text-4xl">DOT.<br/>ZERO.<br/>OPEN DIRECTION.</h2><p className="dz-body mt-8 max-w-md">Origin, field and a line that breaks the perimeter. The human silhouette is latent, never illustrated.</p></div>
      </div>
    </Section>
    <Section n="02" title="CONSTRUCTION">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="dz-identity-hero bauhaus-grid-pattern border dz-border"><DotzeroMark size={190}/></div>
        <div><div className="dz-meta">RULE</div><p className="dz-body-strong mt-6">The slash remains contained below and exits only through the upper-right boundary. The dot is centred on the zero axis.</p><div className="mt-10 font-mono text-xs leading-8">01 — DOT / ORIGIN<br/>02 — ZERO / FIELD<br/>03 — SLASH / OPEN DIRECTION</div></div>
      </div>
    </Section>
    <Section n="03" title="TYPOGRAPHY">
      <div className="space-y-10"><div><div className="dz-meta">DISPLAY / CURRENT FOUNDATION</div><div className="font-display mt-4 text-[clamp(3rem,9vw,8rem)] font-extrabold tracking-[-.075em] leading-none">DOTZERO.</div></div><div className="border-t dz-rule pt-8"><div className="dz-meta">PRINCIPLE</div><p className="dz-body mt-4 max-w-3xl">Bauhaus as construction logic, not period costume: geometric hierarchy, functional contrast and contemporary grotesk typography.</p></div></div>
    </Section>
    <Section n="04" title="COLOR">
      <div className="grid gap-px border dz-border bg-[var(--line)] sm:grid-cols-3"><div className="min-h-48 bg-[var(--accent)] p-5 text-white"><div className="font-mono text-[9px]">DOTZERO RED<br/>#DE3831</div></div><div className="min-h-48 bg-[var(--bg)] p-5"><div className="dz-meta">PAPER<br/>#F6F4EE</div></div><div className="min-h-48 bg-[var(--text)] p-5 text-[var(--bg)]"><div className="font-mono text-[9px]">INK<br/>#121212</div></div></div>
    </Section>
    <Section n="05" title="LOCKUPS">
      <div className="grid gap-12 md:grid-cols-2"><div><div className="dz-meta">MASTER</div><div className="mt-8 flex items-center gap-4"><span className="font-display text-5xl font-extrabold tracking-[-.07em]">DOTZERO<span className="text-[var(--accent)]">.</span></span><DotzeroMark size={48}/></div></div><div><div className="dz-meta">PROJECT SIGNATURE</div><div className="mt-8"><div className="font-display text-4xl font-extrabold tracking-[-.055em]">PROJECT <DotzeroMark size={22} className="inline-block"/></div><div className="dz-meta mt-3 normal-case">a <b className="dz-text">DOTZERO<span className="text-[var(--accent)]">.</span></b> Project</div></div></div></div>
    </Section>
    <Section n="06" title="SCALE + BEHAVIOUR">
      <div className="flex flex-wrap items-end gap-10">{[16,20,24,32,48,72,120].map(s=><figure className="m-0 grid justify-items-center gap-3" key={s}><DotzeroMark size={s}/><figcaption className="dz-meta">{s}px</figcaption></figure>)}</div>
    </Section>
    <Section n="07" title="INHERITANCE">
      <h2 className="dz-h2 text-4xl sm:text-6xl">ONE MARK.<br/>MANY INSTRUMENTS.</h2><p className="dz-body mt-7 max-w-3xl">Projects inherit the canonical mark, semantic color and project signature from the DOTZERO Foundation. Their editorial identity remains independent.</p>
    </Section>
    <Section n="08" title="APPLICATIONS">
      <div className="grid gap-4 md:grid-cols-3">{['HEADER','INDEX / CARD','FOOTER / COLOPHON'].map((x,i)=><div key={x} className="flex min-h-52 flex-col justify-between border dz-border p-5"><div className="dz-meta">0{i+1} / {x}</div><DotzeroMark size={i===1?64:32}/><div className="font-mono text-[9px] uppercase tracking-[.14em]">DOTZERO FOUNDATION</div></div>)}</div>
    </Section>
  </main>
);
