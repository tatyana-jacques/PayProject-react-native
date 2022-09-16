import { 
    SafeAreaView,
    ScrollView,
    StatusBar,  
    StyleSheet,
    TextInput,
    Text, 
    TouchableOpacity,  
    View  } from "react-native"

import { commonStyles } from "../../styles/CommonStyles"
import {Picker} from "@react-native-picker/picker"
import { useState } from "react"


export default function Address({ route, navigation }) {


    const {user} = route.params
   
    
    const [cep, setCep] = useState("")
    const [street, setStreet] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [district, setDistrict] = useState("")
    const [number, setNumber] = useState("")
    const [complement, setComplement] = useState("")

    const address = {
        cep: cep,
        street: street,
        city: city,
        state: state,
        district: district,
        number: number
    }

    
    function navigateToCalendar (){
        navigation.navigate("Calendar", {user: user}, {address:address})
    }

   
    return (
        <SafeAreaView style={commonStyles.container}>
            <StatusBar />
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
                  
                <Text style={commonStyles.yellowText}>Rua</Text>
                 <TextInput
                    style={commonStyles.input}
                    selectionColor="#94d2bd"
                    maxLength={50}
                    value={street}
                    onChangeText={setStreet}
                />
                
                <Text style={commonStyles.yellowText}>Cidade</Text>
                <TextInput
                    style={commonStyles.input}
                    selectionColor="#94d2bd"
                    maxLength={50}
                    value={city}
                    onChangeText={setCity}
                />
                <Picker
                   selectedValue={state}
                   onValueChange ={(value) => setState(value)}
                   style = {styles.select}
                   >
                  
                </Picker>
                
                <Text style={commonStyles.yellowText}>Bairro</Text>
                <TextInput
                    style={commonStyles.input}
                    selectionColor="#94d2bd"
                    maxLength={20}
                    value={district}
                    onChangeText={setDistrict}
                />
                <Text style={commonStyles.yellowText}>Nº da residência</Text>
                <TextInput
                    style={commonStyles.input}
                    selectionColor="#94d2bd"
                    keyboardType="number-pad"
                    maxLength={5}
                    value={number}
                    onChangeText={setNumber}
                />
                <Text style={commonStyles.yellowText}>Complemento</Text>
                <TextInput
                   style={commonStyles.input}
                   selectionColor="#94d2bd"
                   keyboardType="number-pad"
                   maxLength={5}
                    value={complement}
                    onChangeText={setComplement}
                />
                <View style={commonStyles.littleButtonView}>
                    <TouchableOpacity style={commonStyles.littleButton} onPress={(() => { navigation.navigate("Initial") })}>
                        <Text style={commonStyles.buttonText}>Voltar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={commonStyles.littleButton} onPress={navigateToCalendar }>
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
        color:"#ee9b00",
        alignSelf: "center",
        backgroundColor: "#EAE5D4",
        marginBottom:10,
       
    }
})
