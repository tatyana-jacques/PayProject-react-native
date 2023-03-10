import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    TextInput,
    Text,
    TouchableOpacity,
    View
} from "react-native"
import { commonStyles } from "../../styles/CommonStyles"
import ErrorMessage from "../../tools/ErrorMessage/ErrorMesage"
import { Picker } from "@react-native-picker/picker"
import { states } from "../../tools/States/States"
import { useState, useEffect } from "react"
import viacep from "../../services/viacep"

export default function Address({ route, navigation }) {

    const { user } = route.params
    const [cep, setCep] = useState("")
    const [city, setCity] = useState("")
    const [complement, setComplement] = useState("")
    const [district, setDistrict] = useState("")
    const [number, setNumber] = useState("")
    const [state, setState] = useState("")
    const [street, setStreet] = useState("")

    const [errorMessage, setErrorMessage] = useState({
        id: "",
        message: ""
    })

    useEffect(() => {
        if (cep.length === 8) {
            viacep.get(+ cep + "/json")
                .then((response) => {
                    setCity(response.data.localidade)
                    setComplement(response.data.complemento)
                    setDistrict(response.data.bairro)
                    setState(response.data.uf)
                    setStreet(response.data.logradouro)
                })
                .catch(() => {
                    alert("Não foi possível recuperar suas informações de endereço.")
                })
        }
    }, [cep])

    function navigateToCalendar() {
        if (cep < 8) {
            setErrorMessage({
                id: 1,
                message: "Preencha o campo CEP!"
            })
        }
        else if (!street) {
            setErrorMessage({
                id: 2,
                message: "Preencha o campo Rua!"
            })
        }
        else if (!city) {
            setErrorMessage({
                id: 3,
                message: "Preencha o campo Cidade!"
            })
        }
        else if (!state) {
            setErrorMessage({
                id: 4,
                message: "Preencha o campo Estado!"
            })
        }
        else if (!district) {
            setErrorMessage({
                id: 5,
                message: "Preencha o campo Bairro!"
            })
        }
        else if (!number) {
            setErrorMessage({
                id: 6,
                message: "Insira o número de seu endereço!"
            })
        }

        else {
            navigation.navigate(
                "Calendar",
                {
                    user: user,
                    address: {
                        cep: cep,
                        street: street,
                        city: city,
                        state: state,
                        district: district,
                        number: number,
                        complement: complement

                    }
                }
            )

            setErrorMessage({
                id: "",
                message: ""
            })
        }

    }

    return (
        <SafeAreaView style={commonStyles.container}>
            <ScrollView style={{ flex: 1, width: "100%" }}>

                <Text style={commonStyles.title}>Endereço</Text>

                <Text style={commonStyles.yellowText}>CEP</Text>
                <TextInput
                    style={commonStyles.input}
                    selectionColor="#94d2bd"
                    maxLength={8}
                    value={cep}
                    keyboardType="number-pad"
                    onChangeText={setCep}
                />
                {errorMessage.id === 1 && <ErrorMessage message={errorMessage.message} />}

                <Text style={commonStyles.yellowText}>Rua</Text>
                <TextInput
                    style={commonStyles.input}
                    selectionColor="#94d2bd"
                    maxLength={50}
                    value={street}
                    onChangeText={setStreet}
                />
                {errorMessage.id === 2 && <ErrorMessage message={errorMessage.message} />}

                <Text style={commonStyles.yellowText}>Cidade</Text>
                <TextInput
                    style={commonStyles.input}
                    selectionColor="#94d2bd"
                    maxLength={50}
                    value={city}
                    onChangeText={setCity}
                />
                {errorMessage.id === 3 && <ErrorMessage message={errorMessage.message} />}

                <Picker
                    selectedValue={state}
                    onValueChange={(value) => setState(value)}
                    style={styles.select}
                >
                    {
                        states.map((state) => (
                            <Picker.Item label={state.name} value={state.initials} key={state.name} />
                        ))
                    }
                </Picker>
                {errorMessage.id === 4 && <ErrorMessage message={errorMessage.message} />}

                <Text style={commonStyles.yellowText}>Bairro</Text>
                <TextInput
                    style={commonStyles.input}
                    selectionColor="#94d2bd"
                    maxLength={20}
                    value={district}
                    onChangeText={setDistrict}
                />
                {errorMessage.id === 5 && <ErrorMessage message={errorMessage.message} />}

                <Text style={commonStyles.yellowText}>Nº da residência</Text>
                <TextInput
                    style={commonStyles.input}
                    selectionColor="#94d2bd"
                    keyboardType="number-pad"
                    maxLength={10}
                    value={number}
                    onChangeText={setNumber}
                />
                {errorMessage.id === 6 && <ErrorMessage message={errorMessage.message} />}

                <Text style={commonStyles.yellowText}>Complemento</Text>
                <TextInput
                    style={commonStyles.input}
                    selectionColor="#94d2bd"
                    maxLength={20}
                    value={complement}
                    onChangeText={setComplement}
                />

                <View style={commonStyles.littleButtonView}>
                    <TouchableOpacity style={commonStyles.littleButton} onPress={(() => { navigation.navigate("Register") })}>
                        <Text style={commonStyles.buttonText}>Voltar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={commonStyles.littleButton} onPress={navigateToCalendar}>
                        <Text style={commonStyles.buttonText}>Continuar</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    select:
    {
        width: "80%",
        color: "#ee9b00",
        alignSelf: "center",
        backgroundColor: "#EAE5D4",
        marginBottom: 10,

    }
})
