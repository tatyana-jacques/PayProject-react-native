import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native"

import { commonStyles } from "../../styles/CommonStyles"
import { useState } from "react"

export default function Register({ route, navigation }) {

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [RG, setRG] = useState("")
    const [CPF, setCPF] = useState("")
    const [password, setPassword] = useState("")

    const [errorMessage, setErrorMessage] = useState("")
    const user = {
        name: name,
        phone: phone,
        email: email,
        RG: RG,
        CPF: CPF,
        password: password
    }


    function navigateToAddress() {
        if (!name) {
            setErrorMessage("Insira seu nome!")
        }
        else if (!phone) {
            setErrorMessage("Insira seu telefone!")
        }

        else {
            navigation.navigate("Address", { user: user })
        }
    }

    return (
        <SafeAreaView style={commonStyles.container}>
            <StatusBar />
            <ScrollView style={{ flex: 1, width: "100%" }}>
                <Text style={commonStyles.title}>Nova Conta</Text>

                <Text style={commonStyles.yellowText}>Nome completo</Text>
                <TextInput
                    style={commonStyles.input}
                    selectionColor="#94d2bd"
                    maxLength={50}
                    value={name}
                    onChangeText={setName}
                />
                {errorMessage === "Insira seu nome!" && <View><Text style={styles.errorText}>{errorMessage}</Text></View>}

                <Text style={commonStyles.yellowText}>Telefone</Text>
                <TextInput
                    style={commonStyles.input}
                    selectionColor="#94d2bd"
                    keyboardType="number-pad"
                    maxLength={11}
                    value={phone}
                    onChangeText={setPhone}
                />
                {errorMessage === "Insira seu telefone!" && <View><Text style={styles.errorText}>{errorMessage}</Text></View>}
                <Text style={commonStyles.yellowText}>E-mail</Text>
                <TextInput
                    style={commonStyles.input}
                    selectionColor="#94d2bd"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />
                <Text style={commonStyles.yellowText}>Nº do RG</Text>
                <TextInput
                    style={commonStyles.input}
                    selectionColor="#94d2bd"
                    keyboardType="number-pad"
                    maxLength={7}
                    value={RG}
                    onChangeText={setRG}
                />
                <Text style={commonStyles.yellowText}>CPF</Text>
                <TextInput
                    style={commonStyles.input}
                    selectionColor="#94d2bd"
                    keyboardType="number-pad"
                    maxLength={11}
                    value={CPF}
                    onChangeText={setCPF}
                />
                <Text style={commonStyles.yellowText}>Senha</Text>
                <TextInput
                    style={commonStyles.input}
                    selectionColor="#94d2bd"
                    secureTextEntry
                    maxLength={11}
                    value={password}
                    onChangeText={setPassword}
                />
                <View style={commonStyles.littleButtonView}>
                    <TouchableOpacity style={commonStyles.littleButton} onPress={(() => { navigation.navigate("Initial") })}>
                        <Text style={commonStyles.buttonText}>Voltar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={commonStyles.littleButton} onPress={navigateToAddress}>
                        <Text style={commonStyles.buttonText}>Continuar</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    errorText: {
        fontSize: 16,
        color: "#005f73"
    }

})
