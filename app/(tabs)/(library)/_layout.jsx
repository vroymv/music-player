import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack
        initialRouteName="library"
        screenOptions={{
            headerShown: false,
        }}
    >
        <Stack.Screen initialRouteName name="library" />
        <Stack.Screen name = "(libraryStack)" />
    </Stack>
  )
}

export default _layout