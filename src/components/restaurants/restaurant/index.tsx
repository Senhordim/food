import { View, Text, Pressable, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { RestaurantProps } from '..'

export function RestaurantItem({ restaurant }: { restaurant: RestaurantProps}) {
  return (
    <Pressable className='flex flex-col items-center justify-center'>
      <Image source={{ uri: restaurant.image }} 
        className='w-20 h-20 rounded-full'
      />
      <Text 
        className='text-sm mt-2 w-20 text-center leading-4 text-black' 
        numberOfLines={2}
      >
        {restaurant.name}
      </Text>
    </Pressable>
  )
}

export function RestaurantItemVertical({ restaurant }: { restaurant: RestaurantProps}) {
    return (
      <Pressable className='flex flex-row items-center justify-start gap-2'>
        <Image source={{ uri: restaurant.image }} 
          className='w-20 h-20 rounded-full'
        />
        <View className='flex gap-2'>
            <Text 
                className='text-base text-black leading-4 font-bold' 
                numberOfLines={2}
            >
                {restaurant.name}
            </Text>
            <View className='flex flex-row items-center justify-start gap-1'>
                <Ionicons name='star' size={14} color="#ca8a04" />
                <Text className='text-black text-sm'>4.5</Text>
            </View>
        </View>
        
      </Pressable>
    )
  }
