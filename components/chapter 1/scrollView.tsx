// * ScrollView allows you to scroll content vertically or horizontally
// from is used to create new array 
import { ScrollView, Text, View } from "react-native";

export default function Scroll() {
    return (
    <ScrollView
        style={{ padding: 20}}
    >
       {Array.from({ length: 20}).map((_, i) => (
        <Text key={i}>Item {i + 1}</Text>
       ))}

       {Array.from({ length: 50}).map((_, i) => (
        <View key={i} style={{ height: 50, backgroundColor: 'blue' }} />
       ))}
    </ScrollView>
)}