import React from 'react';
import { motion } from 'motion/react';
import { ActiveSection } from '../types';

interface Props {
  onNavigate: (section: ActiveSection) => void;
}

const NAV_CARDS: { id: ActiveSection; title: string; desc: string; btn: string; img: string; smallImg?: boolean }[] = [
  {
    id: 'soaps',
    title: 'Seifengalerie',
    desc: 'Entdecke meine Seifenvielfalt – hergestellt im traditionellen Kaltverfahren mit wertvollen Rohstoffen.',
    btn: 'Zur Galerie ❦',
    img: '/images/Icon Soapes.webp',
  },
  {
    id: 'about',
    title: 'Über mich',
    desc: 'Erfahre mehr über mich, meine Werte und die Leidenschaft hinter meinen handgemachten Seifen.',
    btn: 'Meine Geschichte ❦',
    img: '/images/Icon about me.webp',
  },
  {
    id: 'contact',
    title: 'Kontakt',
    desc: 'Haben Sie Fragen oder möchten Sie eine Bestellung aufgeben? Schreiben Sie mir gerne.',
    btn: 'Nachricht senden ❦',
    img: '/images/Icon Kontakt.webp',
    smallImg: true,
  },
];

function OrnamentDivider({ className = '', light = false }: { className?: string; light?: boolean }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <span className={`h-px w-14 md:w-20 bg-gradient-to-r from-transparent ${light ? 'to-vanilla/40' : 'to-gold/40'}`} />
      <span className={`font-serif text-lg leading-none select-none ${light ? 'text-gold-light/80' : 'text-gold'}`}>❦</span>
      <span className={`h-px w-14 md:w-20 bg-gradient-to-l from-transparent ${light ? 'to-vanilla/40' : 'to-gold/40'}`} />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center px-6">
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/images/Landing Page Pond v8.webp"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover object-[100%_100%] md:object-center"
        />
        <div className="md:hidden absolute inset-0 bg-vanilla/40" />
      </div>

      <div className="relative z-10 max-w-3xl text-center page-enter pt-14 pb-24 md:pt-16 md:pb-32">
        <h1 className="font-serif text-[3.25rem] md:text-7xl lg:text-8xl text-moss-dark leading-[1.02] tracking-tight drop-shadow-[0_2px_8px_rgba(253,251,242,0.9)]">
          La Mosella
        </h1>
        <p className="font-serif italic text-xl md:text-2xl text-moss-dark mt-4 tracking-wide drop-shadow-[0_1px_6px_rgba(253,251,242,0.85)]">
          Seifenmanufaktur
        </p>
        <OrnamentDivider className="my-8" />
        <p className="font-serif italic text-base md:text-lg text-moss-dark drop-shadow-[0_1px_4px_rgba(253,251,242,0.85)]">
          Handgerührte Naturseifen mit Charakter
        </p>
      </div>
    </section>
  );
}

function NavCardsSection({ onNavigate }: { onNavigate: (s: ActiveSection) => void }) {
  return (
    <section className="py-20 md:py-28 px-6 bg-vanilla-warm">

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14 md:mb-20"
        >
          <span className="font-serif italic text-moss text-xs md:text-sm tracking-[0.35em] uppercase block">
            Pfade durch die Manufaktur
          </span>
          <OrnamentDivider className="mt-5" light />
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
                className="bg-vanilla overflow-hidden shadow-[0_8px_30px_-15px_rgba(0,0,0,0.35)] group-hover:shadow-[0_16px_40px_-15px_rgba(0,0,0,0.5)] transition-shadow duration-500"
                style={{ borderRadius: '50% 50% 6px 6px / 28% 28% 6px 6px' }}
              >
                {/* Image area */}
                <div className="relative w-full bg-vanilla/60" style={{ paddingTop: '85%' }}>
                  <img
                    src={card.img}
                    alt={card.title}
                    className={`absolute inset-0 w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.04] ${
                      card.smallImg
                        ? 'px-16 pt-20 pb-10 md:px-20 md:pt-24 md:pb-12'
                        : 'px-10 pt-16 pb-6 md:px-12 md:pt-20 md:pb-8'
                    }`}
                  />
                </div>
                {/* Text area */}
                <div className="px-6 py-7 text-center">
                  <h4 className="font-serif text-2xl md:text-[1.65rem] text-moss-dark mb-3 tracking-wide">
                    {card.title}
                  </h4>
                  <div className="h-px w-10 bg-gold/40 mx-auto mb-4" />
                  <p className="font-sans text-sm text-moss-dark/65 leading-relaxed mb-6 min-h-[4.5rem]">
                    {card.desc}
                  </p>
                  <span className="inline-block font-serif text-sm text-gold border-b border-gold/40 group-hover:border-gold pb-0.5 transition-colors">
                    {card.btn}
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClosingSignature() {
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
      <p className="font-serif italic text-base text-moss-dark/55 mt-6 tracking-[0.3em]">
        — Marion Muszarsky
      </p>
    </motion.section>
  );
}

function SoapInfoSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="py-16 md:py-20 px-6 bg-vanilla"
    >
      <div className="max-w-2xl mx-auto text-center space-y-5">
        <OrnamentDivider />
        <h2 className="font-serif text-3xl md:text-4xl font-normal text-moss-dark tracking-tight pt-2">
          Natürliche Pflege für jeden Tag
        </h2>
        <div className="h-px w-10 bg-gold mx-auto" />
        <div className="space-y-4 text-moss-dark/65 text-sm md:text-base leading-relaxed font-sans">
          <p>
            Alle Seifen von La Mosella entstehen in sorgfältiger Handarbeit aus hochwertigen pflanzlichen
            Ölen und Buttern. Sie reinigen die Haut sanft und verwöhnen mit einem cremigen Schaum sowie
            einem angenehm gepflegten Hautgefühl.
          </p>
          <p>
            Die Naturseifen eignen sich für die tägliche Reinigung von Händen, Gesicht und Körper und sind
            damit vielseitige Begleiter für die natürliche Hautpflege.
          </p>
          <p>
            Die schonende Herstellung im Kaltverfahren, ausgewogene Rezepturen und die kontinuierliche
            Weiterentwicklung meiner Produkte bilden die Grundlage für die besondere Qualität meiner Naturseifen.
          </p>
          <p>
            Viele Kundinnen und Kunden schätzen die gute Verträglichkeit meiner Seifen – auch bei empfindlicher
            Haut. Für besonders sensible oder duftempfindliche Haut werden häufig die unbedufteten Varianten
            bevorzugt, insbesondere die Olivenölseife und die Sole & Seide Seife.
          </p>
        </div>
        <OrnamentDivider className="pt-2" />
      </div>
    </motion.section>
  );
}

export default function InteractiveFresco({ onNavigate }: Props) {
  return (
    <div className="bg-vanilla text-moss-dark select-none">
      <Hero />
      <SoapInfoSection />
      <NavCardsSection onNavigate={onNavigate} />
      <ClosingSignature />
    </div>
  );
}
