export type Character = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  gender: 'female' | 'male' | string;
  homeworld: string;
  birth_year: string;
  films: string[];
  url: string;
  starships: string[];
};
