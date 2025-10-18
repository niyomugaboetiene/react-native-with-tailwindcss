import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native"
import { Button } from "react-native";

function Project() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState(""); 
    const [pressed, setPressed] = useState(false);
    return (
        <View className="bg-gray-400 min-h-screen w-full me-[130px]">
            <Text className="text-2xl font-bold text-white ms-10 mt-4">FIll out fo empy fields</Text>

            <View className="mt-4 p-4 w-[75.5%]">
               <Text className="text-xl text-gray-500 font-bold">Name</Text>
               <TextInput 
                   className="py-3 bg-white rounded-lg shadow-2xl placeholder:font-bold"
                   onChangeText={setName}
                   placeholder="Type your name here"
               />
            </View>
     
           <View className="mt-[-15px] p-4 w-[75.5%]">
            <Text className="text-xl text-gray-500 font-bold">Email</Text>
              <TextInput 
                 className="py-3 bg-white rounded-lg shadow-2xl placeholder:font-bold"
                 onChangeText={setEmail}
                 placeholder="Type your password here"
              />
           </View>
      
          <View className="mt-[-15px] p-4 w-[75.5%]">
               <Text className="text-xl text-gray-500 font-bold">Name</Text>
               <TextInput 
                 className="py-3 bg-white rounded-lg shadow-2xl placeholder:font-bold"
                 onChangeText={setPassword}
                 placeholder="Type your password here"
                />
          </View>


              <TouchableOpacity
              className="bg-blue-400 w-[310px] px-4 py-3 ms-4 mt-4 rounded-xl active:bg-blue-500 shadow-xl"
                  onPress={() => setPressed(true)}
               >
                <Text className="text-center font-bold text-gray-800">Submit</Text>
              </TouchableOpacity>

           <View className="mt-4 ms-5">
              {pressed ? (
                   <>
                      <Text className="text-lg text-gray-700 font-light">Hello you name is: {name}</Text>
                      <Text className="text-lg text-gray-700 font-light">Password: {password}</Text>
                      <Text className="text-lg text-gray-700 font-light">Email: {email}</Text>
                   </>
               ) : (
                     <Text>No you data appear here</Text>
                )}
           </View>
   
        </View>
    )
}
export default Project