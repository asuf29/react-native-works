import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstScreen from './Pages/FirstScreen' 
import SecondScreen from './Pages/SecondScreen'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='FirstScreen' component={FirstScreen}/>
        <Stack.Screen name='SecondScreen' component={SecondScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;