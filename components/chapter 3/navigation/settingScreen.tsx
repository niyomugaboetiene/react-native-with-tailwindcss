import React from "react";
import { View, Text } from "react-native";

export default function SettingScreen() {
  return (
    <View className="flex-1 bg-blue-300 items-center justify-center p-4">
      <Text className="text-2xl font-semibold text-white mb-2">
        Settings ⚙️
      </Text>
      <Text className="text-white text-lg opacity-90">
        Manage your preferences here
      </Text>
    </View>
  );
}
