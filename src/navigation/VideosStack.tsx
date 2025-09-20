import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import VideosScreen from '../screens/VideosScreen';

const Stack = createStackNavigator();

const VideosStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="VideosScreen" component={VideosScreen} />
    </Stack.Navigator>
  );
};

export default VideosStack;