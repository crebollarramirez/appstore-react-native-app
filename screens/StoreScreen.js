// Import necessary components and libraries from React Native, Expo, and other modules.
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowDownTrayIcon, Bars3CenterLeftIcon, BellIcon } from 'react-native-heroicons/solid';
import { storeColors } from '../theme'; // Import theme colors
import GradientButton from '../components/gradientButton'; // Import custom GradientButton component
import GameCard from '../components/gameCard'; // Import custom GameCard component

// Define categories and featured games data
const categories = ['Action', 'Family', 'Puzzle', 'Adventure', 'Racing', 'Education', 'Others'];
const featured = [
  {
    id: 1,
    title: 'Zooba',
    image: require('../assets/images/zooba.png'),
    downloads: '200k',
    stars: 4
  },
  {
    id: 2,
    title: 'Subway Surfer',
    image: require('../assets/images/subway.png'),
    downloads: '5M',
    stars: 4
  },
  {
    id: 3,
    title: 'Free Fire',
    image: require('../assets/images/freeFire.png'),
    downloads: '100M',
    stars: 3
  },
  {
    id: 4,
    title: "Alto's Adventure",
    image: require('../assets/images/altosAdventure.png'),
    downloads: '20k',
    stars: 4
  },
];

const games = [
  {
    id: 1,
    title: 'Shadow Fight',
    image: require('../assets/images/shadowFight.png'),
    downloads: '20M',
    stars: 4.5
  },
  {
    id: 2,
    title: 'Valor Arena',
    image: require('../assets/images/valorArena.png'),
    downloads: '10k',
    stars: 3.4
  },
  {
    id: 3,
    title: 'Frag',
    image: require('../assets/images/frag.png'),
    downloads: '80k',
    stars: 4.6
  },
  {
    id: 4,
    title: "Zooba Wildlife",
    image: require('../assets/images/zoobaGame.png'),
    downloads: '40k',
    stars: 3.5
  },
  {
    id: 5,
    title: "Clash of Clans",
    image: require('../assets/images/clashofclans.png'),
    downloads: '20k',
    stars: 4.2
  },
];

// Define the StoreScreen component
export default function StoreScreen() {
  // State variables for managing active category and selected game
  const [activeCategory, setActiveCategory] = useState('Action');
  const [selectedGame, setSelectedGame] = useState(null);

  return (
    <LinearGradient
      colors={['rgba(58, 131, 244, 0.4)', 'rgba(9, 181, 211, 0.4)']}
      className="w-full flex-1"
    >
      <SafeAreaView>
        <View className="container">
          {/* Header with icons */}
          <View className="flex-row justify-between items-center px-4">
            <Bars3CenterLeftIcon color={storeColors.text} size="30" />
            <BellIcon color={storeColors.text} size="30" />
          </View>

          {/* Categories section */}
          <View className="mt-3 space-y-4">
            <Text
              style={{ color: storeColors.text }}
              className="ml-4 text-3xl font-bold"
            >
              Browse Games
            </Text>
            <View className="pl-4">
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                  categories.map(cat => {
                    if (cat === activeCategory) {
                      // Render GradientButton for active category
                      return (
                        <GradientButton key={cat} containerClass="mr-2" value={cat} />
                      );
                    } else {
                      // Render TouchableOpacity for other categories
                      return (
                        <TouchableOpacity
                          onPress={() => setActiveCategory(cat)}
                          key={cat}
                          className="bg-blue-200 p-3 px-4 rounded-full mr-2"
                        >
                          <Text>{cat}</Text>
                        </TouchableOpacity>
                      );
                    }
                  })
                }
              </ScrollView>
            </View>
          </View>

          {/* Featured games section */}
          <View className="mt-3 space-y-4">
            <Text
              style={{ color: storeColors.text }}
              className="ml-4 text-lg font-bold"
            >
              Featured Games
            </Text>
            <View className="pl-4">
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                  featured.map((item, index) => (
                    <GameCard key={index} game={item} />
                  ))
                }
              </ScrollView>
            </View>
          </View>

          {/* Top action games list */}
          <View className="mt-3">
            <View className="flex-row justify-between items-center mb-2">
              <Text
                style={{ color: storeColors.text }}
                className="ml-4 text-lg font-bold"
              >
                Top Action Games
              </Text>
              <TouchableOpacity className="mr-4">
                <Text className="text-blue-600 font-bold">See All</Text>
              </TouchableOpacity>
            </View>
            <ScrollView style={{ height: 320 }} showsVerticalScrollIndicator={false}>
              {
                games.map((game, index) => {
                  // Highlight the selected game with a background color
                  let bg = game.id === selectedGame ? 'rgba(255,255,255,0.4)' : 'transparent';

                  return (
                    <TouchableOpacity
                      style={{ backgroundColor: bg }}
                      className="mx-4 p-2 mb-2 flex-row rounded-3xl"
                      onPress={() => setSelectedGame(game.id)}
                      key={index}
                    >
                      <Image
                        source={game.image}
                        style={{ width: 80, height: 80 }}
                        className="rounded-2xl"
                      />
                      <View className="flex-1 flex justify-center pl-3 space-y-3">
                        <Text style={{ color: storeColors.text }} className="font-semibold">
                          {game.title}
                        </Text>
                        <View className="flex-row space-x-3">
                          <View className="flex-row space-x-1">
                            <Image
                              className="h-4 w-4 opacity-80"
                              source={require('../assets/images/fullStar.png')}
                            />
                            <Text className="text-xs text-gray-700">
                              {game.stars} stars
                            </Text>
                          </View>
                          <View className="flex-row space-x-1">
                            <ArrowDownTrayIcon size="15" className="text-blue-500" />
                            <Text className="text-xs text-gray-700">
                              {game.downloads}
                            </Text>
                          </View>
                        </View>
                      </View>
                      <View className="flex justify-center items-center">
                        <GradientButton value="play" buttonClass="py-2 px-5" />
                      </View>
                    </TouchableOpacity>
                  );
                })
              }
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
