import React from 'react'
import { SafeAreaView, Text, Button } from 'react-native'

function FirstScreen() {
  return (
    <SafeAreaView>
      <Text>FirstScreen</Text>
      <Button title='Go To Second Screen' onPress={() => null}/>
    </SafeAreaView>
  )
}

export default FirstScreen;