import React from 'react';
import {View} from 'react-native';
import Toast from './Toast';
import Right from './Right';
import Settings from './Settings';
import Left from './Left';

const Main = () => {

    return (
      <View style={{flex:1, flexDirection:'row'}}>
        <Left/>
        <Right/>
        <Toast />
        {/* <Settings/> stops the other comps from working
        because the image is in the comp and the comp itself takes
        100% of the screen */}
      </View>
    )
  };

  export default Main;
