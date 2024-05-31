import React from "react";
import { Tabs } from "expo-router";
import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

function TabIcon({ icon, focused }) {
  return (
    <View className="">
      <View>{icon}</View>
    </View>
  );
}

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#f92d47",
        tabBarInactiveTintColor: "#818181",
        tabBarLabelStyle: {
          fontSize: 12,
        },
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 2,
          borderTopColor: "#000000",
          backgroundColor: "#1c1c1c",
          paddingTop: 10,
          height: 100,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Listen Now",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={
                <AntDesign
                  name="play"
                  size={30}
                  color={focused ? "#f92d47" : "#818181"}
                />
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="browse"
        options={{
          title: "Browse",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={
                <Ionicons
                  name="grid"
                  size={30}
                  color={focused ? "#f92d47" : "#818181"}
                />
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="radio"
        options={{
          title: "Radio",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={
                <Ionicons
                  name="radio"
                  size={30}
                  color={focused ? "#f92d47" : "#818181"}
                />
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(library)"
        options={{
          title: "Library",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={
                <Fontisto
                  name="applemusic"
                  size={30}
                  color={focused ? "#f92d47" : "#818181"}
                />
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={
                <Feather
                  name="search"
                  size={30}
                  color={focused ? "#f92d47" : "#818181"}
                />
              }
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
