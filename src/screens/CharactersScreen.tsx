/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {FlatList, StyleSheet, View, ActivityIndicator} from 'react-native';
import type {StackParamList} from '../navigation';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CharacterListItem, CharacterStatistics} from '../components';
import {Divider, useTheme} from 'react-native-paper';

import {useAppDispatch} from '../redux/hooks';
import {handleLike} from '../redux/likesSlice';
import {useCharacters} from '../hooks';

export const CharactersScreen = ({
  navigation,
}: NativeStackScreenProps<StackParamList, 'Heroes'>) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const {
    characters,
    hanldleClearLikes,
    likes,
    likesCounter,
    loadMoreCharacters,
    isFetching,
  } = useCharacters();

  if (!characters) {
    return (
      <View style={[styles.loader, {backgroundColor: theme.colors.background}]}>
        <ActivityIndicator size="large" color={theme.colors.tertiary} />
      </View>
    );
  }

  return (
    <>
      <CharacterStatistics
        femaleLikes={likesCounter.femaleLikes}
        maleLikes={likesCounter.maleLikes}
        otherLikes={likesCounter.otherLikes}
        clearLikes={hanldleClearLikes}
      />
      {characters.length > 0 && (
        <FlatList
          style={[styles.wrapper, {backgroundColor: theme.colors.background}]}
          data={characters}
          onEndReached={loadMoreCharacters}
          onEndReachedThreshold={0.5}
          ItemSeparatorComponent={() => <Divider bold />}
          ListFooterComponent={() => (
            <View style={styles.loaderWrapper}>
              {isFetching && (
                <ActivityIndicator color={theme.colors.tertiary} />
              )}
            </View>
          )}
          renderItem={({item, index}) => (
            <CharacterListItem
              order={index + 1}
              character={item}
              onPress={() =>
                navigation.navigate('Details', {
                  character: item,
                  isLiked: likes.includes(item.url),
                })
              }
              onLike={() => dispatch(handleLike(item.url))}
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
    paddingTop: 10,
    paddingBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
  },
});
