import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { SimpleLineIcons } from "@expo/vector-icons";
import TrackPlayer from "react-native-track-player";

const PlaylistItem = ({ item, index, iscurrent }) => {

  function handleItemPress() {
    TrackPlayer.skip(index);
    TrackPlayer.play();
  }

  return (
    <View className={`flex flex-row justify-between items-center ${iscurrent? "bg-slate-500": null}`}>
      <Link href={"/modal"} asChild>
        <TouchableOpacity
          onPress={handleItemPress}
          className="flex flex-row gap-3"
        >
          <Image
            source={item.coverart}
            className="h-16 w-16 rounded-xl"
            resizeMode="contain"
          />
          <View className="flex flex-col">
            <Text className="text-white text-2xl">{item.title}</Text>
            <Text className="text-[#727272] text-lg">{item.artist}</Text>
          </View>
        </TouchableOpacity>
      </Link>
      <TouchableOpacity className="flex flex-row">
        <SimpleLineIcons name="options" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default PlaylistItem;
