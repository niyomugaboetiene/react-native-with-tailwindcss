// app/index.tsx
import { View, Text } from 'react-native';
import { Container } from '@/components/Container';
import { ScreenContent } from '@/components/ScreenContent';

export default function Home() {
  return (
    <View className="flex-1 bg-blue-300 items-center justify-center">
   
          <Text className="text-2xl font-bold mt-[30px] text-white">Home Screen</Text>
          <Text className="text-gray-600">Welcome to the home tab!</Text>
    
    </View>
  );
}