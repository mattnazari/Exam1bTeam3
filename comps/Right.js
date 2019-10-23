import React, {useState} from 'react';
import {View, Text, Switch} from 'react-native';
import styles from '../styles/RightStyles';

function Right(){

    const [normalSwitch, setNormalSwitch] = useState(false);
    const [wideSwitch, setWideSwitch] = useState(false);
    const [widerSwitch, setWiderSwitch] = useState(false);
    const [widestSwitch, setWidestSwitch] = useState(false);
    const [flexGrowth, setFlexGrowth] = useState(1);

return (
    <View style={[styles.container, {flex:flexGrowth}]}>
        <View>
            <Text>Normal</Text>
            <Switch
                value={normalSwitch}
                onValueChange={()=>{
                    setNormalSwitch(true);
                    setWideSwitch(false);
                    setWiderSwitch(false);
                    setWidestSwitch(false);
                    setFlexGrowth(1);
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
                    setFlexGrowth(2);
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
                    setFlexGrowth(3);
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
                    setFlexGrowth(4);
                }}
            />
        </View>
    </View>
    );
};

export default Right;