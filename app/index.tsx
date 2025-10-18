// app/index.tsx
import { View } from 'react-native';
import { Container } from '@/components/Container';
import { ScreenContent } from '@/components/ScreenContent';
import Interaction from '@/components/navigation/interaction';
import Buttons from '@/components/chapter 1/button';
import Project from '@/components/chapter 1/proj';
import Ints from '@/components/navigation/project/ints';

export default function Home() {
  return (
    <View className="flex-1">
      <Container>
        <ScreenContent>
          {/* <Interaction /> */}
          {/* <Project /> */}
           {/* <Buttons /> */}
           <Ints />
        </ScreenContent>
      </Container>
    </View>
  );
}
