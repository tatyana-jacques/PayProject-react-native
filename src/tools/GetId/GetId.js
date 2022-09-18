import AsyncStorage from "@react-native-async-storage/async-storage"
 
export const getId = async (id) => {
    const value = await AsyncStorage.getItem("@pay_app:id_result")
    const parseValue = JSON.parse(value)
    id(parseValue)
 
}