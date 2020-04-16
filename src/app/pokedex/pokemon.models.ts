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

export interface Ability2 {
      name: string;
  }

export interface Ability {
      ability: Ability2;
  }

export interface Form {
      name: string;
      url: string;
  }


export interface Move2 {
      name: string;
  }

export interface Move {
      move: Move2;
  }

export interface Sprites {
      front_default: string;
  }

export interface Stat2 {
      name: string;
      url: string;
  }

export interface Stat {
      base_stat: number;
      effort: number;
      stat: Stat2;
  }

export interface Type2 {
      name: string;
      url: string;
  }

export interface Type {
      type: Type2;
  }

export interface PokemonDetails {
      abilities: Ability[];
      forms: Form[];
      height: number;
      id: number;
      moves: Move[];
      name: string;
      sprites: Sprites;
      stats: Stat[];
      types: Type[];
      weight: number;
  }




