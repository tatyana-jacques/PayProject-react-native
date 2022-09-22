import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native"
//import { API } from "../../services/Services"
import { commonStyles } from "../../styles/CommonStyles"
import {UserContext } from "../../contexts/UserContext"
//import {getId} from "../../tools/GetId/GetId"
import { useContext, useEffect } from "react"

export default function Terms({ route, navigation }) {

    // const [id, setId] = useState("")
    // const [name, setName] = useState("")
    // const [cpf, setCpf] = useState("")
    // const [contact, setContact] = useState("")
    // const [RG, setRG] = useState("")
    // getId(setId)

    const {name, cpf, contact, RG} = useContext(UserContext)

    // useEffect(() => {
    //     if (id)
    //     {
    //     fetch(API + "/users?id=" + id)
    //         .then(async (response) => {
    //             const data = await response.json()
    //             setName(data[0].fullname)
    //             setCpf(data[0].cpf)
    //             setContact(data[0].contact)
    //             setRG(data[0].number_rg)

    //         })
    //         .catch(() => Alert.alert("Erro no carregamento dos dados."))}

    // }, [id])
  

    return (
        <SafeAreaView style={commonStyles.container}>
            <StatusBar backgroundColor={"#0a9396"}/>
            <ScrollView style={{ flex: 1, width: "100%" }}>

                <Text style={commonStyles.title}>Dados da conta</Text>

               <View style = {commonStyles.bigView}>

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
        alignSelf: "flex-start"
    },

})

