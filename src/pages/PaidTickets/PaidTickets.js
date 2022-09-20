import {
    Alert,
    Dimensions,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View
} from "react-native"

import { API } from "../../services/Services"
import { commonStyles } from "../../styles/CommonStyles"
import ConvertDate from "../../tools/ConvertDate/ConvertDate"
import { formatCurrency } from "react-native-format-currency"
import { getId } from "../../tools/GetId/GetId"
import { useIsFocused } from "@react-navigation/native"
import { useState, useEffect } from "react"


export default function Payments({ route, navigation }) {

    const [id, setId] = useState("")
    const [list, setList] = useState([])
    const focusedScreen = useIsFocused()

    useEffect(() => {
        if (focusedScreen === true) {
            getList()
        }
    }, [focusedScreen])

    getId(setId)

    function getList() {
        fetch(API + "/invoices?user_id=" + id)
            .then(async (response) => {
                const data = await response.json()
                setList(data)

            })
            .catch(() => Alert.alert("Erro ao recuperar os dados."))
    }

    function convertAmount(amount) {
        const amountToCurrency = formatCurrency({ amount: (amount), code: "BRL" })[0]
        return (amountToCurrency)

    }

    return (
        <SafeAreaView style={commonStyles.container}>
            <StatusBar backgroundColor={"#0a9396"}/>
            <ScrollView style={{ flex: 1, width: "100%" }}>

                <Text style={commonStyles.title}>Boletos pagos</Text>

                {
                    list.map((item) => (
                        <View style={styles.itemView}
                            key={item.id}>

                            <View style={styles.littleView}>
                                <Text style={styles.yellowText}> {ConvertDate(item.date)}</Text>
                                <Text style={{...styles.yellowText, fontWeight: "normal"}}>{convertAmount(item.amount)}</Text>
                            </View>


                            <Text style = {styles.blueText}>{item.recipient}</Text>


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