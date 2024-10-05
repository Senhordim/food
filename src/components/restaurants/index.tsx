import { FlatList } from 'react-native'
import {useState, useEffect } from 'react'
import { RestaurantItem } from './restaurant';

export interface RestaurantProps {
    id: string;
    name: string;
    image: string;
}

export function Restarants() {
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
        <FlatList 
            data={restaurants}
            renderItem={({ item }) => <RestaurantItem restaurant={item} />}
            horizontal={true}
            keyExtractor={item => item.id}
            contentContainerStyle={{ gap: 14, paddingHorizontal: 16 }}
            showsHorizontalScrollIndicator={false}
        />
    )
}