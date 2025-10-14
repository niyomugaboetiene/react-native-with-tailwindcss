// * simple button with a click handler
import { Button, View,  } from "react-native";

function Buttons() {
   return (
       <View>
          <Button title="Click Me"
          className="bg-blue-500 "
             onPress={() => alert("Button pressed!")}
          />
       </View>
)
}


export default Buttons;