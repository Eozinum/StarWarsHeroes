import {MD3LightTheme as DefaultTheme} from 'react-native-paper';

export const lightTheme = {
  ...DefaultTheme,
  dark: false,

  colors: {
    ...DefaultTheme.colors,
    background: '#F5F5F5',
    onBackground: 'rgba(245, 245, 245, 0.90)',
    tertiary: '#CDA663',
    primary: '#000',
    secondary: '#D3D3D3',
    onSecondary: '#AAA',
    onPrimary: '#646464',
    surfaceVariant: '#818181',
    tertiaryContainer: '#C94848',
    onTertiaryContainer: '#189A46',
    onTertiary: '#9B8C72',
    backdrop: 'rgba(245, 245, 245, 0.5)',
    onSurface: '#000',
  },
};

export const darkTheme = {
  ...DefaultTheme,
  dark: true,

  colors: {
    ...DefaultTheme.colors,
    background: '#1E2747',
    onBackground: 'rgba(30, 39, 71, 0.90)',
    tertiary: '#FFD58E',
    primary: '#FFF',
    secondary: '#33394F',
    onSecondary: '#404A6D',
    onPrimary: '#F1F1F1',
    surfaceVariant: '#9F9F9F',
    tertiaryContainer: '#F24D4D',
    onTertiaryContainer: '#3DC56D',
    onTertiary: '#C5A775',
    backdrop: 'rgba(30, 39, 71, 0.5)',
    onSurface: '#FFF',
  },
};
