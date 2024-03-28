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
}
