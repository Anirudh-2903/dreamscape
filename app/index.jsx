import {  Image, ScrollView, Text, View } from "react-native";
import {StatusBar} from 'expo-status-bar';
import { Link } from "expo-router";
import { useFonts } from 'expo-font';
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";


export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full" style={{flex: 1}}>
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <View className="h-full w-full items-center justify-center px-4">
          <Image source={images.logo} className="w-[300px] h-[100px]" resizeMode="contain" />
          <Image source={images.cards} className="max-w-[380px] w-full h-[300px]" resizeMode="contain" />
          <View className="relative mt-5">
            <Text className="text-center text-3xl font-bold text-white">Discover endless realms with {' '}
              <Text className="text-secondary-200">Dreamscape</Text>
            </Text>
            <Image source={images.path} className="absolute -bottom-6 right-16 w-[136px] h-[35px]" resizeMode="contain" />
          </View>
          <Text className="text-sm font-pregular text-gray-100 text-center mt-7">Where imagination meets innovation: embark on a voyage of endless exploration with Dreamscape</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}