/* eslint-disable react/react-in-jsx-scope */
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import {Text, Icon} from 'react-native-paper';
import {useState} from 'react';

import type {Character} from '../types';

type Props = {
  character: Character;
  onPress: () => void;
  order: number;
};

export const CharacterListItem = ({character, onPress, order}: Props) => {
  const [liked, setLiked] = useState(false);

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={onPress}>
        <Text variant="bodyLarge">
          {order}. {character.name}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setLiked(!liked)}>
        <Icon source="heart" size={24} color={liked ? 'red' : 'grey'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: 'grey',
    marginTop: 6,
  },
});
