import React from 'react';
import { motion } from 'motion/react';
import { ActiveSection } from '../types';
import {
  NAV_CARDS,
  ClosingSignature,
  OrnamentDivider,
} from './TestPageV2Shared';

interface Props {
  onNavigate: (section: ActiveSection) => void;
}

function HeroV2c() {
  return (
    <section className="relative overflow-hidden min-h-[80vh] flex items-center justify-center px-6">
      {/* Atmospheric backdrop — desktop only */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/src/assets/images/Landing Page Pond v8.png"
          alt=""
          aria-hidden
          className="hidden md:block absolute inset-0 w-full h-full object-cover"
        />
        {/* Mobile flat vanilla */}
        <div className="md:hidden absolute inset-0 bg-vanilla" />
      </div>

      <div className="relative z-10 max-w-3xl text-center page-enter pt-14 pb-24 md:pt-16 md:pb-32">
        <span className="font-serif italic text-stone-600 tracking-[0.4em] text-xs md:text-sm uppercase block mb-7">
          Willkommen in der
        </span>
        <h1 className="font-serif text-[3.25rem] md:text-7xl lg:text-8xl text-moss-dark leading-[1.02] tracking-tight drop-shadow-[0_2px_8px_rgba(253,251,242,0.9)]">
          La Mosella
        </h1>
        <h2 className="font-serif italic text-2xl md:text-4xl lg:text-5xl text-moss mt-3 tracking-wide drop-shadow-[0_1px_6px_rgba(253,251,242,0.85)]">
          Seifenmanufaktur
        </h2>
        <OrnamentDivider className="my-9" />
        <p className="font-sans text-base md:text-lg text-stone-700 leading-relaxed max-w-xl mx-auto drop-shadow-[0_1px_4px_rgba(253,251,242,0.85)]">
          Inmitten der malerischen Kulisse des Moseltals rühren wir biologisch reine Naturseifen von
          Hand.
        </p>
        <p className="mt-10 font-serif italic text-[11px] text-stone-600 tracking-[0.4em] uppercase">
          Traben-Trarbach · Deutschland
        </p>
      </div>
    </section>
  );
}

function NavCardsSection({ onNavigate }: { onNavigate: (s: ActiveSection) => void }) {
  return (
    <section className="relative bg-gold/15 py-20 md:py-28 px-6 overflow-hidden">
      {/* Background image with heavy overlay to stay subtle */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/src/assets/images/La Mosella Langing Page Picture v2.png"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-vanilla/80" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
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
              <div
                className="relative w-full bg-vanilla/70 backdrop-blur-sm border border-moss/25 overflow-hidden shadow-[0_8px_30px_-15px_rgba(36,59,36,0.25)] group-hover:shadow-[0_16px_40px_-15px_rgba(36,59,36,0.4)] transition-shadow duration-500"
                style={{ borderRadius: '50% 50% 4px 4px / 30% 30% 4px 4px', borderBottom: 'none' }}
              >
                <div className="relative w-full" style={{ paddingTop: '95%' }}>
                  <img
                    src={card.img}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-contain p-10 md:p-12 transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div
                    className="absolute inset-3 border border-stone-400/30 pointer-events-none"
                    style={{ borderRadius: '50% 50% 4px 4px / 32% 32% 4px 4px', borderBottom: 'none' }}
                  />
                </div>
              </div>
              <div className="bg-vanilla/70 backdrop-blur-sm border border-moss/25 border-t-0 px-6 py-7 text-center">
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

export default function TestPageV2c({ onNavigate }: Props) {
  return (
    <div className="bg-vanilla text-moss-dark select-none">
      <HeroV2c />
      <NavCardsSection onNavigate={onNavigate} />
      <ClosingSignature />
    </div>
  );
}
