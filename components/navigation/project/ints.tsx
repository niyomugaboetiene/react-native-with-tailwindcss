import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";

import Profile from "./profile";
import Home from "../home";
import Settings from "./setting";

const Tab = createBottomTabNavigator();

export default function Ints() {
    return (
        <View>
            <Tab.Navigator
               screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: 'blue',
                tabBarInactiveBackgroundColor: 'gray',
                tabBarStyle: { backgroundColor: '#f8f8f8' },

               }}>
                <Tab.Screen name="Home" component={Profile} />
                <Tab.Screen name="Setting" component={Home} />
                <Tab.Screen name="Setting" component={Settings} />
            </Tab.Navigator>
        </View>
    )
}