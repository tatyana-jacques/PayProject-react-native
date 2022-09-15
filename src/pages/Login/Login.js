import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet, 
    Text, 
    TextInput,
    TouchableOpacity } from "react-native"

import {commonStyles} from "../../styles/CommonStyles"
import {useState} from "react"

import image from "../../../assets/logoPay.png"

export default function Login ({navigation}) {
    const [CPF, setCPF] = useState("")
    const [password, setPassword] = ("")
   

    return (
        <SafeAreaView style = {commonStyles.container}>
            <StatusBar/>
            <ScrollView style={{flex:1, width:"100%"}}>
            <Image source = {image} style = {styles.image} resizeMode = "contain" />
            <TextInput 
            style = {commonStyles.input}
            placeholder = "CPF" 
            placeholderTextColor="#94d2bd"
            selectionColor = "#94d2bd"
            keyboardType = "number-pad"
            maxLength={11}
            value= {CPF}
            onChangeText={setCPF}
            />
             <TextInput 
            style = {commonStyles.input}
            placeholder = "Password" 
            placeholderTextColor="#94d2bd"
            selectionColor = "#94d2bd"
            secureTextEntry
            maxLength={11}
            value= {password}
            onChangeText={setPassword}
            />
            <TouchableOpacity style={commonStyles.button} >
            <Text style={commonStyles.buttonText}>Logar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress = {(() =>{navigation.navigate("Register")} )}>
          <Text style = {commonStyles.blueText}>Abrir conta gratuita</Text>
          </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
    image:{
        width:"80%",
        minHeight: 100,
        marginVertical:10,
        alignSelf: "center",
        
    }
   
})