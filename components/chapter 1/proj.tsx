import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native"
import { Button } from "react-native";

function Project() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState(""); 
    const [pressed, setPressed] = useState(false);
    return (
        <View className="bg-gray-400 min-h-screen w-full me-[180px]">
            <Text className="text-2xl font-bold text-white ms-10 mt-4">FIll out fo empy fields</Text>

            <View>
               <Text>Name</Text>
               <TextInput 
                   onChangeText={setName}
                   placeholder="Type you name here"
               />
            </View>
     

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

              <TouchableOpacity
              className="bg-blue-500 w-3"
                  onPress={() => setPressed(true)}
               >
                <Text>Submit</Text>
              </TouchableOpacity>

            {pressed ? (
                <>
                   <Text>Hello you name is {name}</Text>
                   <Text>Password {password}</Text>
                   <Text>Email {email}</Text>
                </>
            ) : (
                <Text>No you data appear here</Text>
            )}
        </View>
    )
}
export default Project