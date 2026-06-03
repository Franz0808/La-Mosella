import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SOAPS } from '../data';
import { Soap } from '../types';
import { ShieldAlert, Flower, Sparkles, Scale, Info, CheckCircle2, ChevronRight, X, Heart, Droplet, Coffee, Eye, HelpCircle } from 'lucide-react';

export default function SoapsCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Alle');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedSoap, setSelectedSoap] = useState<Soap | null>(null);

  const categories = ['Alle', 'Blumig', 'Kräuterig', 'Frisch', 'Sanft'];

  const filteredSoaps = SOAPS.filter((soap) => {
    const matchesCategory = selectedCategory === 'Alle' || soap.category === selectedCategory;
    const matchesSearch = soap.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          soap.headline.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          soap.skinType.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-vanilla py-10 px-4 min-h-screen page-enter">
      {/* Page Header */}
      <div className="max-w-4xl mx-auto text-center mb-8">
        <span className="font-serif italic text-gold text-base md:text-lg block mb-1">
          Naturreine Seifenkunst der Mosel
        </span>
        <h2 className="font-serif text-3xl md:text-5xl font-normal text-moss tracking-tight">
          Unsere Seifengalerie
        </h2>
        <div className="w-16 h-[1px] bg-gold mx-auto my-4" />
        <p className="font-sans text-stone-600 text-sm max-w-xl mx-auto">
          Milde Reinigung, veredelt mit reichhaltigen Bio-Ölen, Kräutersuden und regionalen Mosel-Rohstoffen. 
          Klicken Sie auf ein Seifenstück, um die detaillierten Apotheker-Inhaltsstoffe und Öl-Anteile einzusehen.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="max-w-5xl mx-auto mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-gold/20 pb-6">
        {/* Categories */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`font-serif px-4 py-1.5 rounded-full text-sm tracking-wide transition-all border ${
                selectedCategory === cat
                  ? 'bg-moss border-moss text-vanilla font-semibold'
                  : 'bg-vanilla-dark/40 border-gold/30 text-moss-dark hover:border-moss'
              }`}
              id={`cat-filter-${cat}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="Seife oder Hauttyp suchen..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-vanilla-dark/50 border border-gold/40 rounded-lg px-3 py-1.5 text-sm font-sans focus:outline-none focus:border-moss text-moss-dark"
            id="soap-search-input"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-2 top-2 text-stone-400 hover:text-stone-600 text-xs"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Soaps Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredSoaps.map((soap) => (
          <motion.div
            key={soap.id}
            layoutId={`soap-card-${soap.id}`}
            onClick={() => setSelectedSoap(soap)}
            className={`cursor-pointer rounded-2xl overflow-hidden border border-gold/20 hover:border-gold/60 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${soap.colorTheme.bg}`}
            whileHover={{ y: -5 }}
            id={`soap-card-elem-${soap.id}`}
          >
            {/* Soft decorative background illustration / info block */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#8A795A] bg-vanilla/80 px-2 py-1 rounded-sm border border-gold/10">
                  {soap.category}
                </span>
                <span className="font-serif text-sm text-[#A67C72] italic font-medium">
                  {soap.curingPeriod}
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-moss-dark mb-1 leading-tight group-hover:text-moss">
                {soap.name}
              </h3>
              
              <p className="font-sans text-[11px] font-semibold text-gold tracking-wider uppercase mb-3 leading-none">
                {soap.fatContent}
              </p>

              <p className="font-sans text-xs text-stone-600 leading-relaxed mb-4 min-h-[48px]">
                {soap.description}
              </p>

              {/* Quick indicators */}
              <div className="bg-vanilla/65 p-3 rounded-lg border border-gold/10 mb-2 space-y-1.5 text-[11px] text-stone-700">
                <div className="flex items-center space-x-1">
                  <span className="font-semibold text-moss">Hauttyp:</span>
                  <span className="truncate">{soap.skinType}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="font-semibold text-moss">Lokales:</span>
                  <span className="truncate italic">{soap.localSourced}</span>
                </div>
              </div>
            </div>

            {/* Soap card footer with Price and details label */}
            <div className="border-t border-gold/10 px-6 py-4 flex items-center justify-between bg-vanilla/40">
              <span className="font-serif text-lg font-bold text-moss">
                {soap.price} <span className="text-[10px] text-stone-500 font-sans font-normal">/ {soap.weight}</span>
              </span>
              <span className="font-serif text-xs text-moss hover:underline flex items-center space-x-1" id={`soap-details-trigger-${soap.id}`}>
                <span>Inhaltsstoffe & Details</span>
                <ChevronRight className="w-3 h-3 text-gold" />
              </span>
            </div>
          </motion.div>
        ))}

        {filteredSoaps.length === 0 && (
          <div className="col-span-full text-center py-16 bg-vanilla-dark/30 rounded-xl max-w-lg mx-auto border border-gold/10">
            <ShieldAlert className="w-12 h-12 text-gold mx-auto mb-3" />
            <p className="font-serif text-lg text-moss">Keine passenden Seifen gefunden.</p>
            <p className="font-sans text-xs text-stone-500 mt-1">Ändern Sie Ihren Suchbergriff oder die Kategorie.</p>
          </div>
        )}
      </div>

      {/* Soap Detail Modal Drawer (Apothecary Art Nouveau Chart) */}
      <AnimatePresence>
        {selectedSoap && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/55 backdrop-blur-sm overflow-y-auto">
            {/* Modal Box */}
            <motion.div
              layoutId={`soap-card-${selectedSoap.id}`}
              className="relative w-full max-w-4xl bg-vanilla rounded-2xl border-2 border-moss shadow-2xl overflow-hidden my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Gold framing background box */}
              <div className="absolute top-1 left-1 right-1 bottom-1 border border-gold/40 rounded-xl pointer-events-none z-10" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedSoap(null)}
                className="absolute top-4 right-4 z-20 bg-vanilla border border-gold/40 p-2 rounded-full hover:bg-moss/10 transition-colors cursor-pointer"
                aria-label="Schließen"
                id="btn-close-modal"
              >
                <X className="w-5 h-5 text-moss" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                {/* Left decorative column: Aesthetic soap representation */}
                <div className={`md:col-span-5 p-6 md:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-gold/20 ${selectedSoap.colorTheme.bg}`}>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-[#8A795A] bg-vanilla px-2 py-1 rounded border border-gold/10">
                        {selectedSoap.category}
                      </span>
                      <span className="font-serif text-xs italic text-stone-500 font-medium bg-vanilla px-2 py-0.5 rounded border border-gold/10">
                        {selectedSoap.curingPeriod}
                      </span>
                    </div>

                    <h3 className="font-serif text-3xl md:text-4xl font-bold text-moss-dark leading-tight">
                      {selectedSoap.name}
                    </h3>
                    
                    <div className="text-xl font-serif font-bold text-moss">
                      {selectedSoap.price} <span className="text-xs text-stone-500 font-sans font-normal">({selectedSoap.weight} Frischgewicht)</span>
                    </div>

                    {/* Apothecary quick summary data list */}
                    <div className="space-y-3 pt-4 border-t border-gold/20">
                      <div className="flex flex-col text-xs text-stone-700">
                        <span className="font-semibold text-[10px] uppercase text-gold tracking-wide">Überfettungsgrad</span>
                        <div className="flex items-center space-x-1.5 text-sm mt-0.5 font-serif font-bold text-moss-dark">
                          <span>{selectedSoap.fatContent}</span>
                          <span className="text-stone-400 font-sans font-normal text-xs">(Sehr hautfreundlich und rückfettend)</span>
                        </div>
                      </div>

                      <div className="flex flex-col text-xs text-stone-700">
                        <span className="font-semibold text-[10px] uppercase text-gold tracking-wide">pH-Wert</span>
                        <div className="text-sm mt-0.5 font-serif font-bold text-moss-dark">
                          {selectedSoap.phValue} <span className="font-sans font-normal text-xs text-stone-500">(Mild-basisch schützt das Mikrobiom)</span>
                        </div>
                      </div>

                      <div className="flex flex-col text-xs text-stone-700">
                        <span className="font-semibold text-[10px] uppercase text-gold tracking-wide">Geeignet für</span>
                        <div className="text-xs font-sans text-stone-700 mt-1 pl-2 border-l border-moss bg-vanilla/50 py-1.5 pr-2 rounded">
                          {selectedSoap.skinType}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Vintage Botanicals card image */}
                  <div className="mt-8 border border-gold/30 rounded-lg overflow-hidden relative shadow bg-vanilla">
                    <img 
                      src="/images/La Mosella Soaps.png" 
                      alt="Handgemachte Seifenauslage" 
                      className="w-full h-36 object-cover opacity-90"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                      <p className="text-[10px] italic text-vanilla text-center font-serif">
                        Originale Rezeptur nach Marion Muszarsky
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column: Detailed Apothecary breakdown of ingredients & benefits */}
                <div className="md:col-span-7 p-6 md:p-8 bg-vanilla">
                  {/* Detailed Description */}
                  <div className="mb-6">
                    <h4 className="font-serif text-lg font-bold text-moss border-b border-gold/10 pb-2 mb-2">
                      Produktbeschreibung
                    </h4>
                    <p className="font-sans text-xs text-stone-600 leading-relaxed">
                      {selectedSoap.detailedDescription}
                    </p>
                  </div>

                  {/* Duftprofil & Lokales */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="font-serif text-sm font-bold text-moss mb-2">Duftcharakter</h4>
                      <ul className="text-xs text-stone-600 space-y-1 pl-1">
                        {selectedSoap.scentProfile.map((scent, idx) => (
                          <li key={idx} className="flex items-center space-x-1.5">
                            <span className="text-gold">✦</span>
                            <span>{scent}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-bold text-moss mb-2">Regionale Veredelung</h4>
                      <p className="text-xs text-stone-600 leading-relaxed bg-[#EFF3EE] p-2.5 rounded border border-[#D4DFCC] italic">
                        {selectedSoap.localSourced}
                      </p>
                    </div>
                  </div>

                  {/* Oils Percentage Breakdown Visual Graph */}
                  <div className="mb-6 bg-vanilla-dark/40 p-4 rounded-xl border border-gold/20">
                    <h4 className="font-serif text-sm font-bold text-moss mb-3 flex items-center justify-between">
                      <span>Öl- & Butteranteile in der Rezeptur</span>
                      <span className="text-[10px] uppercase font-sans text-gold">Kaltverseiftes Gold</span>
                    </h4>
                    <div className="space-y-2.5">
                      {selectedSoap.oilContent.map((oil, idx) => (
                        <div key={idx} className="space-y-1">
                          <div className="flex items-center justify-between text-xs text-stone-700 font-medium">
                            <span className="font-sans">{oil.name}</span>
                            <span className="font-mono text-moss">{oil.percentage}%</span>
                          </div>
                          <div className="w-full bg-vanilla border border-gold/20 h-2 rounded-full overflow-hidden">
                            <div 
                              className="bg-moss h-full rounded-full" 
                              style={{ width: `${oil.percentage}%` }}
                            />
                          </div>
                          <p className="text-[10px] text-stone-500 italic leading-tight pl-1">
                            {oil.benefits}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Full INCI & Natural Ingredients Table */}
                  <div className="mb-6">
                    <h4 className="font-serif text-sm font-bold text-moss border-b border-gold/10 pb-2 mb-2">
                      Inhaltsstoffe / Ingredients (INCI)
                    </h4>
                    <div className="bg-vanilla border border-gold/20 rounded-lg overflow-hidden">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="bg-vanilla-dark text-moss border-b border-gold/20">
                            <th className="p-2 font-serif font-bold">Inhaltsstoff</th>
                            <th className="p-2 font-serif font-bold">Klartext / Deklaration</th>
                          </tr>
                        </thead>
                        <tbody>
                          {selectedSoap.ingredients.map((ing, idx) => (
                            <tr key={idx} className="border-b border-gold/10 last:border-b-0 hover:bg-vanilla-dark/20 text-stone-600">
                              <td className="p-2 font-mono text-[10px]">{ing.INCI}</td>
                              <td className="p-2 font-sans">{ing.German}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Benefits check list */}
                  <div className="bg-[#FAF7EB] p-4 rounded-xl border border-gold/30">
                    <h4 className="font-serif text-xs font-bold text-gold uppercase tracking-wider mb-2.5">
                      Vorteile dieses Seifenstücks:
                    </h4>
                    <div className="space-y-2">
                      {selectedSoap.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start space-x-2 text-xs text-stone-700">
                          <CheckCircle2 className="w-4 h-4 text-moss shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Manual Order / Ask button */}
                  <div className="mt-6 flex flex-col sm:flex-row gap-4">
                    <p className="text-[10px] text-stone-500 leading-snug self-center sm:max-w-xs text-center sm:text-left">
                      Da wir jede Seife von Hand rühren, reifen lassen und verpacken, sind Abweichungen in Form und Farbe ein Qualitätszeichen echten Handwerks.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
