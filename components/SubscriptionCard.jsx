import { View, Text } from 'react-native'
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

const SubscriptionCard = () => {
  return (
    <View className="flex flex-col rounded-xl h-[65vh] bg-[#f33e5e] items-center pt-10 mt-3">
      <Text className="text-4xl text-white text-center">
        Get 1 month of free music.
      </Text>
      <Text className="text-7xl text-white mt-16">
        🍎 Music
      </Text>
      <Text className="text-3xl text-white mt-40">
        Try it Free <AntDesign name="rightcircle" size={24} color="black" />
      </Text>
      <Text className="text-2xl text-white">
      1 month free then 99.00/month.
      </Text>
    </View>
  )
}

export default SubscriptionCard