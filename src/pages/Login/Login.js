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
import {API} from "../../services/Services"
import { commonStyles } from "../../styles/CommonStyles"
import { useState } from "react"

import image from "../../../assets/logoPay.png"
import AsyncStorage from "@react-native-async-storage/async-storage"

export default function Login({ navigation }) {
    const [CPF, setCPF] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

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
            fetch(API + "/users?cpf=" + CPF + "&password=" + password)
                .then(async (response) => {
                    const data = await response.json()
                    if (data.length === 1) {
                        await AsyncStorage.setItem ("@pay_app:id_result", JSON.stringify(data[0].id))
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
            <StatusBar />
            <ScrollView style={{ flex: 1, width: "100%" }}>
                <Image source={image} style={styles.image} resizeMode="contain" />
                <TextInput
                    style={commonStyles.input}
                    placeholder="CPF"
                    placeholderTextColor="#94d2bd"
                    selectionColor="#94d2bd"
                    keyboardType="number-pad"
                    maxLength={11}
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