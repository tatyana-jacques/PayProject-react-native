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
import { Calendar } from "react-native-calendars"
import { LocaleConfig } from "react-native-calendars"
import { commonStyles } from "../../styles/CommonStyles"
import { useState } from "react"
import { format } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"

export default function Register({ route, navigation }) {

    //const { user, address } = route.params

    const [date, setDate] = useState("")

    LocaleConfig.locales["pt"] =
    {
        monthNames: [
            "Janeiro",
            "Fevereiro",
            "Março",
            "Abril",
            "Maio",
            "Junho",
            "Julho",
            "Agosto",
            "Setembro",
            "Outubro",
            "Novembro",
            "Dezembro"

        ],
        dayNames: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"],
        dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex"],
        today: "Hoje"
    }

    LocaleConfig.defaultLocale = "pt"



    function navigateToTerms() {
        // if (!date) {
        //     setErrorMessage("Insira uma data válida!")
        // }


        // else {
        //navigation.navigate("Terms", { user: user }, { address: address }, { date: date })

        //}
        const formatedDate = format(new Date(date), "dd 'de' MMMM  'de' yyyy", { locale: ptBR })

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
                    onPress: (() => { navigation.navigate("Terms", { date: date }) })
                }

            ]
        )
    }

    return (
        <SafeAreaView style={commonStyles.container}>
            <StatusBar />
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
                            selectedColor: "#",
                            dotColor: "#ae2012"
                        },
                    }}
                    onDayPress={(currentDate) => setDate(currentDate.dateString)}
                    theme={{
                        selectedDayTextColor: "#0a9396",
                        todayTextColor: "#ae2012",

                        calendarBackground: "#fff",
                        dayTextColor: "#ee9b00",
                        arrowColor: "#ee9b00",
                        monthTextColor: "#ee9b00",



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
        marginVertical: 20,

    }

})
