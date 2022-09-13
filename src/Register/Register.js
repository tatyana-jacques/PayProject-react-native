import {StatusBar, SafeAreaView, Text, TouchableOpacity, StyleSheet, Image, TextInput, ScrollView } from "react-native"
import {commonStyles} from "../Styles/CommonStyles"
import {useState} from "react"

export default function Register ({navigation}) {
    const [name, setName] = useState("")
    const [phone, setPhone] = ("")
    
    return (
        <SafeAreaView style = {commonStyles.container}>
            <StatusBar/>
            <ScrollView style={{flex:1, width:"100%"}}>
                <Text style = {commonStyles.title}>Nova Conta</Text>
                
                <Text style = {commonStyles.blueText}>Nome completo</Text>
            <TextInput 
            style = {commonStyles.input}
            selectionColor = "#94d2bd"
            maxLength={50}
            value= {name}
            onChangeText={setName}
            />
             <TextInput 
            style = {commonStyles.input}
            selectionColor = "#94d2bd"
            keyboardType = "number-pad"
            maxLength={11}
            value= {phone}
            onChangeText={setPhone}
            />
            <TouchableOpacity style={commonStyles.button} onPress = {(() =>{navigation.navigate("Login")} )}>
            <Text style={commonStyles.buttonText}>Logar</Text>
          </TouchableOpacity>
          <Text style = {commonStyles.blueText}>Abrir conta gratuita</Text>
          </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
    image:{
        width:"80%",
        minHeight: 100,
        marginVertical:10,
        alignSelf: "center"
    }
})