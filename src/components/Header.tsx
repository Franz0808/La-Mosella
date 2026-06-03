import React from 'react';
import { ActiveSection } from '../types';
import { Menu, X, Leaf, Smartphone } from 'lucide-react';

interface HeaderProps {
  activeSection: ActiveSection;
  setActiveSection: (section: ActiveSection) => void;
  onOpenContact: () => void;
}

export default function Header({ activeSection, setActiveSection, onOpenContact }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'home', label: 'Startseite' },
    { id: 'soaps', label: 'Seifenkatalog' },
    { id: 'about', label: 'Über mich' },
    { id: 'benefits', label: 'Warum Handarbeit?' },
    { id: 'testpage', label: '⚙ Testseite' },
    { id: 'testpage-v2a', label: '⚙ V2a' },
    { id: 'testpage-v2b', label: '⚙ V2b' },
    { id: 'testpage-v2c', label: '⚙ V2c' },
  ] as const;

  const handleNav = (section: ActiveSection) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-vanilla/90 backdrop-blur-md border-b border-gold/30 py-3 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo & Name */}
        <button 
          onClick={() => handleNav('home')} 
          className="flex items-center space-x-2 text-left focus:outline-none group"
          id="btn-nav-logo"
        >
          <div className="w-10 h-10 rounded-full border border-gold flex items-center justify-center bg-vanilla-dark group-hover:bg-moss/10 transition-colors">
            <Leaf className="w-5 h-5 text-moss" />
          </div>
          <div>
            <h1 className="font-serif text-xl md:text-2xl font-semibold tracking-tight text-moss leading-tight">
              La Mosella
            </h1>
            <p className="font-sans text-[10px] uppercase tracking-widest text-[#8A795A] -mt-1 font-medium">
              Seifenmanufaktur
            </p>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`font-serif text-lg tracking-wide transition-all relative py-1 px-2 focus:outline-none ${
                activeSection === item.id 
                  ? 'text-moss font-semibold' 
                  : 'text-moss-dark/75 hover:text-moss font-medium'
              }`}
              id={`nav-${item.id}`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-gold" />
              )}
            </button>
          ))}
          <button
            onClick={onOpenContact}
            className="border border-[#C09E5A] hover:bg-[#3A5A3A] hover:text-white text-moss font-serif px-4 py-1.5 rounded-full transition-all text-base tracking-wide"
            id="btn-header-contact"
          >
            Anfrage / Kontakt
          </button>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center md:hidden space-x-2">
          <button
            onClick={onOpenContact}
            className="text-xs border border-[#C09E5A] text-moss px-3 py-1 rounded-full font-serif"
            id="btn-header-contact-mobile"
          >
            Kontakt
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1 text-moss focus:outline-none"
            aria-label="Menü öffnen"
            id="btn-mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-vanilla border-b border-gold/40 shadow-xl py-6 px-4 space-y-4 animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`text-left font-serif text-xl py-2 px-3 rounded-lg border-l-2 transition-all ${
                  activeSection === item.id
                    ? 'border-moss bg-vanilla-dark text-moss font-medium'
                    : 'border-transparent text-moss-dark/80'
                }`}
                id={`nav-mobile-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="pt-4 border-t border-gold/20 flex flex-col space-y-3">
            <div className="text-xs text-center text-moss-light italic">
              « Handgefertigte Naturseifen aus Traben-Trarbach »
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
