import { View, Text } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import VolumeBar from "../../../../components/VolumeBar";

export default function modal() {
  const coverArt = false;
  return (
    <View className="flex-1 flex-col bg-[#656564]">
      <View className="flex justify-center items-center">
        <MaterialIcons name="drag-handle" size={30} color="white" />
      </View>
      <View>
        {coverArt ? null : (
          <View className="flex justify-center items-center py-2 mt-20">
            <Fontisto name="applemusic" size={250} color="gray" />
          </View>
        )}
      </View>
      <View className="flex flex-row justify-between mt-8 px-4">
        <View className="flex flex-col w-[90%] justify-center">
          <Text className="text-white text-2xl">All too well</Text>
          <Text className="text-gray-200 text-md underline">Taylor Swift</Text>
        </View>
        <View className="p-2 rounded-full bg-[#818080]">
          <SimpleLineIcons name="options" size={24} color="white" />
        </View>
      </View>

      <View className="h-16"></View>

      <View className="flex flex-row justify-center items-center">
        <View className="flex flex-row gap-8">
          <MaterialIcons name="skip-previous" size={60} color="white" />
          <MaterialIcons name="play-arrow" size={60} color="white" />
          <MaterialIcons name="skip-next" size={60} color="white" />
        </View>
      </View>

        <View className="flex my-6 items-center">
          <VolumeBar />
        </View>

      <View className="flex flex-row justify-center items-center">
        <View className="flex flex-row gap-12">
          <FontAwesome6 name="closed-captioning" size={26} color="#818080" />
          <MaterialCommunityIcons
            name="headphones-bluetooth"
            size={40}
            color="#818080"
          />
          <Foundation name="list-bullet" size={26} color="#818080" />
        </View>
      </View>
    </View>
  );
}
