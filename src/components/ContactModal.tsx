import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2, Leaf, Shield } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', soapInterest: 'Abonnieren & Beratung' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSub = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Bitte füllen Sie alle erforderlichen Felder aus.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          {/* Modal box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-lg bg-vanilla rounded-2xl border-2 border-moss shadow-2xl overflow-hidden p-6 md:p-8 jugendstil-corner"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Delicate interior border frame */}
            <div className="absolute top-1 left-1 right-1 bottom-1 border border-gold/40 rounded-xl pointer-events-none z-10" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 bg-vanilla border border-gold/40 p-2 rounded-full hover:bg-moss/10 transition-colors cursor-pointer"
              aria-label="Schließen"
              id="btn-close-contact-modal"
            >
              <X className="w-4 h-4 text-moss" />
            </button>

            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 bg-[#EFF3EE] border border-moss rounded-full flex items-center justify-center mx-auto mb-2 animate-pulse">
                  <CheckCircle2 className="w-10 h-10 text-moss" />
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-moss">Vielen Dank für Ihre Anfrage!</h3>
                <p className="font-sans text-xs text-stone-600 leading-relaxed max-w-sm mx-auto">
                  Ihre herzliche Anfrage zur La Mosella Seifenmanufaktur wurde erfolgreich übermittelt. 
                  Marion Muszarsky wird sich zeitnah unter Ihrer E-Mail-Adresse melden, um Ihre Bestellung oder Ihren Wunsch zu besprechen.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', message: '', soapInterest: 'Abonnieren & Beratung' });
                      onClose();
                    }}
                    className="bg-moss hover:bg-moss-dark text-vanilla font-serif px-6 py-2 rounded-lg text-xs tracking-wider transition-colors"
                  >
                    Zurück zur Webseite ❦
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="text-center mb-6">
                  <div className="w-8 h-8 rounded-full border border-gold mx-auto flex items-center justify-center bg-vanilla-dark mb-2">
                    <Leaf className="w-4 h-4 text-moss" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-moss-dark leading-tight">
                    Nachricht senden
                  </h3>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-[#8A795A] font-medium -mt-0.5">
                    La Mosella Manufaktur-Post
                  </p>
                  <div className="w-12 h-[1px] bg-gold mx-auto my-3" />
                </div>

                <form onSubmit={handleSub} className="space-y-4 text-left">
                  {error && (
                    <p className="text-xs text-red-600 text-center font-sans font-semibold">{error}</p>
                  )}

                  <div>
                    <label className="block text-[10px] uppercase tracking-wide text-gold font-bold mb-1">Name / Firma</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ihr Vor- und Nachname"
                      className="w-full bg-vanilla-dark/40 border border-gold/30 rounded-lg p-2.5 text-xs focus:outline-none focus:border-moss text-moss-dark"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-wide text-gold font-bold mb-1">E-Mail-Adresse</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@ihredomain.de"
                      className="w-full bg-vanilla-dark/40 border border-gold/30 rounded-lg p-2.5 text-xs focus:outline-none focus:border-moss text-moss-dark"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-wide text-gold font-bold mb-1">Interesse / Bestellwunsch</label>
                    <select
                      value={formData.soapInterest}
                      onChange={(e) => setFormData({ ...formData, soapInterest: e.target.value })}
                      className="w-full bg-vanilla-dark/40 border border-gold/30 rounded-lg p-2.5 text-xs focus:outline-none focus:border-moss text-moss-dark"
                    >
                      <option value="Abonnieren & Beratung">Beratung & Allgemeines</option>
                      <option value="Lavendeltraum">Lavendeltraum & Schafsmilch (110g)</option>
                      <option value="Weinbergpfirsich">Weinbergpfirsich & Mandelöl (105g)</option>
                      <option value="Moseltraube">Mosel-Traubenkern & Zeder (115g)</option>
                      <option value="Wildekamille">Wilde Kamille & Ringelblume (110g)</option>
                      <option value="Sonderanfertigung">Geschenksets / Individuelle Seifen sets</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-wide text-gold font-bold mb-1">Ihre Mitteilung</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Bitte geben Sie hier Ihre Wünsche, Fragen oder Bestelldetails ein..."
                      className="w-full bg-vanilla-dark/40 border border-gold/30 rounded-lg p-2.5 text-xs focus:outline-none focus:border-moss text-moss-dark resize-none"
                    />
                  </div>

                  <div className="flex justify-between items-center text-[10px] text-stone-500 py-1 font-sans">
                    <span className="flex items-center space-x-1">
                      <Shield className="w-3 h-3 text-moss" />
                      <span>Sichere Übertragung</span>
                    </span>
                    <span>Antwort meist binnen 24 Std.</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-moss hover:bg-moss-dark text-vanilla font-serif py-3 rounded-lg text-sm tracking-widest transition-colors flex items-center justify-center space-x-2 shadow-md cursor-pointer"
                    id="btn-modal-form-submit"
                  >
                    <Send className="w-4 h-4" />
                    <span>Abschicken ❦</span>
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
