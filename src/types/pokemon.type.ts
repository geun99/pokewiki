export interface pokemon {
  id: number;
  name: string;
  img: string;
  types: string[];
}

export interface pokemonDetail extends pokemon {
  detail: string;
  weight: number;
  height: number;
  genera: string;
  stats: number[];
}
export interface entry {
  flavor_text: string;
  language: {
    name: string;
    url: string;
  };
  version: {
    name: string;
    url: string;
  };
}

export interface genus {
  genus: string;
  language: {
    name: string;
    url: string;
  };
}

export interface stats {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}
