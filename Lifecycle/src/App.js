import React, { useEffect, useState } from 'react';
import { Button, SafeAreaView, Text, View } from 'react-native';

function App() {
  const [helloFlag, setHelloFlag] = useState(true);

  function updateFlag() {
    setHelloFlag(!helloFlag);
  }
  return (
    <SafeAreaView>
      <Text>Hello Lifecycle</Text>
      <Button title='Up!' onPress={updateFlag} />
      {helloFlag && <Hello />}
    </SafeAreaView>
  )
}

export default App;

function Hello() {
  useEffect(() => {
    console.log('Hello World!');

    return () => {
      console.log('Gidiyorum bütün aşklar yüreğimde..');
    };
  }, []);
  return(
    <View style={{backgroundColor: 'green', padding: 10}}>
      <Text>I'm Hello Component</Text>
    </View>
  );
}