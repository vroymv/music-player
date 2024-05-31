import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { useEffect, useLayoutEffect, useState } from "react";
import { useRouter, Link, useNavigation } from "expo-router";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { songs as Songs } from "../../../../constants";
import filter from "../../../../utils/filterSongs";
import TrackPlayer from "react-native-track-player";

// function SongsHeader() {

//   return (
//     <>
//       {/* <View className="bg-secondary flex flex-row justify-between rounded-xl py-2 px-3">
//         <View className="flex flex-row gap-2">
//           <Fontisto name="search" size={30} color="#727272" />
//           <TextInput
//             placeholder="Find in Playlists"
//             className="text-3xl text-[#727272]"
//           />
//         </View>
//         <FontAwesome6 name="microphone" size={30} color="#727272" />
//       </View> */}
//     </>
//   );
// }

export default function songs() {
  const [search, setsearch] = useState("");
  const [filteredSongs, setfilteredSongs] = useState(Songs);

  const navigation = useNavigation();
  const router = useRouter();

  function handleTypingSearch({ nativeEvent: { text } }) {
    setsearch(text);
    setfilteredSongs(filter(Songs, text));
  }

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerStyle: {
        backgroundColor: "#1c1c1c",
      },
      title: "Songs",
      headerLargeTitle: true,
      headerLargeStyle: {
        backgroundColor: "#000000",
      },
      headerTintColor: "#FFFFFF",
      headerTransparent: true,
      headerBlurEffect: "prominent",
      headerShadowVisible: false,
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => router.back()}
          className="flex flex-row"
        >
          <Ionicons name="chevron-back" size={30} color="#f92d46" />
          <Text className="text-tabBarActive text-2xl underline">Library</Text>
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View>
          <MaterialCommunityIcons name="sort" size={35} color="#f92d47" />
        </View>
      ),
    });
  }, [navigation]);

  //Loading up the tracks
  useEffect(() => {
    async function loadSongs() {
      try{
        await TrackPlayer.setupPlayer();
        await TrackPlayer.add(Songs);
        const tracks = await TrackPlayer.getQueue();
        return tracks;
      }
      catch(error){
        console.log(error)
      }
      
    }
    
    loadSongs();
    
  }, [Songs]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        onChangeText: handleTypingSearch,
        tintColor: "#ffffff",
        hideWhenScrolling: false,
        placeholder: "Find in Songs",
        icon: "search",
        value: { search },
        color: "#fff",
      },
    });
  }, [navigation]);

  return (
    <SafeAreaView className="flex-1 bg-primary">
      <FlatList
        contentInsetAdjustmentBehavior="automatic"
        data={filteredSongs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="flex flex-row justify-between items-center">
            <Link href={"/modal"} asChild>
              <TouchableOpacity className="flex flex-row gap-3">
                <Image
                  source={item.coverart}
                  className="h-16 w-16 rounded-xl"
                  resizeMode="contain"
                />
                <View className="flex flex-col">
                  <Text className="text-white text-2xl">{item.title}</Text>
                  <Text className="text-[#727272] text-lg">{item.artist}</Text>
                </View>
              </TouchableOpacity>
            </Link>
            <TouchableOpacity className="flex flex-row">
              <SimpleLineIcons name="options" size={24} color="white" />
            </TouchableOpacity>
          </View>
        )}
        ItemSeparatorComponent={() => (
          <View className="border-b border-[#323232] "></View>
        )}
        ListHeaderComponent={() => (
          <View>
            <View className="flex flex-row gap-3 mb-4 justify-center item-center ">
              <TouchableOpacity 
              onPress={() => TrackPlayer.play()}
               className="flex flex-1 flex-row gap-2 py-4 px-4 bg-secondary rounded-xl justify-center items-center">
                <FontAwesome name="play" size={30} color="#f92d47" />
                <Text className="text-tabBarActive text-3xl">Play</Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex flex-1 flex-row gap-2 py-4 px-4 bg-secondary rounded-xl justify-center items-center">
                <Ionicons name="shuffle" size={30} color="#f92d47" />
                <Text className="text-tabBarActive text-3xl">Shuffle</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        ListFooterComponent={() => (
          <View className="border-b ml-14 border-[#3d3c3c]"></View>
        )}
      />
    </SafeAreaView>
  );
}
