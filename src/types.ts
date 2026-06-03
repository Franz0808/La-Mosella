export interface Soap {
  id: string;
  name: string;
  headline: string;
  description: string;
  detailedDescription: string;
  category: 'Blumig' | 'Kräuterig' | 'Frisch' | 'Sanft';
  scentProfile: string[];
  ingredients: { German: string; INCI: string }[];
  benefits: string[];
  weight: string; // e.g. "100g"
  price: string; // e.g. "8,50 €"
  skinType: string;
  curingPeriod: string;
  phValue: string;
  fatContent: string; // Over-fatting (Überfettung) e.g. "9%"
  oilContent: { name: string; percentage: number; benefits: string }[];
  localSourced: string; // e.g. "Kaltgepresstes Traubenkernöl vom Bio-Weingut an der Mosel"
  colorTheme: {
    bg: string;
    text: string;
    border: string;
    accent: string;
  };
}

export type ActiveSection = 'home' | 'soaps' | 'about' | 'benefits';
