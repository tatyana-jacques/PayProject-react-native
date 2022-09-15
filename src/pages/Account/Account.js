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

    const { user, address, date } = route.params

   

    return (
        <SafeAreaView style={commonStyles.container}>
            <StatusBar />
            <ScrollView style={{ flex: 1, width: "100%" }}>

                <Text style={commonStyles.title}>Dados da conta</Text>

              

                    <Text style={commonStyles.blueText}> 
                    </Text>

                    <Text style={commonStyles.blueText}>
                    </Text>

                    <Text style={commonStyles.blueText}>
                    </Text>

                    <Text style={commonStyles.blueText}>
                        
                    </Text>

                    

                <View style={commonStyles.littleButtonView}>
                    <TouchableOpacity style={commonStyles.button} onPress={(() => { navigation.navigate("Initial") })}>
                        <Text style={commonStyles.buttonText}>Sair do APP</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>

    )
}

