// Import necessary components and libraries from React Native, Expo, and other modules.
import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowDownTrayIcon, HeartIcon } from 'react-native-heroicons/solid';
import { storeColors } from '../theme'; // Import theme colors
import StarRating from 'react-native-star-rating'; // Import StarRating component

// Define the GameCard component, which takes a `game` prop
export default function GameCard({ game }) {
  // State variable to track if the game is marked as a favorite
  const [isFavourite, setFavourite] = useState(false);

  return (
    <View className="mr-4 relative">
      {/* Display the game's image */}
      <Image source={game.image} className="w-80 h-60 rounded-3xl" />

      {/* LinearGradient overlay for styling */}
      <LinearGradient
        colors={['transparent', 'rgba(0, 0, 0, 0.6)']} // Gradient colors for the overlay
        className="absolute p-4 h-full w-full flex justify-between rounded-3xl"
      >
        {/* Top-right section for the favorite button */}
        <View className="flex-row justify-end">
          <TouchableOpacity
            onPress={() => setFavourite(!isFavourite)} // Toggle favorite status on press
            className="p-3 rounded-full"
            style={{ backgroundColor: 'rgba(255,255,255,0.3)' }}
          >
            <HeartIcon size="25" color={isFavourite ? storeColors.redHeart : 'white'} />
          </TouchableOpacity>
        </View>

        {/* Bottom section for game details */}
        <View className="space-y-1">
          {/* Star rating for the game */}
          <StarRating
            disabled={true} // Disable interaction with the rating
            starSize={15} // Size of each star
            containerStyle={{ width: 90 }} // Container style for the rating
            maxStars={5} // Maximum number of stars
            rating={game.stars} // Rating value for the game
            emptyStar={require('../assets/images/emptyStar.png')} // Image for empty stars
            fullStar={require('../assets/images/fullStar.png')} // Image for full stars
          />
          {/* Game title */}
          <Text className="text-xl font-bold text-gray-300">
            {game.title}
          </Text>
          {/* Download information */}
          <View className="flex-row items-center space-x-2">
            <ArrowDownTrayIcon size="18" color="lightgray" />
            <Text className="text-sm text-gray-300 font-semibold">
              {game.downloads} Downloads
            </Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}
