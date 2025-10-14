import { View, Text, StyleSheet } from "react-native"
import React from "react"

export default function Styles() {
    return (
        <View style={ styles.container }>
            <View style={{ flex: 1, backgroundColor: "green" }}>Text Box 1</View>
            <View style={{ flex: 2, backgroundColor: "blue"}}>Text Box 2</View>
            <View style={{ flex: 3, backgroundColor: "red" }}>Text Box 3</View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //   flex: 1,
        //   flexDirection: 'row',
        //   justifyContent: 'space-around',
        //   alignItems: 'center',
        //   backgroundColor: '#eee'
        alignItems: 'center'
    },
    // box: {
    //     width: 80,
    //     height: 80,
    //     backgroundColor: "#4caf50",
    //     justifyContent: 'center',
    //     alignItems: 'center'  
    // },
    // container: {
    //     flex: 1,
    //     flexDirection: 'column',
    //     justifyContent: 'center',
    //     alignItems: 'center'
    // }
});