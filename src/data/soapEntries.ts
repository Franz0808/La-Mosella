export type ProduktKategorie = 'Seife' | 'Badekugel';

export interface SoapEntry {
  name: string;
  image: string;
  beschreibung: string;
  gewicht: string;
  preis: string;
  produktkategorie: ProduktKategorie;
  duft: string;
  inhaltsstoffe: string;
  featured?: boolean;
}

const modules = import.meta.glob('./soaps/*.ts', { eager: true }) as Record<
  string,
  { default: SoapEntry }
>;

export const SOAP_ENTRIES: SoapEntry[] = Object.entries(modules)
  .filter(([path]) => !path.includes('_template'))
  .map(([, mod]) => mod.default)
  .sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return a.name.localeCompare(b.name, 'de');
  });
