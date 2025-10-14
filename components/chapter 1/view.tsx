import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Hello() {
   return( <View style={styles.container}>
        <Text>Top Box</Text>
        <View style={styles.box}>
            <Text>Inside Box</Text>
        </View>
        <Text>Bottom Box</Text>
    </View>
)}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  box: {
    padding: 20,
    margin: 10,
    backgroundColor: '#4caf50'
  }
})