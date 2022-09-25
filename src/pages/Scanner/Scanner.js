import {
    Dimensions,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
} from "react-native"

import AlertIcon from "../../tools/AlertIcon/AlertIcon"
import api from "../../services/api"
import { BarCodeScanner } from "expo-barcode-scanner"
import { commonStyles } from "../../styles/CommonStyles"
import ToastMessage from "../../tools/Toast/Toast"
import { useIsFocused } from "@react-navigation/native"
import { useState, useEffect, useContext } from "react"
import { UserContext } from "../../contexts/UserContext"

export default function Scanner({ navigation }) {

    const { loggedName, loggedId } = useContext(UserContext)
    const [button, setButton] = useState(true)
    const [permission, setPermission] = useState("")
    const [scanned, setScanned] = useState(true)
    const focusedScreen = useIsFocused()

    useEffect(() => {
        if (focusedScreen === true) {
            setButton(true)
            setScanned(true)
        }
    }, [focusedScreen])

    const getPermission = async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync()
        setPermission(status === "granted" ? true : false)
        if (status === "granted") {
            setButton(false)
        }
        else {
            setButton(true)
        }
    }

    function getResult({ data }) {
        setScanned(true)
        api.get("/debts?id=" + data)
            .then(response => {
                if (response.data.length === 1) {
                    navigation.navigate("Details", {
                        recipient: response.data[0].recipient,
                        amount: response.data[0].amount,
                        code: response.data[0].id,
                        user_id: loggedId
                    })
                }
                else {
                    ToastMessage("Código inválido!", "#ee8b00", 100)
                    setButton(true)

                }
            })
            .catch(() => ToastMessage("Erro ao tentar escanear!", "#ee8b00", 100))
    }

    function openCamera() {
        setScanned(false)
        setButton(false)
        getPermission()
    }

    return (
        <SafeAreaView style={commonStyles.container}>
            <StatusBar backgroundColor={"#0a9396"} />
            <ScrollView style={{ flex: 1, width: "100%" }}>

                <Text style={commonStyles.title}>Olá, {loggedName}!</Text>

                <View style={{ ...commonStyles.bigView, justifyContent: "center" }}>

                    {permission === false && <View style={commonStyles.errorView}>
                        <AlertIcon />
                        <Text style={commonStyles.errorText}>Permissão para câmera negada</Text></View>}
                    {
                        (permission === true && scanned === false) &&

                        <BarCodeScanner
                            onBarCodeScanned={getResult}
                            barCodeTypes={[BarCodeScanner.Constants.BarCodeType.code39]}
                            style={{
                                width: Dimensions.get("screen").width * 0.8,
                                height: Dimensions.get("screen").height * 0.7,
                            }}
                        />
                    }

                    {button === true && <TouchableOpacity style={commonStyles.button} onPress={openCamera}>
                        <Text style={commonStyles.buttonText}>Scannear novo boleto</Text>
                    </TouchableOpacity>}

                </View>

            </ScrollView>
        </SafeAreaView>

    )
}

