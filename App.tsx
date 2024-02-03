import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainTabNavigator} from './src/navigation';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  // const [liked, setLiked] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Heroes"
          options={{headerShown: false}}
          component={MainTabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
