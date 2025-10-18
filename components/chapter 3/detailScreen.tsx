import React from "react";
import { View, Text, Button } from "react-native";


export default function Details({ navigation }) {
  // navigation is prop that gives access to navigation methoods like .goBack(), .navigate, ..
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 20 }}>Details Screen</Text>
          <Text>Item ID: 1</Text>
          <Button title="Go Back" onPress={() => navigation.goBack()} />
        </View>
    );
}
