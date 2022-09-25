import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native"

import { Calendar } from "react-native-calendars"
import CalendarConfig from "../../tools/LocaleConfig/LocaleConfig"
import { commonStyles } from "../../styles/CommonStyles"
import ErrorMessage from "../../tools/ErrorMessage/ErrorMesage"
import { format, parseISO } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"
import ToastMessage from "../../tools/Toast/Toast"
import { useEffect, useState } from "react"

export default function Register({ route, navigation }) {

    const {
        user,
        address } = route.params

    const [date, setDate] = useState("")
    const [errorMessage, setErrorMessage] = useState("")


    CalendarConfig()
    useEffect(() => {
        if (date) {
            const parseDate = parseISO(date)
            const formatedDate = format(new Date(parseDate), "dd 'de' MMMM  'de' yyyy", { locale: ptBR })
            ToastMessage(`Você escolheu o dia ${formatedDate} como data de cobrança`, "#0a9396", 70)
        }
    }, [date])


    function navigateToTerms() {
        if (!date) {
            setErrorMessage("Insira uma data válida!")
        }

        else {
            navigation.navigate(
                "Terms",
                {
                    date: date,
                    user: user,
                    address: address
                })
            setErrorMessage("")
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

                {errorMessage && <ErrorMessage message={errorMessage} />}

                <View style={commonStyles.littleButtonView}>
                    <TouchableOpacity style={commonStyles.littleButton} onPress={(() => { navigation.navigate("Address", { user }) })}>
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
        marginTop: 30
    }
})
