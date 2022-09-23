import {
    Alert,
    Dimensions,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
} from "react-native"

import AlertIcon from "../../tools/AlertIcon/AlertIcon"
import {API} from "../../services/Services"
import { BarCodeScanner } from "expo-barcode-scanner"
import { commonStyles } from "../../styles/CommonStyles"
import { useIsFocused } from "@react-navigation/native"
import {useState, useEffect, useContext} from "react"
import {UserContext } from "../../contexts/UserContext"

export default function Scanner ({ navigation }) {

    const { name, id } = useContext(UserContext)
    const [button, setButton] = useState(true)
    const [permission, setPermission] = useState("")
    const [scanned, setScanned] = useState (true)
    const focusedScreen = useIsFocused()

    useEffect (()=> {
        if (focusedScreen===true) {
            setButton(true)
            setScanned (true)
        }
    }, [focusedScreen])

    const getPermission = async () => {
        const {status} = await BarCodeScanner.requestPermissionsAsync()
        setPermission (status==="granted" ? true : false)
        if (status==="granted"){
            setButton(false)
        }
        else {
            setButton(true)
        }
    }

    function getResult ({data}){
        setScanned(true)
        fetch (API + "/debts?id=" + data)
        .then (async (response) => {
            const data = await response.json ()
            if (data.length===1) {
                navigation.navigate ("Details", {
                    recipient: data[0].recipient, 
                    amount: data[0].amount,
                    code: data[0].id,
                    user_id: id
                })
            }
            else {
               
                Alert.alert ("Código inválido!" + data)
                setButton (true)    
                
            }
        })
        .catch(() => Alert.alert ("Erro ao tentar scannear."))
    }

    function openCamera () {
        setScanned(false)
        setButton (false)
        getPermission()
    }


    return (
        <SafeAreaView style={commonStyles.container}>
            <StatusBar backgroundColor={"#0a9396"}/>
            <ScrollView style={{ flex: 1, width: "100%" }}>

                <Text style={commonStyles.title}>Olá, {name}!</Text>

                <View style = {{...commonStyles.bigView, justifyContent: "center"}}>

                    {permission===false && <View style={commonStyles.errorView}>
                        <AlertIcon />
                        <Text style={commonStyles.errorText}>Permissão para câmera negada</Text></View>}
                        {
                    (permission===true && scanned===false) && 
                   
                    <BarCodeScanner
                    onBarCodeScanned = {getResult}
                    barCodeTypes ={[BarCodeScanner.Constants.BarCodeType.code39]}
                    style= {{
                        width: Dimensions.get ("screen"). width * 0.8,
                        height: Dimensions.get ("screen").height * 0.7,    
                    }}
                    />
                }
                
                {button===true && <TouchableOpacity style={commonStyles.button} onPress={openCamera}>
                    <Text style={commonStyles.buttonText}>Scannear novo boleto</Text>
                </TouchableOpacity>}
              
                </View>

            </ScrollView>
        </SafeAreaView>

    )
}

