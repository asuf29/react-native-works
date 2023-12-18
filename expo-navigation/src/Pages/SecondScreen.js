import React from 'react'
import { SafeAreaView, Text, StyleSheet, Button} from 'react-native'

function SecondScreen(props) {
  function navigateToPage() {
    props.navigation.navigate('FirstScreen') 
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text_input}>Second Screen</Text>
      <Button title='Go To First Screen' onPress={navigateToPage}/>
    </SafeAreaView>
  )
}

export default SecondScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_input: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'black',
    margin: 10,
    padding: 10,
  },
})