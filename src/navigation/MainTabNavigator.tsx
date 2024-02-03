/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-paper';
import {
  CharacterDetailsScreen,
  CharactersScreen,
  SettingsScreen,
} from '../screens';
import type {Character} from '../types';

const Tab = createBottomTabNavigator();

export type StackParamList = {
  Heroes: undefined;
  Details: {character: Character};
};

const CharactersStack = createNativeStackNavigator<StackParamList>();

const CharactersStackNavigator = () => (
  <CharactersStack.Navigator>
    <CharactersStack.Screen
      name="Heroes"
      component={CharactersScreen}
      options={{headerTitleAlign: 'center'}}
    />
    <CharactersStack.Screen
      name="Details"
      component={CharacterDetailsScreen}
      options={{headerTitleAlign: 'center'}}
    />
  </CharactersStack.Navigator>
);

export const MainTabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: 'red',
      tabBarInactiveTintColor: 'grey',
    }}>
    <Tab.Screen
      name="Home"
      options={{
        tabBarIcon: ({focused}) => (
          <Icon size={24} source="alien" color={focused ? 'red' : 'grey'} />
        ),
        headerShown: false,
      }}
      component={CharactersStackNavigator}
    />
    <Tab.Screen
      options={{
        tabBarIcon: ({focused}) => (
          <Icon size={24} source="cog" color={focused ? 'red' : 'grey'} />
        ),
        headerTitleAlign: 'center',
      }}
      name="Settings"
      component={SettingsScreen}
    />
  </Tab.Navigator>
);
