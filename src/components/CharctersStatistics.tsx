/* eslint-disable react/react-in-jsx-scope */
import {View, StyleSheet} from 'react-native';
import {Text, Button} from 'react-native-paper';

type Props = {
  femaleLikes: number;
  maleLikes: number;
  otherLikes: number;
  clearLikes: () => void;
};

export const CharacterStatistics = ({
  femaleLikes,
  maleLikes,
  otherLikes,
  clearLikes,
}: Props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.item}>
        <Text>{femaleLikes}</Text>
        <Text>Female</Text>
      </View>
      <View style={styles.item}>
        <Text>{maleLikes}</Text>
        <Text>Male</Text>
      </View>
      <View style={styles.item}>
        <Text>{otherLikes}</Text>
        <Text>Other</Text>
      </View>
      <Button
        style={styles.clearBtn}
        compact
        mode="contained"
        onPress={clearLikes}>
        Clear Likes
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  item: {
    padding: 8,
    gap: 4,
    borderWidth: 1,
    borderRadius: 8,
    width: 70,
  },
  clearBtn: {
    borderRadius: 8,
  },
});
