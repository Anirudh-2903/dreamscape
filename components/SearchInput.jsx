import { View, Text, TextInput, Image, Alert } from "react-native"
import React, { useState } from "react"
import { TouchableOpacity } from "react-native"
import { icons } from "@/constants"
import { router, usePathname } from "expo-router"

const SearchInput = ({ initialQuery }) => {
  const pathname = usePathname()
  const [query, setQuery] = useState(initialQuery || "")


  return (
    <View className="border-2 border-black-200 w-full h-16 px-4 items-center flex-row rounded-2xl bg-black-100 focus:border-secondary space-x-4">
      <TextInput
        className="flex-1 text-white font-pregular text-base mt-0.5"
        value={query}
        placeholder="Search for a video topic"
        placeholderTextColor="#cdcde0"
        onChangeText={(e) => setQuery(e)}
      />
      <TouchableOpacity onPress={() => {
        if(!query) return Alert.alert("Missing Topic","Please enter a search topic")

        if(pathname === "/search") return router.setParams({ query })
        else router.push(`/search/${query}`)
      }}>
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  )
}

export default SearchInput
