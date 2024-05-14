import {  Image, ScrollView, Text, View } from "react-native";
import {StatusBar} from 'expo-status-bar';
import { Redirect,router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "@/components/CustomButton";
import { useGlobalContext } from "@/context/GlobalProvider";


export default function Welcome() {

  const {isLoggedIn,isLoading} = useGlobalContext();
  if(!isLoading && isLoggedIn) return <Redirect href="/home" />
  return (
    <SafeAreaView className="bg-primary h-full" style={{flex: 1}}>
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <View className="min-h-[87vh] w-full items-center justify-center px-4">
          <Image source={images.logo} className="w-[300px] h-[100px]" resizeMode="contain" />
          <Image source={images.cards} className="max-w-[380px] w-full h-[300px]" resizeMode="contain" />
          <View className="relative mt-5">
            <Text className="text-center text-3xl font-bold text-white">Discover endless realms with {' '}
              <Text className="text-secondary-200">Dreamscape</Text>
            </Text>
            <Image source={images.path} className="absolute -bottom-6 right-16 w-[136px] h-[35px]" resizeMode="contain" />
          </View>
          <Text className="text-sm font-pregular text-gray-100 text-center mt-7">Where imagination meets innovation: embark on a voyage of endless exploration with Dreamscape</Text>
          <CustomButton title="Continue with Email" handlePress={() => router.push('/sign-in')} containerStyles="w-full mt-7" />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}