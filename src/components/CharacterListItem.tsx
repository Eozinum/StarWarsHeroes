import {TouchableOpacity, StyleSheet, View} from 'react-native';
import {Text, Icon, useTheme, Badge} from 'react-native-paper';
import {getIconNameAndColor} from '../utils';
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
  onLike,
  isLiked,
  order,
}: Props) => {
  const theme = useTheme();
  const genderIcon = getIconNameAndColor(character.gender, theme);

  return (
    <View style={[styles.wrapper, {borderColor: theme.colors.secondary}]}>
      <TouchableOpacity style={styles.heroName} onPress={onPress}>
        <View
          style={[
            styles.avatar,
            {
              backgroundColor: genderIcon.background,
              borderColor: genderIcon.borderColor,
            },
          ]}>
          <Icon
            size={32}
            source={genderIcon.icon}
            color={genderIcon.iconColor}
          />
        </View>
        <View style={styles.nameAndStaff}>
          <Text variant="titleMedium">{character.name}</Text>
          <View style={styles.staffRow}>
            <View
              style={[styles.staffIcon, {borderColor: theme.colors.tertiary}]}>
              <Icon
                size={24}
                source="rocket-launch"
                color={theme.colors.tertiary}
              />
              <Badge
                style={[
                  styles.badge,
                  {
                    backgroundColor: theme.colors.tertiary,
                    color: theme.colors.background,
                  },
                ]}
                size={20}>
                {character.starships.length}
              </Badge>
            </View>
            <View
              style={[styles.staffIcon, {borderColor: theme.colors.tertiary}]}>
              <Icon
                size={24}
                source="movie-filter"
                color={theme.colors.tertiary}
              />
              <Badge
                style={[
                  styles.badge,
                  {
                    backgroundColor: theme.colors.tertiary,
                    color: theme.colors.background,
                  },
                ]}
                size={20}>
                {character.films.length}
              </Badge>
            </View>
          </View>
        </View>
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
      <Badge
        size={24}
        style={[styles.order, {color: theme.colors.onSecondary}]}>
        {order}
      </Badge>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
    borderWidth: 1,
    borderRadius: 8,
    flex: 1,
  },
  like: {
    width: '10%',
    alignSelf: 'center',
  },
  heroName: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginRight: 16,
    borderWidth: 1,
  },
  staffRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    width: 90,
  },
  staffIcon: {
    width: 38,
    height: 38,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  badge: {
    position: 'absolute',
    top: -8,
    right: -10,
  },
  nameAndStaff: {
    gap: 8,
  },
  order: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
  },
});
