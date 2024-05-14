import { icons } from '@/constants'
import { ResizeMode, Video } from 'expo-av'
import React, { useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, ImageBackground, Image } from 'react-native'
import * as Animatable from 'react-native-animatable'

const zoomIn = {
  0: {
    scale: 0.9,
  },
  1: {
    scale: 1.1,
  },
}

const zoomOut = {
  0: {
    scale: 1.1,
  },
  1: {
    scale: 0.9,
  },
}

const TrendingItem = ({ activeItem, item }) => {
  const [play, setPlay] = useState(false)
  return (
    <Animatable.View
    className="mr-5"
    animation={activeItem === item.$id ? zoomIn : zoomOut}
    duration={500}
    >
      {play ? (
        <Video
          source={{ uri: item.video }}
          className='w-52 h-72 rounded-[35px] mt-3 bg-white/10'
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          shouldPlay
          onPlaybackStatusUpdate={(status) => {
            if (status.didJustFinish) {
              setPlay(false)
            }
          }}
        />
      ) : (
        <TouchableOpacity className="relative flex justify-center items-center" activeOpacity={0.7} onPress={() => setPlay(true)}>
          <ImageBackground source={{uri: item.thumbnail}} className='w-52 h-72 rounded-[35px] my-5 overflow-hidden shadow-lg shadow-black/40' resizeMode='cover' />
          <Image source={icons.play} className="w-12 h-12 absolute" resizeMode="contain" />
        </TouchableOpacity>
      )}
    </Animatable.View>
  )

}

const Trending = ({videos}) => {
  const [activeItem, setActiveItem] = useState(videos[0]?.key)

  const viewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveItem(viewableItems[1]?.key)
    }
  }

  return (
    <FlatList
        data={videos}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <TrendingItem activeItem={activeItem} item={item} />
        )}
        horizontal
        onViewableItemsChanged={viewableItemsChanged}
        itemVisiblePercentThreshold={70}
        showsHorizontalScrollIndicator={false}
        contentOffset={{ x: 360 }}
    />
  )
}

export default Trending