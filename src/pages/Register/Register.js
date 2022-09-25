import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native"
import { commonStyles } from "../../styles/CommonStyles"
import ErrorMessage from "../../tools/ErrorMessage/ErrorMesage"
import { useState } from "react"

export default function Register({ navigation }) {

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [RG, setRG] = useState("")
    const [CPF, setCPF] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState({
        id: "",
        message: ""
    })

    function navigateToAddress() {
        if (name < 8) {
            setErrorMessage({
                id: 1,
                message: "Seu nome deve conter entre 8 e 120 caracteres!"
            })
        }
        else if (phone < 8) {
            setErrorMessage({
                id: 2,
                message: "Insira seu telefone!"
            })
        }
        else if (email < 8) {
            setErrorMessage({
                id: 3,
                message: "Insira seu e-mail!"
            })
        }
        else if (RG < 6) {
            setErrorMessage({
                id: 4,
                message: "Insira um número de RG válido!"
            })
        }
        else if (CPF < 11) {
            setErrorMessage({
                id: 5,
                message: "Insira um CPF válido!"
            })
        }
        else if (password < 8) {
            setErrorMessage({
                id: 6,
                message: "Sua senha deve conter entre 8 a 16 caracteres!"
            })
        }

        else {
            navigation.navigate(
                "Address",
                {
                    user: {
                        name: name,
                        phone: phone,
                        email: email,
                        RG: RG,
                        CPF: CPF,
                        password: password
                    }
                })

                 setErrorMessage({
            id: "",
            message: ""
        })
        }
       
    }

    return (
        <SafeAreaView style={commonStyles.container}>
            <StatusBar backgroundColor={"#0a9396"}/>
            <ScrollView style={{ flex: 1, width: "100%" }}>
                <Text style={commonStyles.title}>Nova Conta</Text>

                <Text style={commonStyles.yellowText}>Nome completo</Text>
                <TextInput
                    style={commonStyles.input}
                    selectionColor="#94d2bd"
                    maxLength={120}
                    value={name}
                    onChangeText={setName}
                />
                {errorMessage.id === 1 && <ErrorMessage message = {errorMessage.message}/>}

                <Text style={commonStyles.yellowText}>Telefone</Text>
                <TextInput
                    style={commonStyles.input}
                    selectionColor="#94d2bd"
                    keyboardType="number-pad"
                    maxLength={20}
                    value={phone}
                    onChangeText={setPhone}
                />
                {errorMessage.id === 2 && <ErrorMessage message = {errorMessage.message}/>}

                <Text style={commonStyles.yellowText}>E-mail</Text>
                <TextInput
                    style={commonStyles.input}
                    selectionColor="#94d2bd"
                    keyboardType="email-address"
                    maxLength={50}
                    value={email}
                    onChangeText={setEmail}
                />
                {errorMessage.id === 3 && <ErrorMessage message = {errorMessage.message}/>}

                <Text style={commonStyles.yellowText}>Nº do RG</Text>
                <TextInput
                    style={commonStyles.input}
                    selectionColor="#94d2bd"
                    keyboardType="number-pad"
                    maxLength={15}
                    value={RG}
                    onChangeText={setRG}
                />
                {errorMessage.id === 4 && <ErrorMessage message = {errorMessage.message}/>}

                <Text style={commonStyles.yellowText}>CPF</Text>
                <TextInput
                    style={commonStyles.input}
                    selectionColor="#94d2bd"
                    keyboardType="number-pad"
                    maxLength={14}
                    value={CPF}
                    onChangeText={setCPF}
                />
                {errorMessage.id === 5 && <ErrorMessage message = {errorMessage.message}/>}

                <Text style={commonStyles.yellowText}>Senha</Text>
                <TextInput
                    style={commonStyles.input}
                    selectionColor="#94d2bd"
                    secureTextEntry
                    maxLength={16}
                    value={password}
                    onChangeText={setPassword}
                />
                {errorMessage.id === 6 && <ErrorMessage message = {errorMessage.message}/>}
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

