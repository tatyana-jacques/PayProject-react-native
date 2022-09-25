import { Text, View } from "react-native"
import AlertIcon from "../AlertIcon/AlertIcon"
import {commonStyles} from "../../styles/CommonStyles"

export default function ErrorMessage({message}) {
    return (
    <View style={commonStyles.errorView}>
        <AlertIcon />
        <Text style={commonStyles.errorText}>{message}</Text>
        </View>
        )

}
