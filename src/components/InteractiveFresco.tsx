import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ActiveSection } from '../types';
import { Sparkles, Compass, Heart } from 'lucide-react';

interface InteractiveFrescoProps {
  onNavigate: (section: ActiveSection) => void;
}

export default function InteractiveFresco({ onNavigate }: InteractiveFrescoProps) {
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
      icon: Compass,
      imgSrc: '/src/assets/images/Icon Soapes.png',
      btnText: 'Katalog öffnen ❦',
    },
    {
      id: 'about',
      title: 'Über mich',
      subtitle: 'Marion Muszarsky & Philosophie',
      desc: 'Erfahren Sie mehr über die Gründerin, unsere traditionelle Werkstatt und die Liebe zur moselländischen Natur.',
      icon: Heart,
      imgSrc: '/src/assets/images/Icon about me.png',
      btnText: 'Meine Geschichte ❦',
    },
    {
      id: 'benefits',
      title: 'La Mosella',
      subtitle: 'Philosophie & Handarbeit',
      desc: 'Erfahren Sie, warum unsere handgerührten Naturseifen eine Wohltat für Ihre Haut und unsere Umwelt sind.',
      icon: Sparkles,
      imgSrc: '/src/assets/images/Icon La Mosella.png',
      btnText: 'Unsere Qualität ❦',
    },
  ];

  const mobileOrder = ['about', 'soaps', 'benefits'];
  const mobileSections = mobileOrder.map((id) => hotspots.find((h) => h.id === id)!);

  return (
    <div className="relative bg-vanilla select-none">

      {/* ── MOBILE ───────────────────────────────────────────────────────── */}
      <div className="md:hidden py-10">
        <div className="max-w-3xl mx-auto text-center mb-10 mt-4 px-4 page-enter">
          <span className="font-serif italic text-[#C09E5A] tracking-wider text-lg block mb-2">
            Willkommen in der
          </span>
          <h2 className="font-serif text-3xl font-normal text-moss tracking-tight leading-tight">
            La Mosella Seifenmanufaktur
          </h2>
          <div className="jugendstil-line my-6" />
          <p className="font-sans text-stone-600 leading-relaxed text-sm max-w-2xl mx-auto">
            Inmitten der malerischen Kulisse des Moseltals rühren wir biologisch reine Naturseifen von Hand.
            Tauchen Sie ein in unser lebendiges Fresko der Sinne und entdecken Sie unsere Welt.
          </p>
        </div>
        <div className="px-6 space-y-2">
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
      </div>

      {/* ── DESKTOP ──────────────────────────────────────────────────────── */}
      <div className="hidden md:block relative w-full overflow-hidden">
        <div className="relative w-full">
          <img
            src="/src/assets/images/La Mosella Langing Page Picture v2.png"
            alt="La Mosella Manufaktur Landschaft"
            className="w-full h-auto block select-none pointer-events-none"
          />

          {/* Bottom gradient so cards sit on a soft dark base */}
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-moss-dark/40 to-transparent pointer-events-none" />

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

          {/* ── Welcome card — top center ──────────────────────────────── */}
          <div className="absolute top-[38%] -translate-y-1/2 left-1/2 -translate-x-1/2 z-20 w-[380px] xl:w-[460px]">
            <div
              className="bg-vanilla/45 backdrop-blur-md border border-gold/50 shadow-2xl px-8 py-5 text-center"
              style={{ borderRadius: '46% 46% 8px 8px / 18% 18% 8px 8px' }}
            >
              <span className="font-serif italic text-gold tracking-wider text-base xl:text-lg block mb-1">
                Willkommen
              </span>
              <div className="w-14 h-px bg-gold/60 mx-auto my-2" />
              <p className="font-sans text-stone-700 leading-relaxed text-xs xl:text-sm">
                Inmitten der malerischen Kulisse des Moseltals rühren wir biologisch reine Naturseifen von Hand.
                Entdecken Sie unsere Welt.
              </p>
            </div>
          </div>

          {/* ── Navigation cards — side by side, bottom ───────────────── */}
          <div className="absolute bottom-8 inset-x-0 z-20 flex justify-center gap-6 xl:gap-10 px-8">
            {hotspots.map((spot) => {
              const isHov = hoveredHotspot === spot.id;
              return (
                <motion.button
                  key={spot.id}
                  onClick={() => onNavigate(spot.id as ActiveSection)}
                  onMouseEnter={() => setHoveredHotspot(spot.id)}
                  onMouseLeave={() => setHoveredHotspot(null)}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="cursor-pointer focus:outline-none w-52 xl:w-60"
                  style={{ transformOrigin: 'bottom center' }}
                  aria-label={`Gehe zu ${spot.title}`}
                >
                  {/* Arch image section */}
                  <div
                    className="w-full overflow-hidden border border-gold/55 bg-vanilla/45 backdrop-blur-md shadow-xl transition-all duration-300 group-hover:border-gold"
                    style={{ borderRadius: '50% 50% 0 0 / 22% 22% 0 0', borderBottom: 'none' }}
                  >
                    <div className="relative w-full" style={{ paddingTop: '95%' }}>
                      <img
                        src={spot.imgSrc}
                        alt={spot.title}
                        className="absolute inset-0 w-full h-full object-contain p-8 transition-transform duration-300"
                        style={{ transform: isHov ? 'scale(1.08)' : 'scale(1)' }}
                      />
                    </div>
                  </div>

                  {/* Title + expandable body */}
                  <div
                    className="bg-vanilla/45 backdrop-blur-md border border-gold/55 border-t-0 shadow-xl px-5 pb-4 pt-3 text-center transition-all duration-300"
                    style={{ borderRadius: '0 0 8px 8px' }}
                  >
                    <div className="w-8 h-px bg-gold/60 mx-auto mb-2" />
                    <h4 className="font-serif text-base xl:text-lg font-semibold text-moss tracking-wide">
                      {spot.title}
                    </h4>

                    {/* Expandable content on hover */}
                    <AnimatePresence>
                      {isHov && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <p className="font-sans text-[10px] xl:text-xs text-stone-700 mt-2 leading-relaxed">
                            {spot.desc}
                          </p>
                          <span className="inline-block mt-3 bg-moss text-vanilla font-serif text-[10px] xl:text-xs tracking-wider px-4 py-1.5 rounded transition-colors duration-200 hover:bg-moss-dark">
                            {spot.btnText}
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Location tag */}
          <div className="absolute top-4 right-4 z-20 pointer-events-none hidden lg:block">
            <span className="text-vanilla/50 font-serif text-xs">« Traben-Trarbach, Deutschland »</span>
          </div>
        </div>
      </div>

    </div>
  );
}
