import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import { libraryIcons } from "../../../constants";
import { Link } from "expo-router";

function ListItem({ icon, name }) {
  const lname = name.toLowerCase();
  return (
    <Link href={`/(libraryStack)/${lname}`} asChild>
    <TouchableOpacity>
      <View className="flex flex-row my-4 pl-4">
        <View className="flex flex-row gap-3">
          <View>{icon}</View>
          <Text className="text-white text-3xl font-bold">{name}</Text>
        </View>
        <View className="flex-1 flex flex-row justify-end">
          <FontAwesome name="angle-right" size={35} color="#818181" />
        </View>
      </View>
    </TouchableOpacity>
    </Link>
  );
}

const index = () => {
  return (
    <SafeAreaView className="flex-1 bg-primary flex-col ">
      <View className="flex flex-row justify-end">
        <Text className="text-3xl text-[#f92d47] underline">Edit</Text>
      </View>

      <View className="flex flex-row justify-between items-center mt-3">
        <Text className="text-4xl text-white font-bold">Library</Text>
        <FontAwesome name="user-circle-o" size={35} color="#f92d47" />
      </View>

      <FlatList
        data={libraryIcons}
        renderItem={({ item }) => (
          <ListItem icon={item.icon} name={item.name} />
        )}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (
          <View className="border-b ml-14 border-[#3d3c3c]"></View>
        )}
        ListFooterComponent={() => (
          <View className="border-b ml-14 border-[#3d3c3c]"></View>
        )}
      />
    </SafeAreaView>
  );
};

export default index;
