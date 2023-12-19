import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import Input from '../components/Input/Input';

function MemberSign() {
  return(
    <SafeAreaView>
      <Text>MemberSign</Text>
      <Input label="Üye Adı"/>
    </SafeAreaView>
  );
}

export default MemberSign;