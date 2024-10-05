
import {useState, useEffect} from 'react'
import { View, Text, FlatList } from 'react-native'
import { FoodItem } from './food'

export interface FoodProps {
    id: string;
    name: string;
    price: number;
    time: string;
    delivery: number;
    rating: number;
    image: string;
    restaurantId: string;
}

export function TrendingFoods() {
    const [foods, setFoods] = useState<FoodProps[]>([])

    useEffect(() => {
        async function getFoods() {
            const response = await fetch('https://afraid-tables-ask.loca.lt/foods')
            const data = await response.json()
            setFoods(data)
        }
        getFoods()
    }, [])
    return (
        <FlatList 
            data={foods}
            renderItem={({ item }) => <FoodItem food={item} />}
            horizontal={true}
            keyExtractor={item => item.id}
            contentContainerStyle={{ gap: 14, paddingHorizontal: 16 }}
            showsHorizontalScrollIndicator={false}
        />
    )
}