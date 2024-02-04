import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {Icon, Text, useTheme} from 'react-native-paper';
import axios from 'axios';
import type {StackParamList} from '../navigation';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useEffect, useState} from 'react';

export const CharacterDetailsScreen = ({
  route,
}: NativeStackScreenProps<StackParamList, 'Details'>) => {
  const theme = useTheme();
  const [home, setHome] = useState('');
  const {character, isLiked} = route.params;
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

  if (!home) {
    return (
      <ActivityIndicator
        color={theme.colors.tertiary}
        style={[styles.loader, {backgroundColor: theme.colors.background}]}
      />
    );
  }

  return (
    <View style={[styles.wrapper, {backgroundColor: theme.colors.background}]}>
      <View
        style={[styles.contentWrapper, {borderColor: theme.colors.tertiary}]}>
        <View style={styles.topWrapper}>
          <View style={styles.header}>
            <Text
              style={[styles.headerTitle, {color: theme.colors.tertiary}]}
              variant="titleLarge">
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
        {isLiked && (
          <View style={styles.like}>
            <Icon
              size={32}
              source="heart"
              color={theme.colors.tertiaryContainer}
            />
          </View>
        )}
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
    justifyContent: 'space-between',
  },
  header: {
    alignSelf: 'center',
  },
  headerTitle: {
    textDecorationLine: 'underline',
    fontWeight: '800',
  },
  data: {
    gap: 4,
  },
  loader: {
    flex: 1,
  },
  topWrapper: {
    gap: 24,
  },
  like: {
    alignSelf: 'flex-end',
  },
});
