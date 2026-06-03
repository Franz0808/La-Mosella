import React, { useState } from 'react';
import { motion } from 'motion/react';
import { GENERAL_INFOS } from '../data';
import { Award, ShieldAlert, Sparkles, Sprout, Heart, Droplet, Star, Leaf, CheckCircle2, AlertCircle } from 'lucide-react';

export default function WhyHandmade() {
  const [activeTab, setActiveTab] = useState<'benefits' | 'comparison'>('benefits');

  const comparisonData = [
    {
      feature: 'Verseifung & Temperatur',
      handmade: 'Kaltverseifung unter 40°C. Alle wertvollen Vitamine und unverseiften Öle bleiben geschützt vorhanden.',
      industrial: 'Heißsiedeprozess über 100°C unter extremem Druck. Wertvolle Wirkstoffe werden durch Hitzestress zerstört.'
    },
    {
      feature: 'Natürliches Glycerin',
      handmade: 'Bleibt zu 100% in der Seife erhalten. Bindet Feuchtigkeit und schützt die Hautbarriere aktiv vor dem Austrocknen.',
      industrial: 'Wird entzogen und als teurer Zusatzrohstoff an die Kosmetikindustrie weiterverkauft. Die Seife trocknet die Haut aus.'
    },
    {
      feature: 'Überfettung (Pflege-Öle)',
      handmade: 'Hoher Luxusüberschuss (8%–12%) an freien Ölen (z.B. Traubenkern-, Mandelöl), die sich als schützender Film auf die Haut legen.',
      industrial: '0% Überfettung (schärfste Reinigung). Die Haut spannt, juckt und muss sofort nach dem Waschen eingecremt werden.'
    },
    {
      feature: 'Tenside & Schaum',
      handmade: 'Cremiger, stabiler Schaum entsteht natürlich aus Kokos- und Rizinusöl. Keine synthetischen Aufschäumer.',
      industrial: 'Erdölbasierte scharfe Tenside (z.B. SLS/SLES). Greifen den Lipidmantel der Haut an und verursachen Irritationen.'
    },
    {
      feature: 'Umwelt & Plastik',
      handmade: '100% biologisch abbaubar. Keine Chemie im Grundwasser. Plastikfreie und kompostierbare Verpackungen.',
      industrial: 'Flüssigprodukte erzeugen massenhaft Plastikabfall. Enthalten flüssiges Mikroplastik, Silikone, EDTA und Konservierungsstoffe.'
    }
  ];

  return (
    <div className="bg-vanilla py-10 px-4 min-h-screen page-enter">
      {/* Page Header */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <span className="font-serif italic text-gold text-base md:text-lg block mb-1">
          Wissen & Achtsamkeit
        </span>
        <h2 className="font-serif text-3xl md:text-5xl font-normal text-moss tracking-tight">
          Vorteile echter Naturseifen
        </h2>
        <div className="w-16 h-[1px] bg-gold mx-auto my-4" />
        <p className="font-sans text-stone-600 text-sm max-w-xl mx-auto">
          Massenseifen aus dem Supermarkt schaden oft meinem Säureschutzmantel und belasten das Wasser. Erfahren Sie, warum echtes Seifenhandwerk die gesündeste Wohltat für Sie und das Moseltal ist.
        </p>
      </div>

      {/* Switcher Tab */}
      <div className="max-w-2xl mx-auto mb-10 p-1.5 bg-vanilla-dark/50 rounded-xl border border-gold/20 flex gap-2">
        <button
          onClick={() => setActiveTab('benefits')}
          className={`flex-1 font-serif py-2.5 px-3 rounded-lg text-sm tracking-wide transition-all flex items-center justify-center space-x-2 ${
            activeTab === 'benefits'
              ? 'bg-moss text-vanilla font-bold shadow-md'
              : 'text-moss-dark hover:bg-vanilla-dark/70'
          }`}
          id="btn-tab-benefits"
        >
          <Leaf className="w-4 h-4" />
          <span>Die 5 Säulen meiner Qualität</span>
        </button>
        <button
          onClick={() => setActiveTab('comparison')}
          className={`flex-1 font-serif py-2.5 px-3 rounded-lg text-sm tracking-wide transition-all flex items-center justify-center space-x-2 ${
            activeTab === 'comparison'
              ? 'bg-moss text-vanilla font-bold shadow-md'
              : 'text-moss-dark hover:bg-vanilla-dark/70'
          }`}
          id="btn-tab-comparison"
        >
          <Award className="w-4 h-4" />
          <span>Handgemacht vs. Industrie</span>
        </button>
      </div>

      {/* Tab Contents */}
      <div className="max-w-5xl mx-auto">
        {activeTab === 'benefits' ? (
          /* The 5 key benefits from GENERAL_INFOS */
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {GENERAL_INFOS.vorteile.map((vort, idx) => (
                <div 
                  key={idx} 
                  className="bg-vanilla border border-gold/30 rounded-2xl p-6 relative hover:shadow-lg transition-all duration-300 jugendstil-corner"
                >
                  <div className="w-10 h-10 rounded-full bg-vanilla-dark flex items-center justify-center border border-gold mb-4">
                    <Star className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-moss mb-2">
                    {vort.title}
                  </h3>
                  <p className="font-sans text-xs text-stone-600 leading-relaxed">
                    {vort.description}
                  </p>
                </div>
              ))}

              {/* Extra banner explaining raw materials */}
              <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-vanilla-dark border-2 border-moss rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 mt-4">
                <div className="w-16 h-16 rounded-full bg-vanilla flex items-center justify-center border border-gold shrink-0">
                  <Sprout className="w-10 h-10 text-moss" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-moss-dark mb-1">
                    Rein pflanzliche Kräutersude aus dem Schwarzwald & der Mosel
                  </h3>
                  <p className="font-sans text-xs text-stone-600 leading-relaxed">
                    Wir verwenden niemals synthetische Duftessenzen. Die wunderbaren Färbungen entstehen durch Rote Pfirsichtonerde, Heilerde und gemahlene Heilpflanzen, die Vitamine und Mineralien spenden. Alles ist 100% ungiftig für Haut, Luft und Flüsse.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Visual Comparison Table */
          <div className="bg-vanilla border border-gold/40 rounded-2xl overflow-hidden shadow-lg animate-fadeIn">
            {/* Header row */}
            <div className="grid grid-cols-1 md:grid-cols-12 bg-vanilla-dark text-moss border-b border-gold/30 p-4 font-serif font-bold text-sm md:text-base">
              <div className="md:col-span-3">Qualitätsmerkmal</div>
              <div className="md:col-span-4.5 text-moss font-semibold mt-2 md:mt-0 flex items-center space-x-1">
                <Leaf className="w-4 h-4 text-moss" />
                <span>La Mosella Naturseife</span>
              </div>
              <div className="md:col-span-4.5 text-stone-500 mt-2 md:mt-0 flex items-center space-x-1">
                <AlertCircle className="w-4 h-4 text-stone-400" />
                <span>Industrielle Seifen / Waschstücke</span>
              </div>
            </div>

            {/* Comparison rows */}
            <div className="divide-y divide-gold/15">
              {comparisonData.map((row, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-12 p-4 md:p-6 hover:bg-vanilla-dark/10 transition-colors">
                  {/* Category Name */}
                  <div className="md:col-span-3 font-serif font-bold text-moss text-base border-b md:border-b-0 border-gold/10 pb-2 md:pb-0 mb-2 md:mb-0">
                    {row.feature}
                  </div>
                  
                  {/* Handmade Description */}
                  <div className="md:col-span-4.5 text-xs text-stone-700 leading-relaxed pr-4 md:border-r border-gold/15 space-y-1 mb-3 md:mb-0">
                    <div className="font-bold text-moss flex items-center space-x-1 mb-1 md:hidden">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>La Mosella:</span>
                    </div>
                    <p>{row.handmade}</p>
                  </div>

                  {/* Industrial Description */}
                  <div className="md:col-span-4.5 text-xs text-stone-500 leading-relaxed pl-0 md:pl-4 space-y-1">
                    <div className="font-bold text-stone-600 flex items-center space-x-1 mb-1 md:hidden">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>Industrie:</span>
                    </div>
                    <p>{row.industrial}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote of the end */}
            <div className="p-5 bg-[#EFF3EE] border-t border-gold/20 text-center font-serif text-sm italic text-moss-dark">
              « Die Haut ist unser größtes Organ. Gönnen Sie ihr die Atempause und die sanfte Pflege, die sie verdient. »
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
