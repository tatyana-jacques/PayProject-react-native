import {
    Dimensions,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native"
import api from "../../services/api"
import { commonStyles } from "../../styles/CommonStyles"
import { formatCurrency } from "react-native-format-currency"
import { format } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"
import ToastMessage from "../../tools/Toast/Toast"

export default function Details({ route, navigation }) {

    const { recipient, amount, code, user_id } = route.params
    const cashback = (amount * 0.1).toFixed(2)
    const cashbackToCurrency = formatCurrency({ amount: cashback, code: "BRL" })[0]
    const amountToCurrency = formatCurrency({ amount: (amount.toFixed(2)), code: "BRL" })[0]
    const date = format(new Date(), "dd/MM/yyyy HH:mm", { locale: ptBR })

    function toPay() {
        api.post("/invoices", {
            recipient: recipient,
            amount: amount,
            date: date,
            code: code,
            user_id: user_id,
            cashback: cashback
        })
            .then(async () => {
                ToastMessage("Pagamento realizado com sucesso!", "#0a9396", 300)
                navigation.navigate("Account")
            })
            .catch(() => ToastMessage("Falha ao realizar o pagamento!", "#ee8b00", 300))
    }

    return (

        <SafeAreaView style={commonStyles.container}>
            <ScrollView style={{ flex: 1, width: "100%" }}>

                <View style={styles.view}>
                    <View style={styles.dataView}>
                        <Text style={styles.blueText}>Para</Text>
                        <Text style={commonStyles.yellowText}>{recipient}</Text>
                        <Text style={styles.blueText}>Valor</Text>
                        <Text style={commonStyles.yellowText}>{amountToCurrency}</Text>
                        <Text style={styles.blueText}>Código do boleto</Text>
                        <Text style={{ ...commonStyles.yellowText, fontWeight: "normal" }}>{code}</Text>
                        <Text style={styles.blueText}>Cashback</Text>
                        <Text style={commonStyles.yellowText}>{cashbackToCurrency}</Text>
                    </View>

                    <View>
                        <TouchableOpacity style={commonStyles.button} onPress={toPay}>
                            <Text style={commonStyles.buttonText}>Pagar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ ...commonStyles.button, backgroundColor: "#ae2012" }} onPress={() => navigation.navigate("Account")}>
                            <Text style={commonStyles.buttonText}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </ScrollView>
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({

    dataView: {
        width: "90%",
        height: Dimensions.get("screen").height * 0.5,
        borderColor: "#ee9b00",
        borderWidth: 1,
        alignSelf: "center"
    },

    blueText:
    {
        color: "#0a9396",
        fontSize: 22,
        fontWeight: "bold",
        marginHorizontal: "10%",
        marginVertical: 10
    },

    view: {
        width: "100%",
        height: Dimensions.get("screen").height * 0.8,
        justifyContent: "space-around",
    }

})