import {
    SafeAreaView,
    ScrollView,
    Switch,
    StatusBar,
    Text,
    TouchableOpacity,
    View
} from "react-native"

import { commonStyles } from "../../styles/CommonStyles"


export default function Terms({ route, navigation }) {

    //const { userData } = route.params

   

    return (
        <SafeAreaView style={commonStyles.container}>
            <StatusBar />
            <ScrollView style={{ flex: 1, width: "100%" }}>

                <Text style={commonStyles.title}>Dados da conta</Text>

              

            </ScrollView>
        </SafeAreaView>

    )
}

