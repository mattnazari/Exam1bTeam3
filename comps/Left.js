import React, {useState} from 'react';
import {View, Text, Button, Image, TextInput} from 'react-native';
import styles from '../styles/LeftStyles'

function Left(){

  const [txt, setTxt] = useState(null);
  const [imgurl, setImgUrl] = useState('https://www.dw.com/image/49202627_303.jpg');


  return(

    <View style={styles.bg}>
      <Button
      title="Set Image"
      onPress={()=>{
        if(txt === null){
          alert("Do not leave the text input blank!")
        }else{
          setImgUrl(txt)
        };
      }}
      />

      <TextInput
      placeholder="image url"
      onChangeText={text => setTxt(text)}
      value={txt}
      />

      <Text>Your URL is {txt}</Text>


      <Image
      style={styles.MainContainer}
        source={{uri:imgurl}}
        />
    </View>
  )
};

export default Left;
