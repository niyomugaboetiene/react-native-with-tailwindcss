// components/detailsProj.tsx - FIXED
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function DetailsProj() {
    const navigation = useNavigation();
    
    return (
        <View className="flex-1 justify-center items-center bg-green-100">
            <Text className="text-2xl font-bold mb-4">Details Screen</Text>
            <TouchableOpacity 
                className="bg-green-500 px-6 py-3 rounded-lg"
                onPress={() => navigation.goBack()}
            >
                <Text className="text-white font-bold">Go Back</Text>
            </TouchableOpacity>
        </View>
    );
}