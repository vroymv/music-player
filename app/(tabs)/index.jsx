import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import SubscriptionCard from "../../components/SubscriptionCard";

const listenNow = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#000]">
      <ScrollView className="flex h-full flex-col">
        <View className="flex justify-between items-center flex-row">
          <Text className="text-white text-3xl">Listen Now</Text>
          <FontAwesome name="user-circle-o" size={30} color="#f92d47" />
        </View>
        <View>
          <SubscriptionCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default listenNow;
