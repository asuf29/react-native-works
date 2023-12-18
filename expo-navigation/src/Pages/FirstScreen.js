import React from 'react'
import { SafeAreaView, Text, Button, StyleSheet} from 'react-native'

function FirstScreen(props) {
  console.log(props);
  
  function navigateToPage() {
    props.navigation.navigate('SecondScreen') 
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text_input}>FirstScreen</Text>
      <Button title='Go To Second Screen' onPress={navigateToPage}/>
    </SafeAreaView>
  )
}

export default FirstScreen;

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