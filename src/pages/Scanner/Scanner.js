import {
    SafeAreaView,
    ScrollView,
    Switch,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native"


import {API} from "../../services/Services"
import { commonStyles } from "../../styles/CommonStyles"
import {getId} from "../../tools/GetId/GetId"
import {useState, useEffect} from "react"


export default function Scanner ({ route, navigation }) {

    const [id, setId] = useState("")
    const [name, setName] = useState("")
    getId(setId)
    useEffect(() => {
        if (id)
        {
        fetch(API + "/users?id=" + id)
            .then(async (response) => {
                const data = await response.json()
                setName(data[0].fullname)
            })
            .catch(() => Alert.alert("Erro no carregamento dos dados."))}

    }, [id])
    return (
        <SafeAreaView style={commonStyles.container}>
            <StatusBar />
            <ScrollView style={{ flex: 1, width: "100%" }}>

                <Text style={commonStyles.title}>Olá, {name}!</Text>

            </ScrollView>
        </SafeAreaView>

    )
}