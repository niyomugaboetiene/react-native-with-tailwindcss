import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import Profile from "./profile";
import 
const Tab = createBottomTabNavigator();

export default function Ints() {
    return (
        <View>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={}/>
            </Tab.Navigator>
        </View>
    )
}