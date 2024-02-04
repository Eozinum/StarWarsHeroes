import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {useColorScheme} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import {MainTabNavigator} from './src/navigation';
import {store} from './src/redux';
import {lightTheme, darkTheme} from './src/theme';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const colorSheme = useColorScheme();
  return (
    <Provider store={store}>
      <PaperProvider theme={colorSheme === 'light' ? lightTheme : darkTheme}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Heroes"
              options={{headerShown: false}}
              component={MainTabNavigator}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

export default App;
