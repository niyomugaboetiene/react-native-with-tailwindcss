// app/index.tsx
import { View } from 'react-native';
import { Container } from '@/components/Container';
import { ScreenContent } from '@/components/ScreenContent';
import Interaction from '@/components/navigation/interaction';

export default function Home() {
  return (
    <View className="flex-1">
      <Container>
        <ScreenContent>
          <Interaction />
        </ScreenContent>
      </Container>
    </View>
  );
}
