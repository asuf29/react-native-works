import React from 'react'
import { SafeAreaView , Text, StyleSheet} from 'react-native'
import Button from '../components/Button/Button';

function Welcome() {
  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Welcome</Text>
      <Button text="Üye Kaydı Oluştur" onPress={null}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
  },
});

export default Welcome;