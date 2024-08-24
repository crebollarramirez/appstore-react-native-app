// Import necessary components and libraries from React Native and Expo
import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

// Define the GradientButton component
export default function GradientButton(props) {
  return (
    <LinearGradient
      colors={['rgba(9, 181, 211, 0.9)', 'rgba(58, 131, 244, 0.9)']} // Gradient colors for the button background
      end={{ x: 1, y: 1 }} // Gradient direction end point (bottom-right corner)
      start={{ x: 0.1, y: 0.2 }} // Gradient direction start point (top-left corner)
      className={`rounded-full ${props.containerClass}`} // Apply rounded corners and additional container classes from props
    >
      <TouchableOpacity
        className={`p-3 px-4 ${props.buttonClass}`} // Apply padding and additional button classes from props
      >
        <Text className="text-white font-bold"> // Button text with white color and bold font
          {props.value} // Text value passed as a prop
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}
