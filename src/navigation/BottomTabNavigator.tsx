// src/navigation/BottomTabNavigator.tsx

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'; 

// Import your screen components
import HomeScreen from '../screens/HomeScreen';
import NotesScreen from '../screens/NotesScreen';
import VideosScreen from '../screens/VideosScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = '';
          
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Notes') {
            iconName = focused ? 'document-text' : 'document-text-outline';
          } else if (route.name === 'Videos') {
            iconName = focused ? 'videocam' : 'videocam-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#f8f8f8',
          borderTopWidth: 1,
          borderTopColor: '#e0e0e0',
          paddingBottom: 5,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
      })} 
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Notes" component={NotesScreen} />
      <Tab.Screen name="Videos" component={VideosScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;