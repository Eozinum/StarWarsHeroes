import {FlatList, StyleSheet, View, ActivityIndicator} from 'react-native';
import {useTheme} from 'react-native-paper';
import {CharacterListItem, CharacterStatistics} from '../components';
import {useCharacters} from '../hooks';
import {useAppDispatch} from '../redux/hooks';
import {handleLike} from '../redux/likesSlice';
import type {StackParamList} from '../navigation';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

const Footer = () => {
  const theme = useTheme();
  return (
    <View style={styles.loaderWrapper}>
      <ActivityIndicator color={theme.colors.tertiary} />
    </View>
  );
};

const FooterWitoutLoader = () => <View style={styles.loaderWrapper} />;

const ListDivider = () => <View style={styles.divider} />;

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

  if (!characters?.length) {
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
          ItemSeparatorComponent={ListDivider}
          ListFooterComponent={isFetching ? Footer : FooterWitoutLoader}
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
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
  },
  divider: {
    height: 4,
  },
});
