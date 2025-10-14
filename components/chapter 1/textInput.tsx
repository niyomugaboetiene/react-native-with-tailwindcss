import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

export default function TextInputs() {
  const [name, setName] = useState("");

  return (
    <View className="w-full bg-green-300 min-h-screen flex-1">
        <TextInput 
        className="max-w-md justify-center items-ce"
           placeholder="Enter something..."
           onChangeText={setName}
    
           />
           <Text>{name}</Text>
    </View>
  );
}
