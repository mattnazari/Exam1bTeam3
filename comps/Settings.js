import React, {useState} from "react";
import { View, TouchableOpacity, Image, Button, Text, Animated } from "react-native";
import styles from "../styles/SettingStyles";

const Settings = () => {
  const [showSettings, setShowSettings] = React.useState(true);
  // var h = null;
  var [slide] = useState(new Animated.Value(null));
  
  if (showSettings === true) {
    slide = "100%";
  } else {
    slide = "0%";
  }

  return (
    <View style={styles.bg}>
      <TouchableOpacity
        style={styles.gearButton}
        onPress={() => {
          setShowSettings(!showSettings);
        }}>
        <Image 
        style={styles.gear} 
        source={require("../gears.png")} />
      </TouchableOpacity>

      <Animated.View style={[styles.alertContainer, { height: slide}]}>
        <View style={styles.alert}>
          <Text style={styles.alertText}>Settings</Text>
          <Button
            title={"Close"}
            onPress={() => {
              setShowSettings(!showSettings);
              Animated.timing(
                slide,
                {
                    toValue:0,
                    duration:500
                }
            )
            }}
          />
        </View>
        </Animated.View>
    </View>
  );
};

export default Settings;
