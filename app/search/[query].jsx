import { View, Text, FlatList, Image, StatusBar, Alert } from "react-native"
import React, { useEffect, useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { images } from "@/constants"
import SearchInput from "@/components/SearchInput"
import Trending from "@/components/Trending"
import EmptyState from "@/components/EmptyState"
import { searchVideos } from "@/lib/appwrite"
import useAppwrite from "@/lib/useAppwrite"
import VideoCard from "@/components/VideoCard"
import { useLocalSearchParams } from "expo-router"

const Search = () => {
  const { query } = useLocalSearchParams()

  const { data: videos, refetch } = useAppwrite(searchVideos(query))

  useEffect(() => {
    refetch()
  }, [query])

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={videos}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <VideoCard video={item} />}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">
                  Search Results
                </Text>
                <Text className="text-2xl text-white font-psemibold">
                  {query}
                </Text>
                <SearchInput />
              </View>
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="Oops! No videos have been created yet"
          />
        )}
      />
      <StatusBar backgroundColor="#161622" barStyle="light-content" />
    </SafeAreaView>
  )
}

export default Search
