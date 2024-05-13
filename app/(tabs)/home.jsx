import { View, Text, FlatList, Image, StatusBar, RefreshControl } from "react-native"
import React, { useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { images } from "@/constants"
import SearchInput from "@/components/SearchInput"
import Trending from "@/components/Trending"
import EmptyState from "@/components/EmptyState"
import { useGlobalContext } from "@/context/GlobalProvider"

const Home = () => {
  const { user } = useGlobalContext();
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = async () => {
    setRefreshing(true)
    // refresh to see newer videos
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={[
          { $id: "1", id: "First" },
          { $id: "2", id: "Second" },
          { $id: "3", id: "Third" },
          { $id: "4", id: "Fourth" },
          { $id: "5", id: "Fifth" },
          { $id: "6", id: "Sixth" },
          { $id: "7", id: "Seventh" },
          { $id: "8", id: "Eighth" },
          { $id: "9", id: "Ninth" },
          { $id: "10", id: "Tenth" },
        ]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
            <Text className="text-3xl text-white">{item.id}</Text>
        )}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">
                  Welcome Back
                </Text>
                <Text className="text-2xl text-white font-psemibold">
                  {user.username}
                </Text>
              </View>
              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  className="w-12 h-12"
                  resizeMode="contain"
                />
              </View>
            </View>
            <SearchInput placeholder="Search for a video topic"/>
            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-gray-100 text-lg mb-3 font-pregular">Latest Videos</Text>
              <Trending posts={[
                { $id: "1", id: "A" },
                { $id: "2", id: "B" },
                { $id: "3", id: "C" },
                { $id: "4", id: "D" },
                { $id: "5", id: "E" },
                { $id: "6", id: "F" },
                { $id: "7", id: "G" },
                { $id: "8", id: "H" },
                { $id: "9", id: "I" },
                { $id: "10", id: "J" },
              ]} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="Oops! No videos have been created yet"
          />
        )}
        refreshControl={<RefreshControl />}
      />
      <StatusBar backgroundColor="#161622" barStyle="light-content" />
    </SafeAreaView>
  )
}

export default Home
