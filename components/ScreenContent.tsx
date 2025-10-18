// components/ScreenContent.tsx
import React from 'react';
import { View } from 'react-native';

type ScreenContentProps = {
  children?: React.ReactNode;
};

export const ScreenContent = ({ children }: ScreenContentProps) => {
  return (
    <View className="flex-1 w-full">
      {children}
    </View>
  );
};