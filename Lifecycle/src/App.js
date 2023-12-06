import React, { useEffect, useState } from 'react';
import { Button, SafeAreaView, Text } from 'react-native';

function App() {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(100);

  useEffect(() => {
    console.log('number updated.. ');
  }, [number]);

  useEffect(() => {
    console.log('counter updated.. ');
  }, [counter]);

  useEffect(() => {
    console.log('Mounting..');
  },[]);

  return (
    <SafeAreaView>
      <Text>Hello Lifecycle</Text>
      <Text>Number {number}</Text>
      <Text>Counter {counter}</Text>
      <Button title='Up!' onPress={() => setNumber(number + 1)} />
      <Button title='Update Counter!' onPress={() => setCounter(counter + 100)} />
    </SafeAreaView>
  )
}

export default App;