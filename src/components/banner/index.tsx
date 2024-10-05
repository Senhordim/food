import { View, Text, Pressable, Image } from 'react-native'

import PagerView from 'react-native-pager-view';

export default function Banner() {
  return (
    <View className='w-full h-36 md:h-60 rounded-2xl mt-4 mb-4'>
        <PagerView style={{ flex: 1 }} initialPage={0} pageMargin={14}>
            <Pressable 
                className='w-full h-36 md:h-60 rounded-2xl' 
                key={1}
                onPress={() => alert('Banner 1')}
            >
                <Image 
                    source={require("../../assets/images/banner1.png")} 
                    className='w-full h-36 md:h-60 rounded-2xl' 
                />
            </Pressable>
            <Pressable 
                className='w-full h-36 md:h-60 rounded-2xl' 
                key={2}
                onPress={() => alert('Banner 2')}
            >
                <Image 
                    source={require("../../assets/images/banner2.png")} 
                    className='w-full h-36 md:h-60 rounded-2xl' 
                />
            </Pressable>
        </PagerView>
    </View>
  )
}