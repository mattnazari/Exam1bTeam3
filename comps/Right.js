import React, {useState} from 'react';
import {View, Text, Switch} from 'react-native';
import styles from '../styles/RightStyles';

function Right(){

    const [normalSwitch, setNormalSwitch] = useState(false);
    const [wideSwitch, setWideSwitch] = useState(false);
    const [widerSwitch, setWiderSwitch] = useState(false);
    const [widestSwitch, setWidestSwitch] = useState(false);

return (
    <View style={[styles.container]}>
        <View>
            <Text>Normal</Text>
            <Switch
                value={normalSwitch}
                onValueChange={()=>{
                    setNormalSwitch(true);
                    setWideSwitch(false);
                    setWiderSwitch(false);
                    setWidestSwitch(false);
                }}
            />
        </View>

        <View>
            <Text>Wide</Text>
            <Switch
                value={wideSwitch}
                onValueChange={()=>{
                    setNormalSwitch(false);
                    setWideSwitch(true);
                    setWiderSwitch(false);
                    setWidestSwitch(false);
                }}
            />
        </View>

        <View>
            <Text>Wider</Text>
            <Switch
                value={widerSwitch}
                onValueChange={()=>{
                    setNormalSwitch(false);
                    setWideSwitch(false);
                    setWiderSwitch(true);
                    setWidestSwitch(false);
                }}
            />
        </View>

        <View>
            <Text>Widest</Text>
            <Switch
                value={widestSwitch}
                onValueChange={()=>{
                    setNormalSwitch(false);
                    setWideSwitch(false);
                    setWiderSwitch(false);
                    setWidestSwitch(true);
                }}
            />
        </View>
    </View>
    );
};

export default Right;