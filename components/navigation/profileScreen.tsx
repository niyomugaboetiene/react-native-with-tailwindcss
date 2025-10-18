import React from "react";
import { View, Text, Image } from "react-native";

export default function ProfileScreen() {
  return (
    <View className="flex-1 bg-green-100 items-center justify-center">
      <Image
        className="w-24 h-24 rounded-full mb-3"
        source={{ uri: "https://i.pravatar.cc/150?img=3" }}
      />
      <Text className="text-2xl font-bold text-green-800 mb-1">
        Etiene Niyomugabo
      </Text>
      <Text className="text-gray-600 text-lg">Student | Developer</Text>
    </View>
  );
}
