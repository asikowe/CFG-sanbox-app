import { ImageBackground, StyleSheet, Text, View, StatusBar } from 'react-native';
import AppButton from '../components/Button';

export default function Home() {
    return (
        <View style={styles.container1}>
            <StatusBar style="dark-content" backgroundColor="#000000" translucent={true} />
            <ImageBackground source={require('../../assets/road.jpg')} resizeMode='cover' style={styles.image}>
                <View style={styles.container2}>
                    <Text style={styles.title1}>HI JOANNA</Text>
                    <Text style={styles.title2}>How was your day today?</Text>
                    <AppButton buttonText="Press me" />
                </View>
            </ImageBackground>
        </View>
    );
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
