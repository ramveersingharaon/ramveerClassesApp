// src/navigation/DrawerNavigator.tsx

import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, View, Text } from 'react-native';

// Import all screens and navigators
import BottomTabNavigator from './BottomTabNavigator';
import AboutScreen from '../screens/AboutScreen';
import ContactUsScreen from '../screens/ContactUsScreen';
// Login and Dashboard screens (if you use them)
// import LoginPage from '../screens/LoginPage';
// import DashboardPage from '../screens/DashboardPage';

// Define types for drawer screens and params
export type DrawerParamList = {
  Tabs: undefined;
  About: undefined;
  ContactUs: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

// Custom Drawer Content Component
const CustomDrawerContent = (props: any) => {
    const { state, navigation } = props;
    const focusedRoute = state.routes[state.index];
    const focusedScreen = getFocusedRouteNameFromRoute(focusedRoute) || focusedRoute.name;

    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.drawerHeader}>
                <Text style={styles.drawerHeaderText}>Ramveer Classes</Text>
            </View>

            {/* Home, Notes, Videos items */}
            <DrawerItem
                label="Home"
                icon={({ color, size }) => <Icon name="home-outline" color={color} size={size} />}
                onPress={() => navigation.navigate('Tabs', { screen: 'Home' })}
                focused={focusedScreen === 'Home'}
            />
            <DrawerItem
                label="Notes"
                icon={({ color, size }) => <Icon name="document-text-outline" color={color} size={size} />}
                onPress={() => navigation.navigate('Tabs', { screen: 'Notes' })}
                focused={focusedScreen === 'Notes'}
            />
            <DrawerItem
                label="Videos"
                icon={({ color, size }) => <Icon name="videocam-outline" color={color} size={size} />}
                onPress={() => navigation.navigate('Tabs', { screen: 'Videos' })}
                focused={focusedScreen === 'Videos'}
            />
            
            {/* About and Contact Us items */}
            <DrawerItem
                label="About"
                icon={({ color, size }) => <Icon name="information-circle-outline" color={color} size={size} />}
                onPress={() => navigation.navigate('About')}
                focused={focusedScreen === 'About'}
            />
            <DrawerItem
                label="Contact Us"
                icon={({ color, size }) => <Icon name="call-outline" color={color} size={size} />}
                onPress={() => navigation.navigate('ContactUs')}
                focused={focusedScreen === 'ContactUs'}
            />
        </DrawerContentScrollView>
    );
};

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Tabs"
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Drawer.Screen
                name="Tabs"
                component={BottomTabNavigator}
                options={{
                    headerShown: false, // बॉटम टैब में हेडर पहले से ही हटा दिया गया है
                }}
            />
            <Drawer.Screen
                name="About"
                component={AboutScreen}
            />
            <Drawer.Screen
                name="ContactUs"
                component={ContactUsScreen}
            />
        </Drawer.Navigator>
    );
};

const styles = StyleSheet.create({
    drawerHeader: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    drawerHeaderText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default DrawerNavigator;