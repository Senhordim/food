import { View, Text, Pressable } from 'react-native'

interface SectionProps {
    name: string;
    size: "text-lg" | "text-xl" | "text-2xl";
    label: string;
    action: () => void;
}

export function Section({ name, size, label, action }: SectionProps) {
  return (
    <View className='w-full h-16 flex flex-row items-center justify-between px-4'>
      <Text 
        className={`${size} text-black font-semibold my-4 self-start`}
      >{name}</Text>
      <Pressable
        onPress={action}
      >
        <Text className='text-black'>{label}</Text>
      </Pressable>
    </View>
  )
}