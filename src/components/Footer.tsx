import React from 'react';
import { ActiveSection } from '../types';
import { Leaf, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  setActiveSection: (section: ActiveSection) => void;
  onOpenContact: () => void;
}

export default function Footer({ setActiveSection, onOpenContact }: FooterProps) {
  return (
    <footer className="bg-moss text-vanilla border-t-2 border-gold/40 py-12 px-4 md:px-8 mt-16 relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Left Column: Brand Column */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full border border-gold-light flex items-center justify-center bg-vanilla/10">
              <Leaf className="w-5 h-5 text-gold-light" />
            </div>
            <div>
              <span className="font-serif text-2xl font-semibold tracking-wide block leading-none text-vanilla">
                La Mosella
              </span>
              <span className="font-sans text-[10px] uppercase tracking-widest text-gold-light font-medium block mt-0.5">
                Seifenmanufaktur
              </span>
            </div>
          </div>
          <p className="font-sans text-xs text-vanilla-dark/80 leading-relaxed max-w-sm">
            Liebevoll kaltgerührte Naturseifen aus Traben-Trarbach an der Mosel. 
            Frei von Palmöl, synthetischen Tensiden und Duftstoffen. Rein, wirksam und reichhaltig hautfreundlich.
          </p>
          <div className="text-[10px] text-gold-light font-serif">
            ❦ Handwerkliche Saponifikation mit Tradition
          </div>
        </div>

        {/* Center-Left Column: Shortcuts */}
        <div className="md:col-span-3 space-y-3">
          <h4 className="font-serif text-lg font-bold text-gold-light border-b border-gold/20 pb-1.5">
            Navigation
          </h4>
          <ul className="space-y-2 text-xs font-sans text-vanilla-dark/95">
            <li>
              <button onClick={() => setActiveSection('home')} className="hover:text-white hover:underline whitespace-nowrap" id="footer-link-home">
                ➔ Startseite / Fresko
              </button>
            </li>
            <li>
              <button onClick={() => setActiveSection('soaps')} className="hover:text-white hover:underline whitespace-nowrap" id="footer-link-soaps">
                ➔ Seifengalerie
              </button>
            </li>
            <li>
              <button onClick={() => setActiveSection('about')} className="hover:text-white hover:underline whitespace-nowrap" id="footer-link-about">
                ➔ Über Marion
              </button>
            </li>
            <li>
              <button onClick={() => setActiveSection('benefits')} className="hover:text-white hover:underline whitespace-nowrap" id="footer-link-benefits">
                ➔ Warum Handgemacht?
              </button>
            </li>
            <li>
              <button onClick={onOpenContact} className="hover:text-white hover:underline text-gold-light font-semibold" id="footer-link-contact">
                ✉ Bestellanfrage senden
              </button>
            </li>
          </ul>
        </div>

        {/* Right Column: Contact info */}
        <div className="md:col-span-4 space-y-3">
          <h4 className="font-serif text-lg font-bold text-gold-light border-b border-gold/20 pb-1.5">
            Manufaktur-Kontakt
          </h4>
          <div className="space-y-2.5 text-xs text-vanilla-dark/90">
            <div className="flex items-start space-x-2">
              <MapPin className="w-4 h-4 text-gold-light shrink-0 mt-0.5" />
              <div>
                <p className="font-bold">Marion Muszarsky</p>
                <p>Litziger Weg 14</p>
                <p>56841 Traben-Trarbach</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-gold-light shrink-0" />
              <a href="tel:015167000929" className="hover:text-white hover:underline">0151-67000929</a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-gold-light shrink-0" />
              <a href="mailto:lm-seifenmanufaktur@t-online.de" className="hover:text-white hover:underline break-all">
                lm-seifenmanufaktur@t-online.de
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-gold/15 flex flex-col sm:flex-row items-center justify-between text-[11px] text-vanilla-dark/60">
        <p>© 2026 La Mosella Seifenmanufaktur. Alle Rechte vorbehalten.</p>
        <p className="mt-2 sm:mt-0 font-serif italic text-gold-light text-xs">
          Handgefertigt mit rein biologischen Inhaltsstoffen.
        </p>
      </div>
    </footer>
  );
}
