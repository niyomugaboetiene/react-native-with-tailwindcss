import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

export default function TextInputs() {
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
        <TextInput 
           placeholder="Enter something..."
           onChangeText={setName}
           style={styles.input}
           />
           <Text style={styles.output}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#3b82f6',
    padding: 8,
    borderRadius: 8,
    marginBottom: 12,
    outlineColor: 'blue'
  },
  output: {
    color: '#2563eb',
    fontSize: 18
  }
})