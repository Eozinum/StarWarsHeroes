/* eslint-disable react/no-unstable-nested-components */
import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, View, ActivityIndicator} from 'react-native';
import type {Character} from '../types';
import axios from 'axios';
import type {StackParamList} from '../navigation';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CharacterListItem, CharacterStatistics} from '../components';
import {Divider} from 'react-native-paper';

type ApiResult = {
  count: number;
  next?: string;
  previous?: string;
  results: [];
};

export const CharactersScreen = ({
  navigation,
}: NativeStackScreenProps<StackParamList, 'Heroes'>) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [likes, setLikes] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const handleLike = (url: string) => {
    setLikes(prevLikes => {
      if (prevLikes.includes(url)) {
        return prevLikes.filter(likeUrl => likeUrl !== url);
      }
      return [...prevLikes, url];
    });
  };

  const clearLikes = () => {
    setLikes([]);
  };

  useEffect(() => {
    if (!hasMore) {
      return;
    }

    axios
      .get<ApiResult>(`https://swapi.dev/api/people/?page=${page}`)
      .then(response => {
        setCharacters(prevCharacters =>
          page === 1
            ? response.data.results
            : [...prevCharacters, ...response.data.results],
        );
        setHasMore(Boolean(response.data.next));
      })
      .catch(error => {
        console.error('Failed to fetch characters:', error);
      });
  }, [page, hasMore]);

  return (
    <>
      <CharacterStatistics
        femaleLikes={
          characters.filter(
            char => char.gender === 'female' && likes.includes(char.url),
          ).length
        }
        maleLikes={
          characters.filter(
            char => char.gender === 'male' && likes.includes(char.url),
          ).length
        }
        otherLikes={
          characters.filter(
            char =>
              !['male', 'female'].includes(char.gender) &&
              likes.includes(char.url),
          ).length
        }
        clearLikes={clearLikes}
      />
      {characters.length > 0 && (
        <FlatList
          style={styles.wrapper}
          data={characters}
          onEndReached={() => {
            if (hasMore) {
              setPage(prevPage => prevPage + 1);
            }
          }}
          onEndReachedThreshold={0.5}
          ItemSeparatorComponent={() => <Divider bold />}
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
              onLike={() => handleLike(item.url)}
              isLiked={likes.includes(item.url)}
            />
          )}
          keyExtractor={item => item.url}
        />
      )}
    </>
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
