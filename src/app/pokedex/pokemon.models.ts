export interface PokedexDetails {
  name: string;
  url: string;
}

export interface Pokedex {
  count: number;
  next: string;
  previous?: any;
  results: PokedexDetails[];
}
