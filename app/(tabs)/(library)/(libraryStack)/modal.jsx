import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import VolumeBar from "../../../../components/VolumeBar";
import TrackPlayer, {
  State,
  useTrackPlayerEvents,
  Event,
} from "react-native-track-player";
import ProgressBar from "../../../../components/ProgressBar";

export default function modal() {
  const [playing, setPlaying] = useState(true);
  const [trackInfo, setInfo] = useState({});
  // console.log(trackInfo);

  useEffect(() => {
    setTrackInfo();
  }, []);

  useTrackPlayerEvents([Event.PlaybackTrackChanged], (event) => {
    if (event.state == State.nextTrack) {
      setTrackInfo();
    }
  });

  async function setTrackInfo() {
    const track = await TrackPlayer.getCurrentTrack();
    const info = await TrackPlayer.getTrack(track);
    setInfo(info);
  }

  const coverArt = trackInfo.coverart;
  // console.log(coverArt);

  const handlePlayToggle = async () => {
    if ((await TrackPlayer.getState()) == State.Playing) {
      setPlaying(false);
      TrackPlayer.pause();
    } else {
      setPlaying(true);
      TrackPlayer.play();
    }
  };

  return (
    <View className="flex-1 flex-col bg-[#656564]">
      <View className="flex justify-center items-center">
        <MaterialIcons name="drag-handle" size={30} color="white" />
      </View>
      <View>
        {coverArt ? (
          <View className="flex justify-center items-center py-2 mt-20">
            <Image
              source={coverArt}
              className="h-[250px] w-[250px] rounded-xl"
              resizeMode="contain"
            />
          </View>
        ) : (
          <View className="flex justify-center items-center py-2 mt-20">
            <Fontisto name="applemusic" size={250} color="gray" />
          </View>
        )}
      </View>
      <View className="flex flex-row justify-between mt-8 px-4">
        <View className="flex flex-col w-[90%] justify-center">
          <Text className="text-white text-2xl">{trackInfo.title}</Text>
          <Text className="text-gray-200 text-md underline">
            {trackInfo.artist}
          </Text>
        </View>
        <View className="p-2 rounded-full bg-[#818080]">
          <SimpleLineIcons name="options" size={24} color="white" />
        </View>
      </View>

      <View className="h-16">
        <ProgressBar />
      </View>

      <View className="flex flex-row justify-center items-center">
        <View className="flex flex-row gap-8">
          <TouchableOpacity
            onPress={() => {
              TrackPlayer.skipToPrevious();
            }}
          >
            <MaterialIcons name="skip-previous" size={60} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePlayToggle}>
            <Ionicons
              name={playing ? "pause-circle" : "play-circle"}
              size={60}
              color="white"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              TrackPlayer.skipToNext();
            }}
          >
            <MaterialIcons name="skip-next" size={60} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <View className="h-16">
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
