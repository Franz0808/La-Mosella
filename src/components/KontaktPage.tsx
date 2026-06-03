import React from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone } from 'lucide-react';

function OrnamentDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <span className="h-px w-14 md:w-20 bg-gradient-to-r from-transparent to-stone-400/60" />
      <span className="font-serif text-lg leading-none select-none text-gold">❦</span>
      <span className="h-px w-14 md:w-20 bg-gradient-to-l from-transparent to-stone-400/60" />
    </div>
  );
}

export default function KontaktPage() {
  return (
    <div className="bg-vanilla min-h-screen page-enter flex flex-col">
      {/* Header */}
      <section className="py-10 md:py-16 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="font-serif italic text-moss/60 text-xs tracking-[0.35em] uppercase block mb-3">
            La Mosella Seifenmanufaktur
          </span>
          <h1 className="font-serif text-5xl md:text-6xl text-moss-dark tracking-tight mb-4">
            Kontakt
          </h1>
          <OrnamentDivider className="my-5" />
          <p className="font-sans text-sm md:text-base text-moss-dark/65 max-w-lg mx-auto leading-relaxed">
            Ich freue mich über Ihre Nachricht – ob Bestellung, Frage oder einfach ein herzliches Hallo.
          </p>
        </motion.div>
      </section>

      {/* Contact info + hours side by side */}
      <section className="flex-grow flex items-center px-6 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          className="max-w-3xl mx-auto w-full space-y-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Contact details */}
            <div className="bg-vanilla-dark border border-gold/20 rounded-2xl p-7 space-y-5">
              <h3 className="font-serif text-lg text-moss-dark">Manufaktur-Kontakt</h3>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full border border-gold/50 flex items-center justify-center bg-vanilla shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-moss" />
                </div>
                <div>
                  <p className="font-serif text-base text-moss-dark font-semibold mb-0.5">Marion Muszarsky</p>
                  <p className="font-sans text-sm text-moss-dark/65">Litziger Weg 14</p>
                  <p className="font-sans text-sm text-moss-dark/65">56841 Traben-Trarbach</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-full border border-gold/50 flex items-center justify-center bg-vanilla shrink-0">
                  <Phone className="w-4 h-4 text-moss" />
                </div>
                <a href="tel:015167000929" className="font-sans text-sm text-moss-dark/65 hover:text-moss transition-colors">
                  0151-67000929
                </a>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-full border border-gold/50 flex items-center justify-center bg-vanilla shrink-0">
                  <Mail className="w-4 h-4 text-moss" />
                </div>
                <span className="font-sans text-sm text-moss-dark/65 break-all">
                  lm-seifenmanufaktur@t-online.de
                </span>
              </div>
            </div>

            {/* Opening hours */}
            <div className="bg-vanilla-dark border border-gold/20 rounded-2xl p-7 space-y-4">
              <h3 className="font-serif text-lg text-moss-dark">Erreichbarkeit</h3>
              <div className="space-y-2 font-sans text-sm text-moss-dark/65">
                <div className="flex justify-between">
                  <span>Mo – Fr</span>
                  <span className="text-moss-dark font-medium">9:00 – 18:00 Uhr</span>
                </div>
                <div className="flex justify-between">
                  <span>Sa</span>
                  <span className="text-moss-dark font-medium">10:00 – 14:00 Uhr</span>
                </div>
                <div className="flex justify-between">
                  <span>So / Feiertags</span>
                  <span className="text-moss-dark/40">Geschlossen</span>
                </div>
              </div>
              <div className="pt-2 border-t border-gold/20 text-[11px] font-serif italic text-moss-dark/55">
                ❦ Bestellungen per E-Mail jederzeit möglich
              </div>
            </div>
          </div>

          {/* CTA button */}
          <a
            href="mailto:lm-seifenmanufaktur@t-online.de"
            className="w-full bg-moss hover:bg-moss-dark text-vanilla font-serif py-3.5 rounded-lg text-sm tracking-widest transition-colors flex items-center justify-center gap-2 shadow-md"
          >
            <Mail className="w-4 h-4" />
            E-Mail schreiben ❦
          </a>
        </motion.div>
      </section>
    </div>
  );
}
