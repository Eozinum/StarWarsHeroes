import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainTabNavigator} from './src/navigation';
import {store} from './src/redux';
import {Provider} from 'react-redux';
import {PaperProvider} from 'react-native-paper';
import {lightTheme, darkTheme} from './src/theme';
import {useColorScheme} from 'react-native';

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
