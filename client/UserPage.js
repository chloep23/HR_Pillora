import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import tw from "twrnc";
import { useFonts, LeagueSpartan_800ExtraBold} from '@expo-google-fonts/league-spartan';
import axios from 'axios';

export default function UserPage() {

    // Create a varaible that stores the user inpuut
    const [name, setName] = useState('');


    let [fontsLoaded] = useFonts({
        // 'spartanbold' : require("./assets/fonts/LeagueSpartan-ExtraBold.ttf") 
        LeagueSpartan_800ExtraBold,
    });
    

    return (
        <View className="flex flex-col h-screen w-screen mt-60 bg-blue">
            <Text className ="text-left font-spartanbold text-6xl ml-5 tracking-widest text-turqoise"> Welcome, </Text>
            <TextInput className="text-left font-spartanbold text-6xl tracking-widest text-turqoise" />
            
            <View className="flex flex-col left-0 right-0 mx-auto h-60 w-80 rounded-3xl shadow-xl items-center bg-white">
                <Text className="text-left font-spartanbold p-3 text-4xl text-turqoise"> Prescriptions </Text>
                <View className="flex flex-col space-y-4 w-full items-center">
                    <TouchableOpacity className="bg-white p-1 rounded">
                        <Text className="text-left font-spartanbold text-2xl text-turqoise"> Pill A </Text>
                        <Text className="text-left font-spartanbold text-blue"> Pill Type </Text>
                    </TouchableOpacity>
                    <View className="h-0.5 bg-turqoise w-full my-2"></View>
                    <TouchableOpacity className="bg-white p-1 rounded">
                        <Text className="text-left font-spartanbold text-2xl text-turqoise"> Pill B </Text>
                        <Text className="text-left font-spartanbold text-blue"> Pill Type </Text>
                    </TouchableOpacity>
                </View>

            </View>



        </View>

            
        
    );
};