import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../styles/ToastStyles';



const Toast = () => {

    const [flexPos, setFlexPos] = React.useState(false);
    var flexPosition = null;
    var text = "Toast";
    if (flexPos === false){
        flexPosition = "flex-end";
        text = "You've moved the toast down";
    } else {
        flexPosition = "flex-start";
        text = "you've move the toast up";
    }

    return (
        <View style={[styles.bg, { justifyContent: flexPosition}]}>
          <TouchableOpacity
            style={styles.toastButton}
            onPress={() => 
            setFlexPos(!flexPos)
            }>
            <Text>{text}</Text>
          </TouchableOpacity>
         </View>
       );
    };
    

export default Toast;