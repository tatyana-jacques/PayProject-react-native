import {
    Alert,
    SafeAreaView,
    ScrollView,
    Switch,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native"

import { API } from "../../services/Services"
import { commonStyles } from "../../styles/CommonStyles"
import { useState } from "react"

export default function Terms({ route, navigation }) {

    const { user, address, date } = route.params
    const {name, phone, email, RG, CPF, password} = user
    const {cep, street, city, state, district, number, complement} = address

    const [accept, setAccept] = useState(false)

    function registerUser() {
        if (accept === false) {
            Alert.alert(
                "Atenção!",
                "Para prosseguir, você deve aceitar os termos!")
        }
        else {
           
            fetch(API + "/users", {
                method: "POST",
                body: JSON.stringify({
                    fullname: name,
                        contact: phone,
                        email: email,
                        number_rg: RG,
                        cpf: CPF,
                        password: password,
                        address: {
                            cep: cep,
                            street: street,
                            city: city,
                            state: state,
                            region: district,
                            number: number,
                            complement: complement
                        },
                    billing_day: date
                }),
                headers: {
                    "Content-type": "application/json"
                }
            })
            .then (async () => {
                Alert.alert ("Usuário cadastrado com sucesso!")
                navigation.navigate("Login")
            })
            .catch (() => Alert.alert("Falha ao realizar o cadastro."))
        }
    
    }

    return (
        <SafeAreaView style={commonStyles.container}>
            <StatusBar />
            <ScrollView style={{ flex: 1, width: "100%" }}>

                <Text style={commonStyles.title}>Termos de uso</Text>

                <View style={styles.textView}>

                    <Text style={styles.text}> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent finibus arcu nec mauris vulputate, ut imperdiet arcu blandit.
                        Praesent vestibulum mauris dui, a venenatis nulla placerat id.
                        Proin quis fermentum dui.
                    </Text>

                    <Text style={styles.text}>Integer sit amet finibus odio.
                        Suspendisse id tortor sodales, hendrerit augue id, scelerisque odio.
                        Sed ultrices leo ac orci hendrerit, quis tempus ex rutrum. Duis pulvinar consequat condimentum.
                        Vestibulum eget molestie lectus. Ut ex purus, eleifend ac elit sed, hendrerit dictum enim.

                    </Text>

                    <Text style={styles.text}>
                        Quisque ultricies augue erat, quis mollis lorem aliquam a.
                        Curabitur eget diam luctus dui efficitur pharetra.
                        Vivamus cursus tellus orci, at tempor augue ultricies et.

                    </Text>

                    <Text style={styles.text}>
                        Proin maximus urna et justo sodales consequat.
                        Cras cursus ligula eu lectus vestibulum, ac lobortis arcu dignissim.
                        Nam volutpat turpis eget lorem hendrerit, non aliquam augue congue.
                        Cras eget risus ac quam rutrum feugiat eu pharetra magna. Sed enim tortor, imperdiet in suscipit sed, blandit at erat.

                    </Text>

                    <Text style={styles.text}>
                        Aliquam dictum ipsum euismod nunc accumsan sagittis.
                        Vestibulum at nisl rhoncus, lobortis neque vel, condimentum tellus.
                        Sed eget ante blandit eros pretium faucibus. Sed ex purus, tincidunt a cursus dapibus, pretium nec nibh.
                        Nullam sed neque quis quam porta maximus in sed metus. Maecenas fringilla leo vitae leo malesuada, non pulvinar nisi tempus.

                    </Text>
                </View>
                <View style={styles.switchContainer}>
                    <Switch
                        value={accept}
                        onValueChange={setAccept}
                        thumbColor={"#0a9396"}
                        trackColor={{ true: "#0a9396", false: "#EAE5D4" }}
                    />
                    <Text style={commonStyles.blueText}>Aceito os termos</Text>

                </View>


                <View style={commonStyles.littleButtonView}>
                    <TouchableOpacity style={commonStyles.littleButton} 
                    onPress={(() => { navigation.navigate("Calendar") })}
                    >
                        <Text style={commonStyles.buttonText}>Voltar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={commonStyles.littleButton} onPress={registerUser}>
                        <Text style={commonStyles.buttonText}>Finalizar</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({

    text:
    {
        fontSize: 16,
        color: "#005f73",
        margin: 10,
        paddingHorizontal: 10,
        textAlign: "center"
    },

    textView:
    {
        alignItems: "center",
        justifyContent: "center",
    },

    switchContainer:
    {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    }
})