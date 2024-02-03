import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {Text} from 'react-native-paper';
import axios from 'axios';
import type {StackParamList} from '../navigation';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useEffect, useState} from 'react';

export const CharacterDetailsScreen = ({
  route,
}: NativeStackScreenProps<StackParamList, 'Details'>) => {
  const [home, setHome] = useState('');
  const {character} = route.params;
  const {
    homeworld,
    birth_year,
    eye_color,
    films,
    gender,
    hair_color,
    height,
    mass,
    name,
    skin_color,
  } = character;

  useEffect(() => {
    const fetchHome = async () => {
      if (!homeworld) {
        return;
      }

      try {
        const response = await axios.get(homeworld);
        setHome(response.data.name);
      } catch (err) {
        console.error('Failed to fetch homeworld:', err);
      }
    };

    fetchHome();
  }, [homeworld]);

  console.log('char=>>>>', character);

  if (!home) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.contentWrapper}>
        <View style={styles.header}>
          <Text style={styles.headerTitle} variant="titleLarge">
            {name}
          </Text>
        </View>
        <View style={styles.data}>
          <Text variant="bodyLarge">Gender: {gender}</Text>
          <Text variant="bodyLarge">Birth Year: {birth_year}</Text>
          <Text variant="bodyLarge">Eye color: {eye_color}</Text>
          <Text variant="bodyLarge">Hair color: {hair_color}</Text>
          <Text variant="bodyLarge">Skin color: {skin_color}</Text>
          <Text variant="bodyLarge">Height: {height}</Text>
          <Text variant="bodyLarge">Mass: {mass}</Text>
          <Text variant="bodyLarge">Movies: {films.length}</Text>
          <Text variant="bodyLarge">Home: {home}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
    flex: 1,
  },
  contentWrapper: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    flex: 1,
    gap: 24,
  },
  header: {
    alignSelf: 'center',
  },
  headerTitle: {
    textDecorationLine: 'underline',
  },
  data: {
    gap: 4,
  },
});
