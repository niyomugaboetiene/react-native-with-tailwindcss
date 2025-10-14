import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

function SafeArea() {
    const [count, setCount] = useState(0);

    return (
        <SafeAreaView className="">
            <View className="">
                <Text className="">
                    Counter App
                </Text>
            
            </View>

            <View className="">
                <View className="">
                    <Text className="">
                        {count}
                    </Text>
                </View>

                <View className="">
                    <TouchableOpacity 
                        className=""
                        onPress={() => setCount(count - 1)}
                    >
                        <Text className="">-</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                        className=""
                        onPress={() => setCount(0)}
                    >
                        <Text className="">0</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                        className=""
                        onPress={() => setCount(count + 1)}
                    >
                        <Text className="">+</Text>
                    </TouchableOpacity>
                </View>

                <View className="">
                    <Text className="">
                        {count === 0 ? "Let's start counting! " : 
                         count > 0 ? "Going up! " : "Going down! "}
                    </Text>
                </View>
            </View>

            <View className="">
                <Text className="">
                    Safe Area Protected 
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default SafeArea;