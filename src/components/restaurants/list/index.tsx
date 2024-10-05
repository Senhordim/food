import { View, Text } from 'react-native'
import {useState, useEffect} from 'react'
import { RestaurantProps } from '..'
import { RestaurantItemVertical } from '../restaurant'

export function RestaurantsList() {
    const [restaurants, setRestaurants] = useState<RestaurantProps[]>([])

    useEffect(() => {
        async function getRestaurants() {
            const response = await fetch('https://afraid-tables-ask.loca.lt/restaurants')
            const data = await response.json()
            setRestaurants(data)
        }
        getRestaurants()
    }, [])
    return (
    <View className='px-4 flex-1 w-full h-full mb-11 gap-4'>
       { restaurants.map((restaurant) => (
            <RestaurantItemVertical restaurant={restaurant} key={restaurant.id} />
        ))
       }
    </View>
    )
}