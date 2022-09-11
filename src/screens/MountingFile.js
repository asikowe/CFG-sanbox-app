import React from 'react';
import { ImageBackground, StyleSheet, Text, View, StatusBar } from 'react-native';

var date = new Date().getDate(); //Current Date
var month = new Date().getMonth() + 1; //Current Month
var year = new Date().getFullYear(); //Current Year
var hours = new Date().getHours(); //Current Hours
var min = new Date().getMinutes(); //Current Minutes
var sec = new Date().getSeconds(); //Current Seconds

class SomeClass extends React.Component {
    constructor () {
        super()
        this.state ={val:0}
        this.update = this.update.bind(this)
    }
    update (){
        this.setState({val: this.state.val + 1})
    }
    componentDidMount(){
        console.log(date + '/' + month + '/' + year
            + ' ' + hours + ':' + min + ':' + sec + " component that mounted: SomeClass")
    }
    render (){
        return (
            <View style={styles.container1}>
                <StatusBar style="dark-content" backgroundColor="#000000" translucent={true} />
                <ImageBackground source={require('../../assets/road.jpg')} resizeMode='cover' style={styles.image}>
                    <View style={styles.container2}>
                        <Text style={styles.title1}>HI JOANNA</Text>
                        <Text style={styles.title2}>Mounted component!</Text>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container1: {
        flex: 1
    },
    container2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        flex: 1,
        justifyContent: 'center'
    },
    title1: {
        fontWeight: 'bold',
        color: '#e4e3d3',
        fontSize: 35,
        paddingVertical: 5,
        alignItems: 'center'
    },
    title2: {
        fontWeight: 'bold',
        color: '#e4e3d3',
        fontSize: 25,
        paddingVertical: 5,
        paddingBottom: 20,
        alignItems: 'center'
    }
});

export default SomeClass;