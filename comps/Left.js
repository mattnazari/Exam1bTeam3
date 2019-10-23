import React, {useState} from 'react';
import {View, Text, Button, Image, TextInput} from 'react-native';
import styles from '../styles/LeftStyles';

function Left(){

  const [txt, setTxt] = useState(false);
  const [imgurl, setImgUrl] = useState('');
  const [butmsg, setButMsg] = useState("Set Image");

//https://www.dw.com/image/49202627_303.jpg

  return(

    <View style={styles.bg}>
      <Button
      style={styles.but}
      title={butmsg}
      onPress={()=>{
        if(txt === null){
          alert("Do not leave the text input blank!");
          setButMsg("Set Image")
        }else{
          setImgUrl(txt);
          setButMsg("Reset Image")
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
