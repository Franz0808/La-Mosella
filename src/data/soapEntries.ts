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
}

const modules = import.meta.glob('./soaps/*.ts', { eager: true }) as Record<
  string,
  { default: SoapEntry }
>;

export const SOAP_ENTRIES: SoapEntry[] = Object.entries(modules)
  .filter(([path]) => !path.includes('_template'))
  .map(([, mod]) => mod.default);
