import React from "react";
import { Text, TouchableOpacity } from "react-native";
function Buttons() {
  return (
      <TouchableOpacity
        className="bg-blue-900 px-6 py-3 rounded-lg w-[200px] ms-[70px] mt-[30px]"
        onPress={() => alert("Button pressed!")}
      >
        <Text className="text-white text-lg font-bold text-center">Click Me</Text>
      </TouchableOpacity>
  );
}

export default Buttons;
