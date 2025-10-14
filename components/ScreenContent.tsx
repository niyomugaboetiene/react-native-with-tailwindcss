import React from 'react';
import { Text, View } from 'react-native';
type ScreenContentProps = {
  title: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ title, children }: ScreenContentProps) => {
  return (
    <View className="flex-1 items-center justify-center bg-gray-50 p-4">
      <Text className="text-2xl font-bold text-purple-700">{title}</Text>
      <View className="h-[2px] w-4/5 bg-purple-300 my-6" />
      {children}
    </View>
  );
};
