import {StatusBar, SafeAreaView, Text, TouchableOpacity, Dimensions, StyleSheet } from "react-native"
import LottieView from "lottie-react-native"

import Scanner from "../../../assets/scanning.json"
import {commonStyles} from "../../styles/CommonStyles"


export default function Initial ({navigation}) {
    return (
        <SafeAreaView style = {commonStyles.container}>
            <StatusBar/>
          <LottieView
          autoPlay
          style={{heigth: Dimensions.get ("screen").height * 0.5, width: "100%"}}
          source={Scanner}
          />
          <TouchableOpacity style={commonStyles.button}>
            <Text style={commonStyles.buttonText}>Abrir conta gratuita</Text>
          </TouchableOpacity>
          <TouchableOpacity style={commonStyles.button} onPress = {(() =>{navigation.navigate("Login")} )}>
            <Text style={commonStyles.buttonText}>Fazer login</Text>
          </TouchableOpacity>
        </SafeAreaView>
    )
}

