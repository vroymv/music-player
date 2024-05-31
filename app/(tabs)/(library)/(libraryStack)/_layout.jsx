import { View, Text } from 'react-native'
import React from 'react';
import { Stack } from 'expo-router';

const _layout = () => {
  return (
    <Stack
    >
        <Stack.Screen name = 'playlists' />
        <Stack.Screen name = 'artists' />
        <Stack.Screen name = 'albums' />
        <Stack.Screen name = 'songs' />
        <Stack.Screen name = 'genres' />
        <Stack.Screen name = 'composers' />
        <Stack.Screen name = 'downloaded' />
        <Stack.Screen name = "modal" 
        options={{
          presentation: 'modal',
          headerShown: false
        }}
         />
    </Stack>
  )
}

export default _layout