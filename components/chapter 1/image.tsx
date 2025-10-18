import { Image, View } from "react-native";
// is used to display image on local or remote
export default function Images() {
    return (
        <View>
           <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png'}} 
              className="object-cover"     
           />
           {/* on local image */}
        {/* <Image source={require('../../assets/avataaars.jpg')} 
            style={{ width: 100, height: 100}}/> */}
        </View>
 
    )
}
