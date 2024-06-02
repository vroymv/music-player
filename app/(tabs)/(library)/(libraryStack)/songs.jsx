import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useEffect, useLayoutEffect, useState } from "react";
import { useRouter, useNavigation } from "expo-router";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { songs as Songs } from "../../../../constants";
import filter from "../../../../utils/filterSongs";
import TrackPlayer, {
  useTrackPlayerEvents,
  Event,
  State,
} from "react-native-track-player";
import PlaylistItem from "../../../../components/PlaylistItem";

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
  const [queue, setQueue] = useState(Songs);
  const [currentTrack, setCurrentTrack] = useState(0);

  const navigation = useNavigation();
  const router = useRouter();

  async function loadPlaylist() {
    const queue = await TrackPlayer.getQueue();
    setQueue(queue);
  }

  useEffect(() => {
    loadPlaylist();
  }, []);

  function handleTypingSearch({ nativeEvent: { text } }) {
    setsearch(text);
    setQueue(filter(queue, text));
  }

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async (event) => {
    if (event.state == State.nextTrack) {
      let index = await TrackPlayer.getCurrentTrack();
      setCurrentTrack(index);
    }
  });


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
        data={queue}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <PlaylistItem item={item} index={index} iscurrent={currentTrack == index} />
        )}
        ItemSeparatorComponent={() => (
          <View className="border-b border-[#323232] "></View>
        )}
        ListHeaderComponent={() => (
          <View>
            <View className="flex flex-row gap-3 mb-4 justify-center item-center ">
              <TouchableOpacity
                onPress={() => TrackPlayer.play()}
                className="flex flex-1 flex-row gap-2 py-4 px-4 bg-secondary rounded-xl justify-center items-center"
              >
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
