import { View, Text } from "react-native";
import { useState } from "react";
import Slider from "@react-native-community/slider";
import { Audio } from "expo-av";

const VolumeBar = () => {
  const [sliderValue, setSliderValue] = useState(0.5);

  const handleVolumeChange = async (value) => {
    // console.log(value);
    setSliderValue(value);
    const sound = new Audio.Sound();
    await sound.setVolumeAsync(value);
  };

  return (
    <Slider
      style={{ width: 350, height: 40 }}
      minimumValue={0}
      maximumValue={1}
      minimumTrackTintColor="#FFFFFF"
      maximumTrackTintColor="#000000"
      value={sliderValue}
      onValueChange={handleVolumeChange}
    />
  );
};

export default VolumeBar;
