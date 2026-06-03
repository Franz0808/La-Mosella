import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ActiveSection } from '../types';
import { Sparkles, Compass, Eye, Heart } from 'lucide-react';

interface TestPageProps {
  onNavigate: (section: ActiveSection) => void;
}

export default function TestPage({ onNavigate }: TestPageProps) {
  const [hoveredHotspot, setHoveredHotspot] = useState<string | null>(null);
  const [bubbles, setBubbles] = useState<
    { id: number; x: number; y: number; size: number; delay: number; duration: number }[]
  >([]);

  useEffect(() => {
    const generated = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: 60 + Math.random() * 30,
      size: 6 + Math.random() * 14,
      delay: Math.random() * 4,
      duration: 6 + Math.random() * 12,
    }));
    setBubbles(generated);
  }, []);

  const hotspots = [
    {
      id: 'soaps',
      title: 'Seifenkatalog',
      subtitle: 'Entdecken Sie unsere Naturseifen',
      desc: 'Hergestellt im traditionellen Kaltverfahren mit wertvollen Pflanzenölen, Heilkräutern und Mosel-Zutaten.',
      x: '28%',
      y: '45%',
      icon: Compass,
      imgSrc: '/src/assets/images/Icon Soapes.png',
      btnText: 'Katalog öffnen ❦',
    },
    {
      id: 'about',
      title: 'Über mich',
      subtitle: 'Marion Muszarsky & Philosophie',
      desc: 'Erfahren Sie mehr über die Gründerin, unsere traditionelle Werkstatt und die Liebe zur moselländischen Natur.',
      x: '52%',
      y: '32%',
      icon: Heart,
      imgSrc: '/src/assets/images/Icon about me.png',
      btnText: 'Meine Geschichte ❦',
    },
    {
      id: 'benefits',
      title: 'La Mosella',
      subtitle: 'Philosophie & Handarbeit',
      desc: 'Erfahren Sie, warum unsere handgerührten Naturseifen eine Wohltat für Ihre Haut und unsere Umwelt sind.',
      x: '76%',
      y: '50%',
      icon: Sparkles,
      imgSrc: '/src/assets/images/Icon La Mosella.png',
      btnText: 'Unsere Qualität ❦',
    },
  ];

  // Mobile order: Über mich → Seifenkatalog → La Mosella
  const mobileOrder = ['about', 'soaps', 'benefits'];
  const mobileSections = mobileOrder.map((id) => hotspots.find((h) => h.id === id)!);

  return (
    <div className="relative bg-vanilla py-10 select-none">

      {/* Welcome text — always visible */}
      <div className="max-w-3xl mx-auto text-center mb-10 mt-4 px-4 page-enter">
        <span className="font-serif italic text-[#C09E5A] tracking-wider text-lg md:text-xl block mb-2">
          Willkommen in der
        </span>
        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-normal text-moss tracking-tight leading-tight">
          La Mosella Seifenmanufaktur
        </h2>
        <div className="jugendstil-line my-6" />
        <p className="font-sans text-stone-600 leading-relaxed text-sm md:text-base max-w-2xl mx-auto">
          Inmitten der malerischen Kulisse des Moseltals rühren wir biologisch reine Naturseifen von Hand.
          Tauchen Sie ein in unser lebendiges Fresko der Sinne und entdecken Sie unsere Welt.
        </p>
      </div>

      {/* ── MOBILE: stacked vanilla sections, no background image ────────── */}
      <div className="md:hidden px-6 space-y-2">
        {mobileSections.map((spot, index) => (
          <div key={spot.id}>
            {index > 0 && <div className="jugendstil-line my-8" />}
            <button
              onClick={() => onNavigate(spot.id as ActiveSection)}
              className="w-full group text-center"
              aria-label={`Gehe zu ${spot.title}`}
            >
              <h3 className="font-serif text-2xl text-moss mb-5">{spot.title}</h3>
              <div className="w-44 h-44 mx-auto rounded-full overflow-hidden border-2 border-gold/40 group-hover:border-moss transition-colors duration-300 mb-5 shadow-md">
                <img
                  src={spot.imgSrc}
                  alt={spot.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="font-sans text-sm text-stone-600 leading-relaxed max-w-xs mx-auto mb-5">
                {spot.desc}
              </p>
              <span className="inline-block bg-moss text-vanilla font-serif text-xs tracking-wider px-6 py-2 rounded-lg group-hover:bg-moss-dark transition-colors duration-200">
                {spot.btnText}
              </span>
            </button>
          </div>
        ))}
      </div>

      {/* ── DESKTOP: full-width image with overlay medallions ────────────── */}
      <div className="hidden md:block relative w-full overflow-hidden">

        {/* Helper label */}
        <div className="absolute top-4 left-4 z-25 pointer-events-none">
          <div className="bg-vanilla/90 border border-gold/30 px-3 py-1.5 rounded-full flex items-center space-x-2 text-xs text-moss font-serif">
            <Eye className="w-3.5 h-3.5 animate-pulse" />
            <span>Interaktives Landschaftsfresko</span>
          </div>
        </div>
        <div className="absolute top-4 right-4 z-25 pointer-events-none hidden lg:block">
          <span className="text-stone-400 font-serif text-xs">« Traben-Trarbach, Deutschland »</span>
        </div>

        {/* Image container — grows to the image's natural height, no cropping */}
        <div className="relative w-full">
          <img
            src="/src/assets/images/Landing Page Pond v6.png"
            alt="La Mosella Manufaktur Landschaft"
            className="w-full h-auto block select-none pointer-events-none"
          />

          {/* Moselle water glow */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-moss/10 to-transparent pointer-events-none" />

          {/* Floating bubbles */}
          {bubbles.map((bubble) => (
            <motion.div
              key={bubble.id}
              className="bubble-soft absolute"
              style={{
                left: `${bubble.x}%`,
                top: `${bubble.y}%`,
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
              }}
              animate={{
                y: [0, -150 - Math.random() * 150],
                x: [0, (Math.random() - 0.5) * 40],
                scale: [1, 1.1, 0.9, 0],
                opacity: [0, 0.7, 0.7, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: bubble.duration,
                delay: bubble.delay,
                ease: 'easeInOut',
              }}
            />
          ))}

          {/* Medallion hotspots */}
          {hotspots.map((spot) => {
            const isHovered = hoveredHotspot === spot.id;
            return (
              <div
                key={spot.id}
                className="absolute z-20 -translate-x-1/2 -translate-y-1/2 min-w-[120px]"
                style={{ left: spot.x, top: spot.y }}
              >
                <div className="flex flex-col items-center relative">
                  <button
                    onClick={() => onNavigate(spot.id as ActiveSection)}
                    onMouseEnter={() => setHoveredHotspot(spot.id)}
                    onMouseLeave={() => setHoveredHotspot(null)}
                    className="group relative flex items-center justify-center focus:outline-none cursor-pointer"
                    aria-label={`Gehe zu ${spot.title}`}
                  >
                    {/* Ring aura */}
                    <span className="absolute inline-flex w-[76px] h-[76px] sm:w-[102px] sm:h-[102px] md:w-[128px] md:h-[128px] rounded-full bg-gold/25 animate-ping" />
                    <span className="absolute inline-flex w-[86px] h-[86px] sm:w-[114px] sm:h-[114px] md:w-[144px] md:h-[144px] rounded-full bg-moss/5 group-hover:bg-gold/15 transition-all duration-500 scale-95 group-hover:scale-105" />

                    {/* Medallion */}
                    <div className="w-[72px] h-[72px] sm:w-[96px] sm:h-[96px] md:w-[120px] md:h-[120px] rounded-full bg-vanilla/95 border-2 border-gold/50 group-hover:border-moss shadow-md group-hover:shadow-xl flex items-center justify-center transition-all duration-300 p-1.5 sm:p-2.5 md:p-3.5 overflow-hidden relative">
                      <div className="absolute inset-1 rounded-full border border-gold/15 pointer-events-none group-hover:border-moss/20 transition-colors duration-300" />
                      <img
                        src={spot.imgSrc}
                        alt={spot.title}
                        className="w-full h-full object-contain rounded-full filter grayscale contrast-[1.05] sepia-[15%] group-hover:grayscale-0 group-hover:sepia-0 group-hover:scale-105 duration-300 transition-all"
                      />
                    </div>

                    {/* Title banner */}
                    <div className="absolute top-[82px] sm:top-[106px] md:top-[132px] bg-vanilla/95 border border-gold/40 px-2 sm:px-3 py-0.5 sm:py-1 rounded-md shadow-lg backdrop-blur-sm group-hover:scale-105 transition-all duration-300 whitespace-nowrap">
                      <span className="font-serif text-[10px] sm:text-xs md:text-sm font-semibold tracking-wide text-moss uppercase">
                        {spot.title}
                      </span>
                    </div>
                  </button>

                  {/* Hover popup */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 15 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 15 }}
                        transition={{ duration: 0.25 }}
                        onMouseEnter={() => setHoveredHotspot(spot.id)}
                        onMouseLeave={() => setHoveredHotspot(null)}
                        className="absolute bottom-20 sm:bottom-24 left-1/2 -translate-x-1/2 w-52 sm:w-64 p-3 sm:p-4 rounded-xl shadow-2xl bg-vanilla border-2 border-moss pointer-events-auto z-30 jugendstil-corner"
                      >
                        <div className="w-8 h-[1px] bg-gold mx-auto mb-2" />
                        <h4 className="font-serif text-sm sm:text-lg font-bold text-moss text-center leading-tight">
                          {spot.title}
                        </h4>
                        <p className="font-sans text-[9px] text-center text-gold uppercase tracking-widest mb-1.5 font-medium">
                          {spot.subtitle}
                        </p>
                        <p className="font-sans text-[10px] sm:text-xs text-stone-600 mb-2.5 text-center leading-relaxed">
                          {spot.desc}
                        </p>
                        <button
                          onClick={() => onNavigate(spot.id as ActiveSection)}
                          className="w-full bg-moss hover:bg-moss-dark text-vanilla font-serif py-1 sm:py-1.5 rounded-lg text-[10px] sm:text-xs tracking-wider transition-colors cursor-pointer"
                        >
                          {spot.btnText}
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
