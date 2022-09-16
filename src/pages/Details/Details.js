import {
    SafeAreaView,
    ScrollView,
    Switch,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native"



import { commonStyles } from "../../styles/CommonStyles"


export default function Details ({ route, navigation }) {
    return (
        <SafeAreaView style={commonStyles.container}>
            <StatusBar />
            <ScrollView style={{ flex: 1, width: "100%" }}>

                <Text style={commonStyles.title}>Boletos pagos</Text>


            </ScrollView>
        </SafeAreaView>

    )
}