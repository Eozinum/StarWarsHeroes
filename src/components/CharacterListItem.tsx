import {TouchableOpacity, StyleSheet, View} from 'react-native';
import {Text, Icon, useTheme} from 'react-native-paper';
import type {Character} from '../types';

type Props = {
  character: Character;
  onPress: () => void;
  order: number;
  onLike: () => void;
  isLiked: boolean;
};

export const CharacterListItem = ({
  character,
  onPress,
  order,
  onLike,
  isLiked,
}: Props) => {
  const theme = useTheme();

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.heroName} onPress={onPress}>
        <Text variant="titleMedium">
          {order}. {character.name}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.like} onPress={onLike}>
        <Icon
          source="heart"
          size={24}
          color={
            isLiked ? theme.colors.tertiaryContainer : theme.colors.onSecondary
          }
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  like: {
    width: '10%',
  },
  heroName: {
    width: '90%',
  },
});
