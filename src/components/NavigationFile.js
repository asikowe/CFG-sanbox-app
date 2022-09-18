import Home from '../screens/Home'
import AnotherFile from '../screens/SomeFile';
import SomeClass from '../screens/MountingFile';
import ScreenToggling from '../screens/ToggleScreen';
import LoggingIn from '../screens/Login';
import Register from '../screens/Register';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from 'react-redux';

const Tab = createBottomTabNavigator();

export default function AppNavigation() {

    const isSignedIn = useSelector(state => state.isAuthenticated)

    return (
        <NavigationContainer>
            <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                backgroundColor: 'black',
                paddingTop: 0,
            },
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                    iconName = focused
                        ? 'home'
                        : 'home-outline';
                } else if (route.name === 'Space') {
                    iconName = focused ? 'planet' : 'planet-outline';
                } else if (route.name === 'State') {
                    iconName = focused ? 'bug' : 'bug-outline';
                } else if (route.name === 'Toggle') {
                    iconName = focused ? 'toggle' : 'toggle-outline';
                } else if (route.name === 'Log In') {
                    iconName = focused ? 'log-in' : 'log-in-outline';
                } else if (route.name === 'Register') {
                    iconName = focused ? 'newspaper' : 'newspaper-outline';
                }
                
                return <Ionicons name={iconName} size={size} color={color} />;
            },
                tabBarActiveTintColor: '#e4e3d3',
                tabBarInactiveTintColor: 'gray',
                tabBarHideOnKeyboard: true,

            })}>
                {isSignedIn ? (
                <>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Space" component={AnotherFile} />
                <Tab.Screen name="State" component={SomeClass} />
                <Tab.Screen name="Toggle" component={ScreenToggling} />
                </>
                ) : (
                <>
                    <Tab.Screen name="Log In" component={LoggingIn} />
                    <Tab.Screen name="Register" component={Register} />
                </>
                )}
            </Tab.Navigator>
        </NavigationContainer>
    );
};