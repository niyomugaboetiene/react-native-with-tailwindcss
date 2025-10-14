// ? safeAreaView doesn't overlap with notches, status bar, or rounded corners iOS/Android 
import { View, Text, Button } from "react-native";
import React,{ useState } from "react";
function SafeArea() {
    const [count, setCount] = useState(0);
    return (
   <View className="h-screen bg-blue-200 flex flex-col items-center justify-center">
      <Text className="text-white text-2xl mb-4">Hello Full Screen!</Text>
      <Text className="text-white text-xl mb-4">{count}</Text>

      <Button title="+" onPress={() => setCount(count + 1)} />
      <Button title="0" onPress={() => setCount(0)} />
      <Button title="-" onPress={() => setCount(count - 1)} />
    </View>
    )
}


export default SafeArea;