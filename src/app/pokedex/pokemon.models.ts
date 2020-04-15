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
export interface TypeDetails {
  name: string;
  url: string;
}

export interface Types {
  count: number;
  next?: any;
  previous?: any;
  results: TypeDetails[];
}



export interface Pokemon2 {
    name: string;
    url: string;
}

export interface Pokemon {
    pokemon: Pokemon2;
}

export interface TypeFilter {
    name: string;
    pokemon: Pokemon[];
}
