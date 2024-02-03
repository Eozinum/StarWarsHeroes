/* eslint-disable react/no-unstable-nested-components */
import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, View, ActivityIndicator} from 'react-native';
import type {Character} from '../types';
import axios from 'axios';
import type {StackParamList} from '../navigation';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CharacterListItem} from '../components';

export const CharactersScreen = ({
  navigation,
}: NativeStackScreenProps<StackParamList, 'Heroes'>) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      if (!hasMore) {
        return;
      }

      try {
        const response = await axios.get(
          `https://swapi.dev/api/people/?page=${page}`,
        );
        setCharacters(prevCharacters =>
          page === 1
            ? response.data.results
            : [...prevCharacters, ...response.data.results],
        );
        if (response.data.next === null) {
          setHasMore(false);
        }
      } catch (error) {
        console.error('Failed to fetch characters:', error);
      }
    };

    fetchCharacters();
  }, [page, hasMore]);

  return (
    <FlatList
      style={styles.wrapper}
      data={characters}
      onEndReached={() => {
        if (hasMore) {
          setPage(prevPage => prevPage + 1);
        }
      }}
      onEndReachedThreshold={0.5}
      ListFooterComponent={() => (
        <View style={styles.loaderWrapper}>
          {hasMore && <ActivityIndicator size="large" />}
        </View>
      )}
      renderItem={({item, index}) => (
        <CharacterListItem
          order={index + 1}
          character={item}
          onPress={() => navigation.navigate('Details', {character: item})}
        />
      )}
      keyExtractor={item => item.url}
    />
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
    gap: 4,
  },
  loaderWrapper: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
