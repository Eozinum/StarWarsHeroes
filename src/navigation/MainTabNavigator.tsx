/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Icon, useTheme} from 'react-native-paper';
import {CharacterDetailsScreen, CharactersScreen} from '../screens';
import type {Character} from '../types';

const Tab = createBottomTabNavigator();

export type StackParamList = {
  Heroes: undefined;
  Details: {character: Character; isLiked: boolean};
};

const CharactersStack = createNativeStackNavigator<StackParamList>();

const CharactersStackNavigator = () => {
  const theme = useTheme();

  return (
    <CharactersStack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: theme.colors.background},
        headerTintColor: theme.colors.primary,
        headerTitleAlign: 'center',
      }}>
      <CharactersStack.Screen name="Heroes" component={CharactersScreen} />
      <CharactersStack.Screen
        name="Details"
        component={CharacterDetailsScreen}
      />
    </CharactersStack.Navigator>
  );
};

export const MainTabNavigator = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.tertiary,
        tabBarInactiveTintColor: theme.colors.onSecondary,
        headerTintColor: theme.colors.primary,
        headerStyle: {backgroundColor: theme.colors.background},
        tabBarStyle: {backgroundColor: theme.colors.background},
        headerShown: false,
        tabBarIcon: ({focused}) => (
          <Icon
            size={24}
            source="alien"
            color={focused ? theme.colors.tertiary : theme.colors.onSecondary}
          />
        ),
      }}>
      <Tab.Screen name="Home" component={CharactersStackNavigator} />
    </Tab.Navigator>
  );
};
