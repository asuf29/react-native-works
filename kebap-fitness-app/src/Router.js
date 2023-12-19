import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './Pages/Welcome';

function App() {
  const Stack = createNativeStackNavigator(); 

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WelcomeScreen" component={Welcome}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;