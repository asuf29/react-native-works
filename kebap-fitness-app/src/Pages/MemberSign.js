import React, { useState } from 'react'
import { SafeAreaView, Alert } from 'react-native'
import Input from '../components/Input/Input';
import Button from '../components/Button'

function MemberSign() {
  const [userName, setUserName] = useState('');
  const [userSurname, setUserSurname] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userMail, setUserMail] = useState('');

  function handleSubmit() {

    if(!userName || !userSurname || !userAge || !userMail) {
      Alert.alert('Kebap Fitness', 'Bilgiler Boş Bırakılamaz');
    }
    const user = {
      userName,
      userSurname,
      userAge,
      userMail,
    };
    console.log(user);
  }

   return(
    <SafeAreaView>
      <Input label="Üye Adı" placeholder="Üyenin ismini giriniz..." onChangeText={setUserName} />
      <Input label="Üye Soyadı" placeholder="Üyenin soyadını giriniz..." onChangeText={setUserSurname} />
      <Input label="Üye Yaşı" placeholder="Üyenin yaşını giriniz..." onChangeText={setUserAge} />
      <Input label="Üye E-mail" placeholder="Üyenin e-mail adresini giriniz..." onChangeText={setUserMail} />
      <Button text="Kaydı Tamamla" onPress={handleSubmit}/>
    </SafeAreaView>
  );
}

export default MemberSign;