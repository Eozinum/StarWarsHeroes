import {MD3LightTheme} from 'react-native-paper';

export const getIconNameAndColor = (
  gen: string,
  theme: typeof MD3LightTheme,
) => {
  if (gen === 'female') {
    return {
      icon: 'face-woman-shimmer',
      background: theme.colors.tertiary,
      iconColor: theme.colors.background,
      borderColor: 'transparent',
    };
  } else if (gen === 'male') {
    return {
      icon: 'account-tie-hat',
      background: theme.colors.background,
      iconColor: theme.colors.tertiary,
      borderColor: theme.colors.tertiary,
    };
  } else {
    return {
      icon: 'snowman',
      background: theme.colors.onTertiary,
      iconColor: theme.colors.background,
      borderColor: 'transparent',
    };
  }
};
