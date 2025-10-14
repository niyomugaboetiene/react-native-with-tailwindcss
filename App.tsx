import { ScreenContent } from 'components/ScreenContent';
import { StatusBar } from 'expo-status-bar';
import Buttons from 'components/chapter 1/button';

import './global.css';

export default function App() {
  return (
    <>
      <Buttons />
      <StatusBar style="auto" />
    </>
  );
}
