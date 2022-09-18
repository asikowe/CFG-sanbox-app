import { ImageBackground, StyleSheet, Text, View, StatusBar } from 'react-native';
import AppButton from '../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../store/actions';

export default function Home({ navigation }) {

    const users = useSelector(state => state.user)

    const dispatch = useDispatch();

    const handleDispatch = user => {
        dispatch(logOut(user))
    }

    return (
        <View style={styles.container1}>
            <StatusBar style="dark-content" backgroundColor="#000000" translucent={true} />
            <ImageBackground source={require('../../assets/road.jpg')} resizeMode='cover' style={styles.image}>
                <View style={styles.container2}>
                    <Text style={styles.title1}>HI {users.username}</Text>
                    <Text style={styles.title2}>How was your day today?</Text>
                    <AppButton buttonText="Press me" onPress={() => navigation.navigate('Space')} />
                    <Text style={styles.title2}>Had enough?</Text>
                    <AppButton buttonText="Log out" onPress={handleDispatch} />
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
