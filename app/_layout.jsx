//For indept tutorial on how to use the react native track player library, visit
//https://blog.logrocket.com/react-native-track-player-complete-guide/

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { registerRootComponent } from "expo";
import TrackPlayer from "react-native-track-player";
import {
  addTracks,
  playbackService,
  setupPlayer,
} from "../utils/trackPlayerServices";
import App from "./(tabs)";

TrackPlayer.registerPlaybackService(() => playbackService);
registerRootComponent(App);

const RootLayout = () => {
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  useEffect(() => {
    async function setup() {
      let isSetup = await setupPlayer();

      const queue = await TrackPlayer.getQueue();
      if (isSetup && queue.length <= 0) {
        await addTracks();
      }

      setIsPlayerReady(isSetup);
    }

    setup();
  }, []);

  if (!isPlayerReady) {
    //splashScreen
    
  }

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
