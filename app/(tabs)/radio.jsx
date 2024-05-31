import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react';
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';


const radio = () => {
  return (
    <SafeAreaView className="flex-1 bg-primary">
      <ScrollView className="flex flex-col">
      <View className="flex felx-col bg-[#f33e5e] w-full items-center rounded-xl px-5 py-2">
        <Text className="text-2xl text-white">🍎Music</Text>
        <Text className="text-white text-lg">Get 1 Month Free</Text>
      </View>

      <View className="flex flex-row justify-between mt-3 items-center">
        <Text className="text-4xl text-white">Radio</Text>
        <FontAwesome name="user-circle-o" size={30} color="#f92d47" />
      </View>

      <View className="flex flex-row justify-between mt-3">
        <View className="flex flex-col">
        <Text className="text-xl text-white">🍎Music 1</Text>
        <Text className="text-[#818181] text-lg">The new music that matters</Text>
        </View>
        <View className="bg-[#1c1c1c] p-4 rounded-full">
        <AntDesign name="calendar" size={30} color="#f92d47" />
        </View>
        
      </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default radio