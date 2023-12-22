import React from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'

function MemberResult({route}) {
  const {user} = route.params;

  return(
    <SafeAreaView>
      <Text style={styles.message}>Kayıt Tamamlandı!</Text>
      <Text style={styles.label}>Üye Adı: {user.userName}</Text>
      <Text style={styles.label}>Üye Soyadı: {user.userSurname}</Text>
      <Text style={styles.label}>Üye Yaşı: {user.userAge}</Text>
      <Text style={styles.label}>Üye E-mail: {user.userMail}</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  label: {
    fontWeight: '700',
    fontSize: 20,
    margin: 5,
  },
  message: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'green',
  },
});

export default MemberResult;