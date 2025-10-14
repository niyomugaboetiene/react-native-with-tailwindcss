// ? safeAreaView doesn't overlap with notches, status bar, or rounded corners iOS/Android 
import { SafeAreaView, Text, Button } from "react-native";
import React,{ useState } from "react";
function SafeArea() {
    const [count, setCount] = useState(0);
    return (
        <SafeAreaView className="">
            <Text>Hello in safe area !</Text>
            <Text>{count}</Text>

            <Button 
              title="+"
              onPress={() => setCount(count + 1)}
               />
            <Button 
              title="0"
              onPress={() => setCount(0)}
               />
            <Button 
              title="-"
              onPress={() => setCount(count - 1)}
               />
        </SafeAreaView>
    )
}


export default SafeArea;