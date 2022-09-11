import Home from './src/screens/Home';
import AnotherFile from './src/screens/SomeFile';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SomeClass from './src/screens/MountingFile'

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
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
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
            },
                tabBarActiveTintColor: '#e4e3d3',
                tabBarInactiveTintColor: 'gray',

            })}>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Space" component={AnotherFile} />
                <Tab.Screen name="State" component={SomeClass} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};