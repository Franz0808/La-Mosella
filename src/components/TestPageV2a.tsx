import React from 'react';
import { ActiveSection } from '../types';
import {
  PhilosophyStrip,
  NavCards,
  ClosingSignature,
  OrnamentDivider,
} from './TestPageV2Shared';

interface Props {
  onNavigate: (section: ActiveSection) => void;
}

/* Hairline Jugendstil vine — drawn as inline SVG, mirrored on the right. */
function HeroVine({ side }: { side: 'left' | 'right' }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 120 700"
      preserveAspectRatio="xMidYMid meet"
      className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-16 lg:w-24 h-[78vh] text-moss/30 pointer-events-none ${
        side === 'left' ? 'left-4 lg:left-10' : 'right-4 lg:right-10 scale-x-[-1]'
      }`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    >
      {/* main vine */}
      <path d="M60 10 C 30 110, 90 200, 50 300 S 95 500, 60 690" />
      {/* tendrils + buds */}
      <path d="M52 95 C 30 100, 18 125, 26 155" />
      <circle cx="22" cy="160" r="5" fill="currentColor" opacity="0.45" />
      <path d="M22 160 C 14 168, 12 178, 18 188" />

      <path d="M76 230 C 100 240, 110 268, 100 296" />
      <circle cx="102" cy="298" r="4" fill="currentColor" opacity="0.45" />

      <path d="M50 410 C 28 422, 22 448, 34 478" />
      <circle cx="34" cy="482" r="5" fill="currentColor" opacity="0.45" />
      <path d="M34 482 C 26 492, 24 504, 30 516" />

      <path d="M78 540 C 100 548, 108 572, 96 596" />
      <circle cx="96" cy="600" r="4" fill="currentColor" opacity="0.45" />

      {/* small leaves */}
      <path d="M60 50 Q 42 60, 50 80 Q 64 72, 60 50 Z" fill="currentColor" opacity="0.18" />
      <path d="M58 360 Q 80 368, 72 388 Q 54 384, 58 360 Z" fill="currentColor" opacity="0.18" />
      <path d="M62 640 Q 44 648, 52 668 Q 68 662, 62 640 Z" fill="currentColor" opacity="0.18" />
    </svg>
  );
}

function HeroV2a() {
  return (
    <section className="relative bg-vanilla min-h-[70vh] flex items-center justify-center px-6 overflow-hidden">
      <HeroVine side="left" />
      <HeroVine side="right" />

      <div className="relative z-10 max-w-3xl text-center page-enter py-16 md:py-20">
        <span className="font-serif italic text-stone-500 tracking-[0.4em] text-xs md:text-sm uppercase block mb-7">
          Willkommen in der
        </span>
        <h1 className="font-serif text-[3.25rem] md:text-7xl lg:text-8xl text-moss-dark leading-[1.02] tracking-tight">
          La Mosella
        </h1>
        <h2 className="font-serif italic text-2xl md:text-4xl lg:text-5xl text-moss/80 mt-3 tracking-wide">
          Seifenmanufaktur
        </h2>
        <OrnamentDivider className="my-9" />
        <p className="font-sans text-base md:text-lg text-stone-600 leading-relaxed max-w-xl mx-auto">
          Inmitten der malerischen Kulisse des Moseltals rühren wir biologisch reine Naturseifen von
          Hand.
        </p>
        <p className="mt-10 font-serif italic text-[11px] text-stone-500 tracking-[0.4em] uppercase">
          Traben-Trarbach · Deutschland
        </p>
      </div>
    </section>
  );
}

export default function TestPageV2a({ onNavigate }: Props) {
  return (
    <div className="bg-vanilla text-moss-dark select-none">
      <HeroV2a />
      <PhilosophyStrip />
      <NavCards onNavigate={onNavigate} />
      <ClosingSignature />
    </div>
  );
}
