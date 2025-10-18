// app/index.tsx
import { View, Text } from 'react-native';
import { Container } from '@/components/Container';
import { ScreenContent } from '@/components/ScreenContent';

export default function Home() {
  return (
    <View className="flex-1 bg-blue-300 items-center justify-center">
   
          <Text className="text-2xl font-bold mt-[30px] text-white">Home Screen</Text>
          <Text className="text-gray-600 border-2 border-gray-400 p-3 rounded-xl bg-gray-100 font-bold">Welcome to the home tab!</Text>
    
    </View>
  );
}