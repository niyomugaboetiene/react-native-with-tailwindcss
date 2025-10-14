import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

export default function TextInputs() {
  const [name, setName] = useState("");

  return (
    <View>
        <TextInput 
           placeholder="Enter something..."
           onChangeText={setName}
    
           />
           <Text>{name}</Text>
    </View>
  );
}
