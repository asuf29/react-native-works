import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './Pages/Welcome';
import MemberSign from './Pages/MemberSign';
import MemberResult from './Pages/MemberResult';

function App() {
  const Stack = createNativeStackNavigator(); 

  return(
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="WelcomeScreen" component={Welcome} />
        <Stack.Screen name="MemberSignScreen" component={MemberSign} />
        <Stack.Screen name="MemberResultScreen" component={MemberResult} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 
export default App;