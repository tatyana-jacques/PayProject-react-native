import {
    Alert,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native"
import AlertIcon from "../../tools/AlertIcon/AlertIcon"
import { Calendar } from "react-native-calendars"
import CalendarConfig from "../../tools/LocaleConfig/LocaleConfig"
import { commonStyles } from "../../styles/CommonStyles"
import { format, parseISO } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"
import { useState } from "react"

export default function Register({ route, navigation }) {

    const {
        user,
        address } = route.params

    const [date, setDate] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    
   CalendarConfig()


    function navigateToTerms() {
        if (!date) {
            setErrorMessage("Insira uma data válida!")
        }

        else {
            const parseDate = parseISO(date)

            const formatedDate = format(new Date(parseDate), "dd 'de' MMMM  'de' yyyy", { locale: ptBR })


            Alert.alert(
                "Confirmar data:",
                "Deseja salvar o dia " + formatedDate + " como data de cobrança?",
                [
                    {
                        text: "Não",
                        onPress: (() => setDate(""))
                    },

                    {
                        text: "Sim",
                        onPress: (() => {
                            navigation.navigate(
                                "Terms",
                                {
                                    date: date,
                                    user: user,
                                    address: address
                                })
                        })
                    }
                ]
            )
        }
    }

    return (
        <SafeAreaView style={commonStyles.container}>
            <StatusBar backgroundColor={"#0a9396"} />
            <ScrollView style={{ flex: 1, width: "100%" }}>

                <Text style={commonStyles.title}>Qual a data da cobrança?</Text>

                <Calendar
                    style={styles.calendar}
                    LocaleConfig="pt"
                    markedDates={{
                        [date]: {
                            selected: true,
                            marked: true,
                            monthTextColor: "#ee9b00",
                            selectedColor: "#ee8b00",
                            dotColor: "#ae2012"
                        },
                    }}
                    onDayPress={(currentDate) => setDate(currentDate.dateString)}
                    theme={{
                        selectedDayTextColor: "#0a9396",
                        todayTextColor: "#ae2012",
                        calendarBackground: "#fff",
                        dayTextColor: "#0a9396",
                        arrowColor: "#ee9b00",
                        monthTextColor: "#ee9b00",
                        textDisabledColor: "#94d2bd",
                        textSectionTitleColor: "#ee9b00"
                    }}
                />

                {errorMessage &&
                    <View style={commonStyles.errorView}>
                        <AlertIcon />
                        <Text style={commonStyles.errorText}>{errorMessage}</Text>
                    </View>}

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
        marginVertical: 20,
    }
})
