import {
  Dimensions,
  SafeAreaView,
  Text,
  TouchableOpacity
} from "react-native"
import LottieView from "lottie-react-native"

import Scanner from "../../../assets/scanning.json"
import { commonStyles } from "../../styles/CommonStyles"


export default function Initial({ route, navigation }) {
  return (

    <SafeAreaView style={commonStyles.container}>

      <LottieView
        autoPlay
        style={{ heigth: Dimensions.get("screen").height * 0.5, width: "100%" }}
        source={Scanner}
      />

      <TouchableOpacity style={commonStyles.button} onPress={(() => { navigation.navigate("Register") })}>
        <Text style={commonStyles.buttonText}>Abrir conta gratuita</Text>
      </TouchableOpacity>

      <TouchableOpacity style={commonStyles.button} onPress={(() => { navigation.navigate("Login") })}>
        <Text style={commonStyles.buttonText}>Fazer login</Text>
      </TouchableOpacity>

    </SafeAreaView>

  )
}

