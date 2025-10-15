import { useState } from "react"
import { View, Text, TextInput } from "react-native"
import { Button } from "react-native";

function Project() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState(""); 
    const [pressed, setPressed] = useState(false);
    return (
        <View>
            <Text>FIll out fo empy fields</Text>
           
            <Text>Name</Text>
            <TextInput 
              onChangeText={setName}
              placeholder="Type you name here"
              />

            <Text>Name</Text>
            <TextInput 
              onChangeText={setEmail}
              placeholder="Type you password here"
              />

            <Text>Name</Text>
            <TextInput 
              onChangeText={setPassword}
              placeholder="Type you password here"
              />

              <Button title="Submit"
                  onPress={() => setPressed(true)}
            />

            {pressed ? (
                <>
                   <Text>Hello you name is {name}</Text>
                   <Text>Password {name}</Text>
                </>
            ) : (

            )}
        </View>
    )
}