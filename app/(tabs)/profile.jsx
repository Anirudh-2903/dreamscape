import {
  View,
  FlatList,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import EmptyState from "@/components/EmptyState"
import { getUserVideos, signOut } from "@/lib/appwrite"
import useAppwrite from "@/lib/useAppwrite"
import VideoCard from "@/components/VideoCard"
import { useGlobalContext } from "@/context/GlobalProvider"
import { icons } from "@/constants"
import InfoBox from "@/components/InfoBox"
import { router } from "expo-router"

const Profile = () => {
  const { user, setUser, setIsLoggedIn } = useGlobalContext()
  const createdAt = new Date(user?.$createdAt).toLocaleDateString("en-gb", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const { data: videos } = useAppwrite(() => getUserVideos(user.$id))

  const logout = async () => {
    await signOut()
    setUser(null)
    setIsLoggedIn(false)
    router.replace("/sign-in")
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={videos}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <VideoCard video={item} />}
        ListHeaderComponent={() => (
          <View className="w-full justify-center items-center mt-6 mb-12 px-4">
            <TouchableOpacity
              className="w-full items-end mb-10"
              onPress={logout}
            >
              <Image
                source={icons.logout}
                className="w-6 h-6"
                resizeMode="contain"
              />
            </TouchableOpacity>
            <View className="w-16 h-16 border border-secondary rounded-lg justify-center items-center">
              <Image
                source={{ uri: user?.avatar }}
                className="w-[90%] h-[90%] rounded-lg"
                resizeMode="cover"
              />
            </View>
            <InfoBox
              title={user?.username}
              containerStyles="mt-5"
              titleStyles="text-lg"
            />
            <View className="mt-5 flex-row">
              <InfoBox
                title={videos.length || 0}
                subtitle="Videos"
                containerStyles="mr-10"
                titleStyles="text-xl"
              />
              <InfoBox
                title={createdAt}
                subtitle="Joined On"
                titleStyles="text-xl"
              />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="Oops! No videos found for this search topic"
          />
        )}
      />
      <StatusBar backgroundColor="#161622" barStyle="light-content" />
    </SafeAreaView>
  )
}

export default Profile
