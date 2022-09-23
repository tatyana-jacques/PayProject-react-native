import {
    Alert,
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native"
import AlertIcon from "../../tools/AlertIcon/AlertIcon"
import api from "../../services/api"
import { commonStyles } from "../../styles/CommonStyles"
import image from "../../../assets/logoPay.png"
import { UserContext } from "../../contexts/UserContext"
import { useState, useContext } from "react"


export default function Login({ navigation }) {

    const [CPF, setCPF] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const { setId, setName, setCpf, setContact, setRG } = useContext(UserContext)

    function navigateToUser() {

        if (!CPF) {
            setErrorMessage({
                id: 1,
                message: "O preenchimento do campo CPF é obrigatório!"
            })
        }

        else if (!password) {
            setErrorMessage({
                id: 2,
                message: "O preenchimento do campo senha é obrigatório!"
            })
        }

        else {
            api.get("/users?cpf=" + CPF + "&password=" + password)
                .then(response => {
                    if (response.data.length === 1) {
                        setId(response.data[0].id)
                        setName(response.data[0].fullname)
                        setCpf(response.data[0].cpf)
                        setContact(response.data[0].contact)
                        setRG(response.data[0].number_rg)
                        navigation.navigate("User")
                    }
                    else {
                        Alert.alert("Usuário inválido!")
                    }
                })
                .catch(() => Alert.alert("Erro ao tentar logar!"))
        }
    }

    return (
        <SafeAreaView style={commonStyles.container}>
            <StatusBar backgroundColor={"#0a9396"} />
            <ScrollView style={{ flex: 1, width: "100%" }}>

                <Image source={image} style={styles.image} resizeMode="contain" />
                <TextInput
                    style={commonStyles.input}
                    placeholder="CPF"
                    placeholderTextColor="#94d2bd"
                    selectionColor="#94d2bd"
                    keyboardType="number-pad"
                    maxLength={15}
                    value={CPF}
                    onChangeText={setCPF}
                />
                {errorMessage.id === 1 &&
                    <View style={commonStyles.errorView}>
                        <AlertIcon />
                        <Text style={commonStyles.errorText}>{errorMessage.message}</Text></View>}

                <TextInput
                    style={commonStyles.input}
                    placeholder="Password"
                    placeholderTextColor="#94d2bd"
                    selectionColor="#94d2bd"
                    secureTextEntry
                    maxLength={11}
                    value={password}
                    onChangeText={setPassword}
                />
                {errorMessage.id === 2 &&
                    <View style={commonStyles.errorView}>
                        <AlertIcon />
                        <Text style={commonStyles.errorText}>{errorMessage.message}</Text></View>}

                <TouchableOpacity style={commonStyles.button} onPress={navigateToUser}>
                    <Text style={commonStyles.buttonText}>Logar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={(() => { navigation.navigate("Register") })}>
                    <Text style={commonStyles.blueText}>Abrir conta gratuita</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: "80%",
        minHeight: 100,
        marginVertical: 10,
        alignSelf: "center",
    }
})