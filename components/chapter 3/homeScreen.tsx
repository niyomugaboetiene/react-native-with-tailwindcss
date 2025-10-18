import React from "react";
import { View, Text, Button } from "react-native";


export default function Home({ navigation }) {
    return (
        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
           <Text style={{ fontSize: 20 }}>Home Screen</Text>
           <Button 
              title="Go to Details" 
              onPress={() => navigation.navigate("Details")} />
        </View>
    )
}
