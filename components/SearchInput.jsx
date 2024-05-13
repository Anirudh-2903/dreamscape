import { View, Text, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { icons } from '@/constants'

const SearchInput = ({title,value,placeholder,handleChangeText,otherStyles, ...props}) => {
    const [showPassword, setShowPassword] = useState(false)
  return (
      <View className="border-2 border-black-200 w-full h-16 px-4 items-center flex-row rounded-2xl bg-black-100 focus:border-secondary space-x-4">
        <TextInput
            className='flex-1 text-white font-pregular text-base mt-0.5'
            value={value}
            placeholder={placeholder}
            placeholderTextColor="#7b7b8b"
            onChangeText={handleChangeText}
        />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Image source={icons.search} className='w-5 h-5' resizeMode='contain' />
            </TouchableOpacity>
      </View>
  )
}

export default SearchInput