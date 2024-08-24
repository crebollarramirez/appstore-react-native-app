// Import necessary components and libraries from React Native, React Navigation, and project files
import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Import NavigationContainer for managing navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Import createNativeStackNavigator for stack-based navigation
import HomeScreen from '../screens/HomeScreen'; // Import the HomeScreen component
import StoreScreen from '../screens/StoreScreen'; // Import the StoreScreen component

// Create a stack navigator instance
const Stack = createNativeStackNavigator();

// Define the AppNavigation component
export default function AppNavigation() {
  return (
    <NavigationContainer> // Provide navigation context to the application
      <Stack.Navigator initialRouteName='Store'> // Define the stack navigator and set initial route
        {/* Home Screen - Not shown in the header */}
        <Stack.Screen
          name="Home" // Route name for HomeScreen
          options={{ headerShown: false }} // Hide the header for this screen
          component={HomeScreen} // Component to render for this route
        />
        {/* Store Screen - Not shown in the header */}
        <Stack.Screen
          name="Store" // Route name for StoreScreen
          options={{ headerShown: false }} // Hide the header for this screen
          component={StoreScreen} // Component to render for this route
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
