import React from 'react';
import { Text, View } from 'react-native';
type ScreenContentProps = {
  title: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ title, children }: ScreenContentProps) => {
  return (
    <View>
      {children}
    </View>
  );
};
