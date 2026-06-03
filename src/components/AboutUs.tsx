import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Share2, ClipboardCheck, Sparkles, Send, CheckCircle } from 'lucide-react';

interface AboutUsProps {
  showContactFormImmediately?: boolean;
}

export default function AboutUs({ showContactFormImmediately = false }: AboutUsProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', soapInterest: 'Abonnieren & Infos' });
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleSub = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormError('Bitte füllen Sie alle erforderlichen Felder aus.');
      return;
    }
    setFormError('');
    setSubmitted(true);
  };

  return (
    <div className="bg-vanilla py-10 px-4 min-h-screen page-enter">
      {/* Page Header */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <span className="font-serif italic text-gold text-base md:text-lg block mb-1">
          Die Kunst der Saponifikation an der Mosel
        </span>
        <h2 className="font-serif text-3xl md:text-5xl font-normal text-moss tracking-tight">
          Über mich & meine Manufaktur
        </h2>
        <div className="w-16 h-[1px] bg-gold mx-auto my-4" />
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:items-start">
        {/* Left Column: Storytelling & portrait */}
        <div className="md:col-span-7 space-y-6">
          <div className="prose text-stone-600 leading-relaxed text-sm md:text-base space-y-4">
            <h3 className="font-serif text-2xl font-bold text-moss-dark leading-tight">
              « Jedes Seifenstück ist ein Liebesbrief an die Natur der Mosel »
            </h3>
            <p>
              Mein Name ist <strong>Marion Muszarsky</strong> und ich bin die Gründerin von{' '}
              <span className="text-moss font-semibold">La Mosella</span>.
            </p>
            <p>
              Was einst als kreatives Hobby begann, entwickelte sich zu einer großen Leidenschaft. Nach mehreren Jahren
              des Experimentierens und Lernens gründete ich 2015 meine eigene kleine Seifenmanufaktur.
            </p>
            <p>
              Seitdem entstehen mit viel Liebe zum Detail, hochwertigen pflanzlichen Rohstoffen und handwerklicher
              Sorgfalt einzigartige Naturseifen. Die kontinuierliche Weiterentwicklung meiner Rezepturen, die sorgfältige
              Auswahl der Inhaltsstoffe und meine Begeisterung für das traditionelle Seifenhandwerk begleiten mich bis heute.
            </p>
            <p>
              Jede Seife wird von mir in kleinen Chargen von Hand gefertigt. Mein Ziel ist es, natürliche Pflege mit
              hoher Qualität, liebevoller Gestaltung und einem besonderen Anspruch an Ästhetik zu verbinden.
            </p>
            <p>
              Ich freue mich, wenn meine Seifen nicht nur die Haut verwöhnen, sondern auch ein kleines Stück Freude
              in den Alltag bringen.
            </p>
            <p className="italic font-serif text-moss">
              Natürlich. Handgemacht. Mit Liebe.
            </p>
          </div>

          {/* Core Values grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gold/20">
            <div className="p-4 rounded-xl bg-vanilla-dark/30 border border-gold/10">
              <span className="font-serif text-moss font-bold block mb-1">✦ 100% Kaltgerührt</span>
              <p className="text-xs text-stone-500 leading-relaxed">
                Reifezeit von mindestens 6 Wochen. Vitamine und Pflegeöle bleiben erhalten und reparieren die Hautbarriere.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-vanilla-dark/30 border border-gold/10">
              <span className="font-serif text-moss font-bold block mb-1">✦ Regionale Partnerschaft</span>
              <p className="text-xs text-stone-500 leading-relaxed">
                Lokales Weintraubenkern-Gold und Wildkräutersude direkt von den Naturufern der Mosellandschaft.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-vanilla-dark/30 border border-gold/10">
              <span className="font-serif text-moss font-bold block mb-1">✦ Absolut Plastikfrei</span>
              <p className="text-xs text-stone-500 leading-relaxed">
                Biologisch abbaubar, mikroplastikfrei und in feinstem, handbeschriebenem Graspapier liebevoll verpackt.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-vanilla-dark/30 border border-gold/10">
              <span className="font-serif text-moss font-bold block mb-1">✦ Ohne Palmöl & Tierversuche</span>
              <p className="text-xs text-stone-500 leading-relaxed">
                Für ein reines Wasch- und Umweltgefühl. Zertifizierte Verträglichkeit und rein vegane & lactose-milde Rezepturen.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Artisan Portrait Card & Contact details */}
        <div className="md:col-span-5 space-y-6">
          {/* Portrait Illustration */}
          <div className="rounded-2xl border-2 border-moss overflow-hidden bg-[#FAF5E0] shadow-xl relative p-3 jugendstil-corner">
            <img 
              src="/images/marion_portrait_1779655251734.webp"
              alt="Marion Muszarsky in der Seifenmanufaktur" 
              className="w-full h-auto rounded-lg object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="p-4 text-center">
              <h4 className="font-serif text-xl font-bold text-moss">Marion Muszarsky</h4>
              <p className="text-xs text-gold uppercase tracking-widest font-sans font-medium mt-1">
                Kreativer Kopf & Seifensiederin
              </p>
            </div>
          </div>

          {/* Visitenkarten Information */}
          <div className="bg-[#FAF7EB] border border-gold rounded-xl p-5 shadow-inner space-y-4">
            <h4 className="font-serif text-lg font-bold text-moss border-b border-gold/30 pb-2">
              Adresse & Kontakt (Visitenkarte)
            </h4>
            
            <div className="space-y-3 text-xs text-stone-700">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-moss shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">La Mosella Seifenmanufaktur</p>
                  <p>Litziger Weg 14</p>
                  <p>56841 Traben-Trarbach</p>
                  <span className="text-[10px] text-stone-400 italic font-serif">Region Rheinland-Pfalz, Mosel</span>
                </div>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-moss shrink-0" />
                <div>
                  <p className="font-bold">Sprechzeit & Mobil</p>
                  <a href="tel:015167000929" className="hover:text-gold transition-colors">0151-67000929</a>
                </div>
              </div>

              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-moss shrink-0" />
                <div>
                  <p className="font-bold">E-Mail für Bestellanfragen</p>
                  <a href="mailto:lm-seifenmanufaktur@t-online.de" className="hover:text-gold transition-colors break-all">
                    lm-seifenmanufaktur@t-online.de
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Inquiry Form */}
          <div className="bg-vanilla border border-gold/40 rounded-xl p-5 shadow-md">
            <h4 className="font-serif text-lg font-bold text-moss mb-3">
              Unverbindliche Bestellanfrage
            </h4>
            <p className="text-[11px] text-stone-500 leading-snug mb-4">
              Haben Sie Fragen zu meinen Naturseifen, Sonderwünschen für Hochzeiten/Feste oder möchten Sie eine Bestellung aufgeben? Schreiben Sie mir direkt!
            </p>

            {submitted ? (
              <div className="bg-[#EFF3EE] border border-[#D4DFCC] p-4 rounded-lg text-center space-y-2">
                <CheckCircle className="w-8 h-8 text-moss mx-auto animate-bounce" />
                <h5 className="font-serif text-base font-bold text-moss">Vielen Dank für Ihre Nachricht!</h5>
                <p className="text-[11px] text-stone-600">
                  Ich habe Ihre Anfrage erhalten und melde mich zeitnah bei Ihnen zur Abstimmung Ihrer Seifenkreation.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', message: '', soapInterest: 'Abonnieren & Infos' }); }}
                  className="font-serif text-xs text-gold hover:underline mt-2"
                >
                  Weitere Nachricht senden
                </button>
              </div>
            ) : (
              <form onSubmit={handleSub} className="space-y-3">
                {formError && (
                  <p className="text-[11px] text-red-600 font-sans">{formError}</p>
                )}
                <div>
                  <label className="block text-[10px] uppercase tracking-wide text-gold font-bold mb-1">Ihr Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Vorname Nachname"
                    className="w-full bg-vanilla-dark/40 border border-gold/30 rounded-lg p-2 text-xs focus:outline-none focus:border-moss text-moss-dark"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-wide text-gold font-bold mb-1">Ihre E-Mail</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@beispiel.de"
                    className="w-full bg-vanilla-dark/40 border border-gold/30 rounded-lg p-2 text-xs focus:outline-none focus:border-moss text-moss-dark"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-wide text-gold font-bold mb-1">Interesse an Seife</label>
                  <select
                    value={formData.soapInterest}
                    onChange={(e) => setFormData({ ...formData, soapInterest: e.target.value })}
                    className="w-full bg-vanilla-dark/40 border border-gold/30 rounded-lg p-2 text-xs focus:outline-none focus:border-moss text-moss-dark"
                  >
                    <option value="Lavendeltraum">Lavendeltraum & Schafsmilch</option>
                    <option value="Weinbergpfirsich">Weinbergpfirsich & Mandelöl</option>
                    <option value="Moseltraube">Mosel-Traubenkern & Zeder</option>
                    <option value="Wildekamille">Wilde Kamille & Ringelblume</option>
                    <option value="Sonderanfertigung">Sonderanfertigung / Geschenkset</option>
                    <option value="Abonnieren & Infos">Generelle Beratung / Beratung</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-wide text-gold font-bold mb-1">Ihre Nachricht</label>
                  <textarea
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Wie kann ich Ihnen helfen? Z.B. Wieviele Seifenstücke Sie bestellen möchten..."
                    className="w-full bg-vanilla-dark/40 border border-gold/30 rounded-lg p-2 text-xs focus:outline-none focus:border-moss text-moss-dark resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-moss hover:bg-moss-dark text-vanilla font-serif py-2 rounded-lg text-xs tracking-wider transition-colors flex items-center justify-center space-x-1"
                  id="btn-submit-contact-form"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Nachricht Absenden ❦</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
