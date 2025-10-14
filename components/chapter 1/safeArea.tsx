import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

function SafeArea() {
    const [count, setCount] = useState(0);

    return (
        <SafeAreaView className="flex-1 bg-blue-300 p-[54px]">
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
                        className="bg-red-400 px-6 py-4 rounded-xl shadow-lg active:bg-red-500"
                        onPress={() => setCount(count - 1)}
                    >
                        <Text className="text-gray-600 text-lg font-semibold">-</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                        className="bg-yellow-400 px-6 py-4 rounded-xl shadow-lg active:bg-yellow-500"
                        onPress={() => setCount(0)}
                    >
                        <Text className="text-gray-600 text-lg font-semibold">0</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                        className="bg-green-400 px-6 py-4 rounded-xl shadow-lg active:bg-green-500"
                        onPress={() => setCount(count + 1)}
                    >
                        <Text className="text-gray-600 text-lg font-semibold">+</Text>
                    </TouchableOpacity>
                </View>

                <View className="mt-4">
                    <Text className="font-semibold text-gray-500 italic">
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