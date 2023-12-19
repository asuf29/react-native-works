import React from 'react'
import { SafeAreaView } from 'react-native'
import Input from '../components/Input/Input';
import Button from '../components/Button'

function MemberSign() {
  return(
    <SafeAreaView>
      <Input label="Üye Adı" placeholder="Üyenin ismini giriniz..."/>
      <Input label="Üye Soyadı" placeholder="Üyenin soyadını giriniz..."/>
      <Input label="Üye Yaşı" placeholder="Üyenin yaşını giriniz..."/>
      <Input label="Üye E-mail" placeholder="Üyenin e-mail adresini giriniz..."/>
      <Button text="Kaydı Tamamla" onPress={null}/>
    </SafeAreaView>
  );
}

export default MemberSign;