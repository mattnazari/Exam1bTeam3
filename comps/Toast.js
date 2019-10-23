import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../styles/ToastStyles';



const toast = () => {

    const [bt, setBut] = useState(1)
    
    var moveToast = null;
    
    if(bt ==1 ){
        moveToast = styles.moveDown
    }
    if(bt ==2){
        moveToast = styles.moveUp
    }
    
    return (
        <View style={styles.container}>
          <TouchableOpacity
            style={moveToast}
            onValueChange={(value) => {setBut(value)}}
            selectedValue={bt}
          >
            <Text style={styles.Text}> Toast </Text>
          </TouchableOpacity>
         </View>
       )
    
    };
  



export default toast;