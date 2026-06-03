import React from 'react';
import { motion } from 'motion/react';
import { ActiveSection } from '../types';

export const NAV_CARDS = [
  {
    id: 'soaps' as const,
    title: 'Seifenkatalog',
    subtitle: 'Entdecken Sie unsere Naturseifen',
    desc: 'Hergestellt im traditionellen Kaltverfahren mit wertvollen Pflanzenölen, Heilkräutern und Mosel-Zutaten.',
    btn: 'Katalog öffnen ❦',
    img: '/src/assets/images/Icon Soapes.png',
  },
  {
    id: 'about' as const,
    title: 'Über mich',
    subtitle: 'Marion Muszarsky & Philosophie',
    desc: 'Erfahren Sie mehr über die Gründerin, unsere traditionelle Werkstatt und die Liebe zur moselländischen Natur.',
    btn: 'Meine Geschichte ❦',
    img: '/src/assets/images/Icon about me.png',
  },
  {
    id: 'benefits' as const,
    title: 'La Mosella',
    subtitle: 'Philosophie & Handarbeit',
    desc: 'Erfahren Sie, warum unsere handgerührten Naturseifen eine Wohltat für Ihre Haut und unsere Umwelt sind.',
    btn: 'Unsere Qualität ❦',
    img: '/src/assets/images/Icon La Mosella.png',
  },
];

export const PHILOSOPHY = [
  {
    numeral: 'I',
    title: 'Handgerührt',
    desc: 'Jede Seife entsteht in kleinen Chargen, von Hand gerührt und mit Geduld gereift.',
  },
  {
    numeral: 'II',
    title: 'Mosel-Zutaten',
    desc: 'Traubenkernöl, Wein und Heilkräuter aus der Region prägen jeden Riegel.',
  },
  {
    numeral: 'III',
    title: 'Kaltverfahren',
    desc: 'Schonende Kaltverseifung bewahrt die wertvollen Inhaltsstoffe der Pflanzenöle.',
  },
];

export function OrnamentDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <span className="h-px w-14 md:w-20 bg-gradient-to-r from-transparent to-stone-400/60" />
      <span className="font-serif text-moss/60 text-lg leading-none select-none">❦</span>
      <span className="h-px w-14 md:w-20 bg-gradient-to-l from-transparent to-stone-400/60" />
    </div>
  );
}

export function PhilosophyStrip() {
  return (
    <section className="relative bg-vanilla-cream/40 border-y border-stone-300/50 py-16 md:py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="font-serif italic text-stone-500 text-xs md:text-sm tracking-[0.35em] uppercase">
            Drei Säulen der Manufaktur
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-0"
        >
          {PHILOSOPHY.map((p, i) => (
            <div key={p.title} className="relative text-center md:px-6">
              {i > 0 && (
                <div className="hidden md:block absolute left-0 top-8 bottom-8 w-px bg-stone-300/70" />
              )}
              <span
                className="font-serif text-7xl md:text-8xl text-moss/20 italic leading-none block mb-4 select-none"
                aria-hidden
              >
                {p.numeral}
              </span>
              <h3 className="font-serif text-2xl text-moss-dark tracking-wide mb-3">{p.title}</h3>
              <div className="h-px w-8 bg-stone-400/50 mx-auto mb-4" />
              <p className="font-sans text-sm text-stone-600 leading-relaxed max-w-xs mx-auto">
                {p.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function NavCards({ onNavigate }: { onNavigate: (s: ActiveSection) => void }) {
  return (
    <section className="bg-vanilla py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14 md:mb-20"
        >
          <span className="font-serif italic text-stone-500 text-xs md:text-sm tracking-[0.35em] uppercase block">
            Pfade durch die Manufaktur
          </span>
          <OrnamentDivider className="mt-5" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-10">
          {NAV_CARDS.map((card, idx) => (
            <motion.button
              key={card.id}
              onClick={() => onNavigate(card.id)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className="group text-left focus:outline-none cursor-pointer"
              aria-label={`Gehe zu ${card.title}`}
            >
              {/* Arched dome containing icon */}
              <div
                className="relative w-full bg-vanilla-cream/50 border border-moss/25 overflow-hidden shadow-[0_8px_30px_-15px_rgba(36,59,36,0.25)] group-hover:shadow-[0_16px_40px_-15px_rgba(36,59,36,0.4)] transition-shadow duration-500"
                style={{
                  borderRadius: '50% 50% 4px 4px / 30% 30% 4px 4px',
                  borderBottom: 'none',
                }}
              >
                <div className="relative w-full" style={{ paddingTop: '95%' }}>
                  <img
                    src={card.img}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-contain p-10 md:p-12 transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div
                    className="absolute inset-3 border border-stone-400/30 pointer-events-none"
                    style={{
                      borderRadius: '50% 50% 4px 4px / 32% 32% 4px 4px',
                      borderBottom: 'none',
                    }}
                  />
                </div>
              </div>

              {/* Card body */}
              <div className="bg-vanilla border border-moss/25 border-t-0 px-6 py-7 text-center">
                <p className="font-sans text-[10px] tracking-[0.28em] uppercase text-stone-500 mb-2">
                  {card.subtitle}
                </p>
                <h4 className="font-serif text-2xl md:text-[1.65rem] text-moss-dark mb-3 tracking-wide">
                  {card.title}
                </h4>
                <div className="h-px w-10 bg-stone-400/60 mx-auto mb-4" />
                <p className="font-sans text-sm text-stone-600 leading-relaxed mb-6 min-h-[4.5rem]">
                  {card.desc}
                </p>
                <span className="inline-block font-serif text-sm text-moss border-b border-moss/40 group-hover:border-moss pb-0.5 transition-colors">
                  {card.btn}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ClosingSignature() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="bg-vanilla py-20 md:py-28 px-6 text-center"
    >
      <OrnamentDivider className="mb-10" />
      <p className="font-serif italic text-2xl md:text-3xl text-moss-dark/80 leading-relaxed max-w-2xl mx-auto">
        Aus dem Moseltal, mit Liebe handgefertigt.
      </p>
      <p className="font-serif italic text-base text-stone-500 mt-6 tracking-[0.3em]">
        — Marion Muszarsky
      </p>
    </motion.section>
  );
}
