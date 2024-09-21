import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UserPage from './UserPage';
import { NavBar } from './components/NavBar';
import tw from 'twrnc';
import { useFonts, LeagueSpartan_800ExtraBold } from '@expo-google-fonts/league-spartan';


export default function App() {


  

  return (
    <View className="flex-1 justify-center items-center bg-blue">
      <UserPage />
      <Text className="text-xl font-spartan text-blue-500">Pilloraaaaaaa!!</Text>
    </View>
  );
}

