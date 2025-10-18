// app/index.tsx
import { View, Text } from 'react-native';
import { Container } from '@/components/Container';
import { ScreenContent } from '@/components/ScreenContent';

export default function Home() {
  return (
    <View className="flex-1 bg-white">
      <Container>
        <ScreenContent>
          <Text className="text-2xl font-bold">Home Screen</Text>
          <Text className="text-gray-600">Welcome to the home tab!</Text>
        </ScreenContent>
      </Container>
    </View>
  );
}