import {View, StyleSheet} from 'react-native';
import {Text, useTheme, Button} from 'react-native-paper';

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
  const theme = useTheme();

  return (
    <View style={[styles.wrapper, {backgroundColor: theme.colors.background}]}>
      <View style={[styles.item, {borderColor: theme.colors.tertiary}]}>
        <Text variant="titleLarge">{femaleLikes}</Text>
        <Text variant="labelSmall">Female</Text>
      </View>
      <View style={[styles.item, {borderColor: theme.colors.tertiary}]}>
        <Text variant="titleLarge">{maleLikes}</Text>
        <Text variant="labelSmall">Male</Text>
      </View>
      <View style={[styles.item, {borderColor: theme.colors.tertiary}]}>
        <Text variant="titleLarge">{otherLikes}</Text>
        <Text variant="labelSmall">Other</Text>
      </View>
      <Button
        style={styles.clearBtn}
        compact
        buttonColor={theme.colors.tertiary}
        textColor={theme.colors.background}
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
    width: '20%',
    alignItems: 'center',
  },
  clearBtn: {
    borderRadius: 8,
  },
});
