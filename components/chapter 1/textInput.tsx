import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

export default function TextInputs() {
  const [name, setName] = useState("");

  return (
    <View className="w-full bg-green-300 min-h-screen flex-1">
      <Text className="">Type Something</Text>
        <TextInput 
        className="bg-gray-200 pt-4 mt-6 me-[200px] pe-4 ms-4 px-5 py-2 w-[330px] rounded-lg shadow-lg placeholder:font-bold"
           placeholder="Enter something..."
           onChangeText={setName}
    
           />
           <Text>{name}</Text>
    </View>
  );
}
