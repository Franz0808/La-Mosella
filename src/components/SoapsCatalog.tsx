import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronRight, ShieldAlert } from 'lucide-react';
import { SOAP_ENTRIES, SoapEntry, ProduktKategorie } from '../data/soapEntries';

const vorhandeneKategorien = [...new Set(SOAP_ENTRIES.map(s => s.produktkategorie))];
const KATEGORIE_FILTERS: (ProduktKategorie | 'Alle')[] =
  vorhandeneKategorien.length > 1 ? ['Alle', ...vorhandeneKategorien] : [];

export default function SoapsCatalog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [kategorieFilter, setKategorieFilter] = useState<ProduktKategorie | 'Alle'>('Alle');
  const [selectedSoap, setSelectedSoap] = useState<SoapEntry | null>(null);

  const filtered = SOAP_ENTRIES.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesKategorie = kategorieFilter === 'Alle' || s.produktkategorie === kategorieFilter;
    return matchesSearch && matchesKategorie;
  });

  return (
    <div className="bg-vanilla py-10 px-4 min-h-screen page-enter">
      {/* Page Header */}
      <div className="max-w-4xl mx-auto text-center mb-8">
        <span className="font-serif italic text-gold text-base md:text-lg block mb-1">
          Naturreine Seifenkunst der Mosel
        </span>
        <h2 className="font-serif text-3xl md:text-5xl font-normal text-moss tracking-tight">
          Meine Seifengalerie
        </h2>
        <div className="w-16 h-[1px] bg-gold mx-auto my-4" />
      </div>


      {/* Search */}
      <div className="max-w-md mx-auto mb-10">
        <div className="relative">
          <input
            type="text"
            placeholder="Seife suchen..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full bg-vanilla-dark/50 border border-gold/40 rounded-lg px-3 py-1.5 text-sm font-sans focus:outline-none focus:border-moss text-moss-dark text-center"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-2 top-2 text-moss/50 hover:text-moss text-xs"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Kategorie-Filter */}
      {KATEGORIE_FILTERS.length > 0 && (
        <div className="max-w-5xl mx-auto mb-10 flex items-center justify-center gap-2 flex-wrap border-b border-gold/20 pb-6">
          {KATEGORIE_FILTERS.map(k => (
            <button
              key={k}
              onClick={() => setKategorieFilter(k)}
              className={`font-serif text-sm px-4 py-1.5 rounded-full border transition-all duration-200 cursor-pointer ${kategorieFilter === k
                ? 'bg-moss text-vanilla border-moss'
                : 'bg-transparent text-moss border-gold/40 hover:border-moss'
                }`}
            >
              {k}
            </button>
          ))}
        </div>
      )}

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map(soap => (
          <motion.div
            key={soap.name}
            onClick={() => setSelectedSoap(soap)}
            className="relative cursor-pointer rounded-2xl overflow-hidden border border-gold/20 hover:border-gold/60 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col bg-vanilla-dark/30"
            whileHover={{ y: -5 }}
          >
            {/* Featured badge */}
            {soap.featured && (
              <div className="absolute top-3 left-3 z-10 bg-gold text-vanilla font-serif text-xs italic px-3 py-1 rounded-full shadow-md">
                Kundenliebling
              </div>
            )}

            {/* Product image */}
            <div className="w-full h-52 bg-vanilla-dark overflow-hidden">
              <img
                src={soap.image}
                alt={soap.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Card body */}
            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-serif text-2xl font-bold text-moss-dark mb-2 leading-tight">
                {soap.name}
              </h3>
              <p className="font-sans text-xs text-moss-dark/65 leading-relaxed mb-3 flex-1 line-clamp-3">
                {soap.beschreibung}
              </p>
              <p className="font-serif text-[15px] italic text-gold leading-snug">
                {soap.duft}
              </p>
            </div>

            {/* Footer */}
            <div className="border-t border-gold/10 px-5 py-3 flex items-center justify-end bg-vanilla/40">
              <span className="font-serif text-xs text-moss flex items-center gap-1">
                Inhaltsstoffe <ChevronRight className="w-3 h-3 text-gold" />
              </span>
            </div>
          </motion.div>
        ))}

        {filtered.length === 0 && (
          <div className="col-span-full text-center py-16 bg-vanilla-dark/30 rounded-xl max-w-lg mx-auto border border-gold/10">
            <ShieldAlert className="w-12 h-12 text-gold mx-auto mb-3" />
            <p className="font-serif text-lg text-moss">Keine Seife gefunden.</p>
            <p className="font-sans text-xs text-moss-dark/55 mt-1">Ändern Sie Ihren Suchbegriff.</p>
          </div>
        )}
      </div>

      {/* Detail Modal — rendered via Portal to escape page-enter transform context */}
      {createPortal(
        <AnimatePresence>
          {selectedSoap && (
            <div
              className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-8 bg-black/55 backdrop-blur-sm overflow-y-auto"
              onClick={() => setSelectedSoap(null)}
            >
              <motion.div
                className="relative w-full max-w-4xl bg-vanilla rounded-2xl border-2 border-moss shadow-2xl overflow-hidden my-8"
                onClick={e => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {/* Inner gold frame */}
                <div className="absolute top-1 left-1 right-1 bottom-1 border border-gold/40 rounded-xl pointer-events-none z-10" />

                {/* Close */}
                <button
                  onClick={() => setSelectedSoap(null)}
                  className="absolute top-4 right-4 z-20 bg-vanilla border border-gold/40 p-2 rounded-full hover:bg-moss/10 transition-colors cursor-pointer"
                  aria-label="Schließen"
                >
                  <X className="w-5 h-5 text-moss" />
                </button>

                {/* Top row: info left, image right */}
                <div className="grid grid-cols-1 md:grid-cols-2 border-b border-gold/20">
                  <div className="p-6 md:p-8 flex flex-col gap-4 border-b md:border-b-0 md:border-r border-gold/20">
                    <h3 className="font-serif text-3xl font-bold text-moss-dark leading-tight">
                      {selectedSoap.name}
                    </h3>
                    <p className="font-sans text-sm text-moss-dark/65 leading-relaxed">
                      {selectedSoap.beschreibung}
                    </p>
                    <div>
                      <span className="font-serif text-sm uppercase tracking-widest text-moss-dark block mb-1">
                        Duftcharakter
                      </span>
                      <p className="font-serif text-[15px] italic text-gold leading-relaxed">
                        {selectedSoap.duft}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 pt-2 border-t border-gold/10 mt-auto flex-wrap">
                      <span className="font-serif text-sm uppercase tracking-widest text-moss-dark">Preis</span>
                      <span className="font-serif text-sm text-moss-dark font-bold">{selectedSoap.preis}</span>
                      <span className="font-serif text-sm uppercase tracking-widest text-moss-dark ml-auto">Gewicht</span>
                      <span className="font-serif text-sm text-moss-dark font-bold">ca. {selectedSoap.gewicht}</span>
                    </div>
                  </div>

                  <div className="h-64 md:h-auto bg-vanilla-dark overflow-hidden">
                    <img
                      src={selectedSoap.image}
                      alt={selectedSoap.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Bottom row: ingredients full width */}
                <div className="p-6 md:p-8">
                  <h4 className="font-serif text-lg font-bold text-moss border-b border-gold/10 pb-2 mb-4">
                    Ingredients / Inhaltsstoffe
                  </h4>
                  <p className="font-sans text-xs text-moss-dark/65 leading-relaxed whitespace-pre-wrap border border-gold/20 rounded-lg p-4 bg-vanilla-dark/20">
                    {selectedSoap.inhaltsstoffe}
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}
