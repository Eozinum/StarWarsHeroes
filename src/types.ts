import {RouteProp} from '@react-navigation/native';

export type Character = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  gender: string;
  homeworld: string;
  birth_year: string;
  films: string[];
  url: string;
};

export type CharacterDetailsParams = {
  character: Character;
};

export type CharacterDetailsScreenRouteProp = RouteProp<
  {params: CharacterDetailsParams},
  'params'
>;
