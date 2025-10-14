import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

function SafeArea() {
    const [count, setCount] = useState(0);

    return (
        <SafeAreaView className="flex-1 bg-blue-300 p-14">
            <View className="items-center pt-8">
                <Text className="text-3xl font-bold text-white mb-2">
                    Counter App
                </Text>
            
            </View>

            <View className="flex-1 items-center justify-center px-6">
                <View className="bg-white/20 rounded-2xl p-8 mb-8 shadow-lg">
                    <Text className="text-4xl font-bold text-white text-center">
                        {count}
                    </Text>
                </View>

                <View className="flex-row gap-4 mb-8">
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