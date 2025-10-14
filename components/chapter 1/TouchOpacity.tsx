import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Touch() {
    return (
        <TouchableOpacity
           style={style.button}
           onPress={() => alert("Pressed !")}
        >
            <Text style={style.text}>Press Me</Text>
        </TouchableOpacity>
)
}

const style = StyleSheet.create({
    button: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5
    },
    text: {
        color: 'white'
    }
})