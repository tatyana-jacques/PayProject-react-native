import { 
    SafeAreaView, 
    ScrollView,
    StatusBar, 
    StyleSheet,
    Text, 
    TouchableOpacity, 
    View } from "react-native"
import {Calendar} from "react-native-calendars"
import { commonStyles } from "../../styles/CommonStyles"
import { useState } from "react"

export default function Register({ route, navigation }) {

    const { 
        //user, 
address } = route.params

    const [date, setDate] = useState("")



    function navigateToTerms() {
        // if (!date) {
        //     setErrorMessage("Insira uma data válida!")
        // }


       // else {
           //navigation.navigate("Terms", { user: user }, { address: address }, { date: date })
                alert(address)
        //}
    }

    return (
        <SafeAreaView style={commonStyles.container}>
            <StatusBar />
            <ScrollView style={{ flex: 1, width: "100%" }}>
                <Text style={commonStyles.title}>Qual a data da cobrança?</Text>
                <Calendar 
                style={styles.calendar}
                markedDates={{
                    [date]: {
                        selected:true,
                        marked:true,
                    monthTextColor: "#ee9b00",
                    selectedColor: "#",
                        dotColor: "#ae2012"
                    },
                }}
                onDayPress = {(currentDate) => setDate (currentDate.dateString)}
                theme={{
                    selectedDayTextColor: "#0a9396",
                    todayTextColor: "#005f73",

                    calendarBackground: "#fff",
                    dayTextColor: "#ee9b00",
                    arrowColor: "#fff",
                    monthTextColor: "#ee9b00",
                    weekTextColor: "#ee9b00",

                }}
                />

        

                <View style={commonStyles.littleButtonView}>
                    <TouchableOpacity style={commonStyles.littleButton} onPress={(() => { navigation.navigate("Initial") })}>
                        <Text style={commonStyles.buttonText}>Voltar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={commonStyles.littleButton} onPress={navigateToTerms}>
                        <Text style={commonStyles.buttonText}>Continuar</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
   calendar:
   {
    width: "90%",
    alignSelf: "center",
    borderRadius: 15,
    marginVertical: 20,

   }

})
