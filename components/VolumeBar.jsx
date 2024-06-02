import { View, Text } from "react-native";
import { useState } from "react";
import Slider from "@react-native-community/slider";
import { Audio } from "expo-av";

const VolumeBar = () => {
  const [sliderValue, setSliderValue] = useState(0.03);

  const sound = new Audio.Sound();

  const handleVolumeChange = async (value) => {
    // console.log(value);
    setSliderValue(value);

    if (sound) {
      await sound.setVolumeAsync(value);
      const status = await Audio.getVolumeAsync();
      console.log(status);
    } else {
      console.log("No sound object");
    }
  };

  return (
    <View className="flex w-full px-4">
      <View>
        <Slider
          style={{ width: 350, height: 40 }}
          tapToSeek
          thumbTintColor="gray"
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          value={sliderValue}
          onValueChange={handleVolumeChange}
        />
      </View>
    </View>
  );
};

export default VolumeBar;
