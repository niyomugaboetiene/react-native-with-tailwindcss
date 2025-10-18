import { View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeProj from "./homeproj";
import DetailsProj from "./detailsProj";
import "../../global.css";
const Stack = createNativeStackNavigator();

export default function Interactions() {
    return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="HomeProj">
                    <Stack.Screen name="HomeProj" component={HomeProj} />
                    <Stack.Screen name="DetailsProj" component={DetailsProj} />
                </Stack.Navigator>
            </NavigationContainer>
    )
}