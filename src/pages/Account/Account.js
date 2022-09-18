import AsyncStorage from "@react-native-async-storage/async-storage"
import {
    Dimensions,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native"
import { API } from "../../services/Services"
import { commonStyles } from "../../styles/CommonStyles"
import { useState, useEffect } from "react"


export default function Terms({ route, navigation }) {

    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")
    const [contact, setContact] = useState("")
    const [RG, setRG] = useState("")


    useEffect(() => {
        if (id)
        {
        fetch(API + "/users?id=" + id)
            .then(async (response) => {
                const data = await response.json()
                setName(data[0].fullname)
                setCpf(data[0].cpf)
                setContact(data[0].contact)
                setRG(data[0].number_rg)

            })
            .catch(() => Alert.alert("Erro no carregamento dos dados."))}

    }, [id])


    const getId = async () => {
            const value = await AsyncStorage.getItem("@pay_app:id_result")
            const parseValue = JSON.parse(value)
            setId(parseValue)
         
}

    getId()
  

    return (
        <SafeAreaView style={commonStyles.container}>
            <StatusBar />
            <ScrollView style={{ flex: 1, width: "100%" }}>

                <Text style={commonStyles.title}>Dados da conta</Text>

                <View style = {styles.view}>

                <View style = {styles.textView}> 
                <Text style={styles.blueText}>Nome: {name}</Text>
                <Text style={styles.blueText}>CPF: {cpf}</Text>
                <Text style={styles.blueText}>Telefone: {contact}</Text>
                <Text style={styles.blueText}>RG: {RG}</Text>
                </View> 
                <TouchableOpacity style={commonStyles.button} onPress={(() => { navigation.navigate("Initial") })}>
                    <Text style={commonStyles.buttonText}>Sair do APP</Text>
                </TouchableOpacity>
                </View>



            </ScrollView>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    
    blueText:{
        color: "#0a9396",
        fontSize: 22,
        fontWeight: "bold",
        alignSelf: "flex-start",
        margin:5
    },
    
    textView:
    {
        alignItems: "center",
        justifyContent: "flex-start",
        margin: 10,
    },

    view: {
        justifyContent: "space-between", 
        height: Dimensions.get("screen").height * 0.65

    }
})

