import React, {useState} from 'react';
import {View, Text, Button, Image, TextInput} from 'react-native';

function Left(){

  const [txt, setTxt] = useState(null);
  const [imgurl, setImgUrl] = useState('');


  return(

    <View>
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
      placeholder="type url here"
      onChangeText={text => setTxt(text)}
      value={txt}
      />

      <Text>Your URL is {txt}</Text>


      <Image
        source={{setImgUrl:txt}}
        />
    </View>
  )
};

export default Left;
