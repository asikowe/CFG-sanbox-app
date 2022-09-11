import { Switch, ThemeProvider, createTheme } from '@rneui/themed';
import { Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const theme = createTheme({
    components: {
        Switch: {
            translucent: true,
            transform: [{ scaleX: 3 }, { scaleY: 3 }],
            color: '#e4e3d3',
            raised: true,
            paddingBottom: 10,
        },
    },
});

export default function ToggleElement () {

    const [switchValue, setSwitchValue] = useState(false);

    const toggleSwitch = (value) => {
        setSwitchValue(value);
    };

    return (
        <ThemeProvider theme={theme}>
            <Switch
                value={switchValue}
                onValueChange={toggleSwitch}
            />
            <Text style={styles.textstyle}>{switchValue ? 'Switch is ON' : 'Switch is OFF'}</Text>
        </ThemeProvider>

    )
};

const styles = StyleSheet.create({
    textstyle: {
        fontWeight: 'bold',
        color: '#e4e3d3',
        fontSize: 25,
        paddingVertical: 5,
        paddingBottom: 20,
        alignItems: 'center'
    }
});