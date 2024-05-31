import { Stack, SplashScreen } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import TrackPlayer from "react-native-track-player";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  useEffect(() => {
    const setUpPlayer = async () => await TrackPlayer.setupPlayer();
    setUpPlayer();
    SplashScreen.hideAsync();
  }, []);

  return (
    <>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
      <StatusBar style="light" />
    </>
  );
};

export default RootLayout;
