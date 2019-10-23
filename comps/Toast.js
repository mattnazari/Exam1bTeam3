import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../styles/ToastStyles';


const toast = () => {

    const [bt, setBut] = useState(1)
    
    var moveBut = null;
    
    if(bt ==1 ){
        move = styles.moveUp
    }
    if(bt ==2){
        moveToast = styles.moveDown
    }
    
    return (
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onValueChange={(value) => {setBut(value)}}
            selectedValue={bt}
          >
            <Text style={styles.Text}> Toast </Text>
          </TouchableOpacity>
         </View>
       )
    
    };
  



export default toast;