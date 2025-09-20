import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

// Import navigators and screens
import BottomTabNavigator, { BottomTabParamList } from './BottomTabNavigator';
import AboutScreen from '../screens/AboutScreen';
import ContactUsScreen from '../screens/ContactUsScreen';

// Define types for drawer screens and params
export type DrawerParamList = {
  MainTabs: { screen: keyof BottomTabParamList } | undefined;
  About: undefined;
  ContactUs: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="MainTabs"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name="MainTabs"
        component={BottomTabNavigator}
        options={{
          drawerLabel: 'Home',
          drawerIcon: ({ color, size }) => (
            <Icon name="home-outline" size={size} color={color} />
          ),
        }}
        // 'Home' टैब को सक्रिय करता है
        initialParams={{ screen: 'Home' }}
      />
      <Drawer.Screen
        name="NotesDrawer"
        component={BottomTabNavigator}
        options={{
          drawerLabel: 'Notes',
          drawerIcon: ({ color, size }) => (
            <Icon name="document-text-outline" size={size} color={color} />
          ),
        }}
        initialParams={{ screen: 'Notes' }}
      />
      <Drawer.Screen
        name="VideosDrawer"
        component={BottomTabNavigator}
        options={{
          drawerLabel: 'Videos',
          drawerIcon: ({ color, size }) => (
            <Icon name="videocam-outline" size={size} color={color} />
          ),
        }}
        initialParams={{ screen: 'Videos' }}
      />

      {/* About और Contact Us को यहाँ, सबसे नीचे रखें */}
      <Drawer.Screen
        name="About"
        component={AboutScreen}
        options={{
          drawerLabel: 'About Us',
          drawerIcon: ({ color, size }) => (
            <Icon name="information-circle-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="ContactUs"
        component={ContactUsScreen}
        options={{
          drawerLabel: 'Contact Us',
          drawerIcon: ({ color, size }) => (
            <Icon name="call-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;