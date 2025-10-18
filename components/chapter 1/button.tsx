import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { ScreenContent } from "components/ScreenContent";
function Buttons() {
  return (
    <ScreenContent title="Home">
      <TouchableOpacity
        className="bg-blue-900 px-6 py-3 rounded-lg"
        onPress={() => alert("Button pressed!")}
      >
        <Text className="text-white text-lg font-bold">Click Me</Text>
      </TouchableOpacity>
    </ScreenContent>
  );
}

export default Buttons;
