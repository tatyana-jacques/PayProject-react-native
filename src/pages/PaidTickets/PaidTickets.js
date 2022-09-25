import {
    Dimensions,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View
} from "react-native"

import api from "../../services/api"
import { commonStyles } from "../../styles/CommonStyles"
import ConvertDate from "../../tools/ConvertDate/ConvertDate"
import { formatCurrency } from "react-native-format-currency"
import ToastMessage from "../../tools/Toast/Toast"
import { useIsFocused } from "@react-navigation/native"
import { useState, useEffect, useContext } from "react"
import { UserContext } from "../../contexts/UserContext"

export default function Payments() {

    const { loggedId } = useContext(UserContext)
    const [list, setList] = useState([])
    const focusedScreen = useIsFocused()

    useEffect(() => {
        if (focusedScreen === true) {
            getList()
        }
    }, [focusedScreen])


    function getList() {
        api.get("/invoices?user_id=" + loggedId)
            .then(response => {
                setList(response.data)
            })
            .catch(() => ToastMessage("Erro ao carregar dados", "#ee8b00", 100))
    }

    function convertAmount(amount) {
        const amountToCurrency = formatCurrency({ amount: (amount), code: "BRL" })[0]
        return (amountToCurrency)
    }

    return (
        <SafeAreaView style={commonStyles.container}>
            <ScrollView style={{ flex: 1, width: "100%" }}>

                <Text style={commonStyles.title}>Boletos pagos</Text>

                {
                    list.map((item) => (
                        <View style={styles.itemView} key={item.id}>

                            <View style={styles.littleView}>
                                <Text style={styles.yellowText}> {ConvertDate(item.date)}</Text>
                                <Text style={{ ...styles.yellowText, fontWeight: "normal" }}>{convertAmount(item.amount)}</Text>
                            </View>

                            <Text style={styles.blueText}>{item.recipient}</Text>

                        </View>
                    ))
                }

            </ScrollView>
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({

    blueText:
    {
        color: "#0a9396",
        fontSize: 24,
        fontWeight: "bold",
        marginLeft: "5%"

    },

    itemView:
    {
        width: "90%",
        height: Dimensions.get("screen").height * 0.15,
        borderColor: "#ee9b00",
        borderWidth: 1,
        alignSelf: "center",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        margin: 8,
    },

    littleView:
    {
        width: "90%",
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "center",
        flexDirection: "row",
        paddingBottom: "10%"
    },

    yellowText:
    {
        color: "#ee9b00",
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "flex-start",
    },

})