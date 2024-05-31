import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { useEffect } from "react";
import { useNavigation, Link, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome6, FontAwesome, Fontisto } from "@expo/vector-icons";
import { Playlists } from "../../../../constants";

function ListItem({ icon, name }) {
  const lname = name.toLowerCase();
  return (
    <Link href={`/(libraryStack)/${lname}`} asChild>
      <TouchableOpacity>
        <View className="flex flex-row my-4 pl-2">
          <View className="flex flex-row gap-3">
            <Image
              source={icon}
              className="w-36 h-36 rounded-xl"
              resizeMethod="contain"
            />

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

function PlaylistsHeader() {
  const router = useRouter();
  return (
    <View className="flex w-full flex-col">
      <View className="flex  flex-row justify-between items-center pr-4 ">
        
        <TouchableOpacity 
          onPress={() => router.back()}
         className="flex flex-row items-center">
          <Ionicons name="chevron-back" size={35} color="#f92d47" />
          <Text className="text-tabBarActive text-3xl underline">Library</Text>
        </TouchableOpacity>
        
        <View>
          <MaterialCommunityIcons name="sort" size={35} color="#f92d47" />
        </View>
      </View>

      <View className="my-2">
        <Text className="text-white text-4xl font-bold ml-2">Playlists</Text>
      </View>

      <View className="bg-secondary flex flex-row ml-2 justify-between rounded-xl py-2 px-3">
        <View className="flex flex-row gap-2">
          <Fontisto name="search" size={30} color="#727272" />
          <TextInput
            placeholder="Find in Playlists"
            className="text-3xl text-[#727272]"
          />
        </View>
        <FontAwesome6 name="microphone" size={30} color="#727272" />
      </View>
    </View>
  );
}

const playlists = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  return (
    <SafeAreaView className="flex-1 bg-primary">
      <PlaylistsHeader />
      <FlatList
        data={Playlists}
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

export default playlists;
