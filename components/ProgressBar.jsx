import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import TrackPlayer, { useProgress } from "react-native-track-player";
import formatTime from "../utils/formatTime";
import Slider from "@react-native-community/slider";

const ProgressBar = () => {
  const [sliderValue, setSliderValue] = useState(null);

  const handleSeek = async (value) => {
    setSliderValue(value);
    await TrackPlayer.seekTo(value);
  };

  const { duration, position } = useProgress(200);

  useEffect(() => {
    setSliderValue(position);
  }, [position]);

  return (
    <View className="flex flex-col w-full px-4">
      <View>
        <Slider
          style={{ width: 350, height: 40 }}
          tapToSeek
          thumbTintColor="gray"
          minimumValue={0}
          maximumValue={duration}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          value={sliderValue}
          onValueChange={handleSeek}
        />
      </View>
      <View className="flex flex-row justify-between">
        <Text className="text-white text-md">{formatTime(position)}</Text>
        <Text className="text-white text-md">{formatTime(duration)}</Text>
      </View>
    </View>
  );
};

export default ProgressBar;
