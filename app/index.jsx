import {  Text, View } from "react-native";
import {StatusBar} from 'expo-status-bar';
import { Link } from "expo-router";
import { useFonts } from 'expo-font';

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-3xl font-pblack">Dreamscape</Text>
      <StatusBar style="auto" />
      <Link href="/home" style={{color: 'blue'}}>Go to Home</Link>
    </View>
  );
}