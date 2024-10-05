import { ScrollView, View } from "react-native";
import { Header } from "../components/header";

import Constants from "expo-constants";
import { Banner } from "../components/banner";
import { Search } from "../components/search";
import { Section } from "../components/section";
import { TrendingFoods } from "../components/trending";
import { Restarants } from "../components/restaurants";
import { RestaurantsList } from "../components/restaurants/list";

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView 
      style={{ flex: 1 }} 
      className="bg-slate-200"
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
        <Header />
        <Banner />
        <Search />
      </View>
      <Section 
          name="Comidas em alta"
          size="text-2xl"
          label="Veja todas"
          action={() => alert("Ver mais")}
        />
      <TrendingFoods />
      <Section 
          name="Famosos no DevFood"
          size="text-xl"
          label="Ver mais"
          action={() => alert("Ver mais")}
        />
      <Restarants />

      <Section 
          name="Restaurantes"
          size="text-xl"
          label="Ver mais"
          action={() => alert("Ver mais")}
        />

      <RestaurantsList />
     
    </ScrollView>
  );
}
