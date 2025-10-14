import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

function SafeArea() {
    const [count, setCount] = useState(0);

    return (
        <SafeAreaView className="flex-1 bg-gradient-to-b from-blue-400 to-purple-600">
            {/* Header */}
            <View className="items-center pt-8 pb-6">
                <Text className="text-3xl font-bold text-white mb-2">
                    Counter App
                </Text>
                <Text className="text-lg text-blue-100">
                    Safe & Stylish Counting
                </Text>
            </View>

            {/* Main Content */}
            <View className="flex-1 items-center justify-center px-6">
                {/* Count Display */}
                <View className="bg-white/20 rounded-2xl p-8 mb-8 shadow-lg">
                    <Text className="text-4xl font-bold text-white text-center">
                        {count}
                    </Text>
                </View>

                {/* Buttons Container */}
                <View className="flex-row gap-4 mb-8">
                    <TouchableOpacity 
                        className="bg-red-400 px-6 py-4 rounded-xl shadow-lg active:bg-red-500"
                        onPress={() => setCount(count - 1)}
                    >
                        <Text className="text-white text-lg font-semibold">-</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                        className="bg-gray-200 px-6 py-4 rounded-xl shadow-lg active:bg-gray-300"
                        onPress={() => setCount(0)}
                    >
                        <Text className="text-gray-800 text-lg font-semibold">0</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                        className="bg-green-400 px-6 py-4 rounded-xl shadow-lg active:bg-green-500"
                        onPress={() => setCount(count + 1)}
                    >
                        <Text className="text-white text-lg font-semibold">+</Text>
                    </TouchableOpacity>
                </View>

                {/* Status Message */}
                <View className="bg-white/10 rounded-xl p-4">
                    <Text className="text-blue-100 text-center text-sm">
                        {count === 0 ? "Let's start counting! 🚀" : 
                         count > 0 ? "Going up! 📈" : "Going down! 📉"}
                    </Text>
                </View>
            </View>

            {/* Footer */}
            <View className="pb-6 px-6">
                <Text className="text-blue-200 text-center text-xs">
                    Safe Area Protected ✓
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default SafeArea;