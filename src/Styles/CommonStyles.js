import {StyleSheet} from "react-native"

export const commonStyles = StyleSheet.create ({
    
    container:
    {
        flex:1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#fff",
        paddingVertical:20,
       
        
    
    },
    button:
    {
        width: "70%",
        height: 50,
        backgroundColor: "#0a9396",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
        alignSelf: "center",
    },
    buttonText:
    {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff"
    },

    input: 
    {
        width: "80%",
        height: 50,
        backgroundColor: "#fff",
        borderWidth:1,
        borderColor:"#e9d8a6",
        padding:10,
        fontSize: 20,
        marginVertical: 10,
        alignSelf: "center",

    },

    blueText:
    {
        color: "#0a9396",
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "flex-start",
        marginHorizontal:"10%"
    },

    title:
    {
        color: "#0a9396",
        fontSize: 30,
        fontWeight: "bold",
        alignSelf: "center",
        marginVertical:10,
    },
})