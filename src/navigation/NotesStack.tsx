import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NotesScreen from '../screens/NotesScreen';

const Stack = createStackNavigator();

const NotesStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="NotesScreen" component={NotesScreen} />
    </Stack.Navigator>
  );
};

export default NotesStack;