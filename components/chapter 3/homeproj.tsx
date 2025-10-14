// components/homeproj.tsx - FIXED
import { View, Text, TouchableOpacity } from "react-native";
export default function HomeProj() {
    const navigation = useNavigation();
    
    return (
        <View className="flex-1 justify-center items-center bg-white">
            <Text className="text-2xl font-bold mb-4">Home Screen</Text>
            <TouchableOpacity 
                className="bg-blue-500 px-6 py-3 rounded-lg"
                onPress={() => navigation.navigate('DetailsProj' as never)}
            >
                <Text className="text-white font-bold">Go to Details</Text>
            </TouchableOpacity>
        </View>
    );
}