import React from "react";
import { View, Text } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-blue-100 items-center justify-center p-6">
      <Text className="text-2xl font-bold text-blue-700 mb-2">
        Welcome Home 🏡
      </Text>
      <Text className="text-gray-600 text-lg">This is your Home Screen</Text>
    </View>
  );
}
