import React from 'react'
import { SafeAreaView, Text } from 'react-native'

function MemberResult({route}) {
  console.log(route);
  
  return(
    <SafeAreaView>
      <Text>Üye Adı: </Text>
      <Text>Üye Soyadı: </Text>
      <Text>Üye Yaşı: </Text>
      <Text>Üye E-mail: </Text>
    </SafeAreaView>
  )
}

export default MemberResult;