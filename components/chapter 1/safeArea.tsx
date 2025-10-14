import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

function SafeArea() {
    const [count, setCount] = useState(0);

    return (
        <SafeAreaView className="flex-1 bg-blue-300 h-screen max-w-md p-14">
            <View className="items-center pt-8 pb-6">
                <Text className="text-3xl font-bold text-white mb-2">
                    Counter App
                </Text>
            
            </View>

            <View className="flex-1 items-center justify-center px-8">
                <View className="">
                    <Text className="font-bold text-2xl">
                        {count}
                    </Text>
                </View>

                <View className="flex flex-col space-x">
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