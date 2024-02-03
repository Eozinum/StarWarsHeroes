import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import type {StackParamList} from '../navigation';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export const CharacterDetailsScreen = ({
  route,
}: NativeStackScreenProps<StackParamList, 'Details'>) => {
  const {character} = route.params;

  console.log('char=>>>>', character);

  return (
    <View>
      <Text>Name: {character.name}</Text>
      <Text>Gender: {character.gender}</Text>
      <Text>Birth Year: {character.birth_year}</Text>
      <Text>Movies: {character.films.length}</Text>
    </View>
  );
};
