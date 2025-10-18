// app/index.tsx
import { View } from 'react-native';
import { Container } from '@/components/Container';
import { ScreenContent } from '@/components/ScreenContent';
import Interaction from '@/components/navigation/interaction';
import Buttons from '@/components/chapter 1/button';

export default function Home() {
  return (
    <View className="flex-1">
      <Container>
        <ScreenContent>
          {/* <Interaction /> */}
           <Buttons />
        </ScreenContent>
      </Container>
    </View>
  );
}
