import {StyleSheet, Dimensions} from "react-native"

export const commonStyles = StyleSheet.create ({

    
    bigView: {
        justifyContent: "space-between", 
        alignItems: "center",
        height: Dimensions.get("screen").height * 0.65

    },

    blueText:
    {
        color: "#0a9396",
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "center",
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
    
    container:
    {
        flex:1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#EBD9B2",
        paddingVertical:20,       
    },

    errorText: {
        fontSize: 16,
        color: "#005f73",
        marginHorizontal: 5
    },

    errorView: {
        flexDirection: "row",
        width: "80%",
        marginHorizontal: 10,
        alignItems: "center",
        alignSelf: "center",
        marginBottom: 5,
    },

    input: 
    {
        width: "80%",
        height: 30,
        backgroundColor: "#EAE5D4",
        paddingHorizontal:10,
        fontSize: 18,
        marginVertical: 10,
        alignSelf: "center",
        color:"#005f73"
    },

    littleButton:
    {
        width: "40%",
        height: 50,
        backgroundColor: "#0a9396",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
        alignSelf: "center",
    },

    littleButtonView:
    {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        width: "90%",
        alignSelf: "center"
    },

    title:
    {
        color: "#0a9396",
        fontSize: 30,
        fontWeight: "bold",
        alignSelf: "center",
        marginVertical:10,
       
    },

    yellowText:
    {
        color: "#ee9b00",
        fontSize: 18,
        fontWeight: "bold",
        alignSelf: "flex-start",
        marginHorizontal:"10%"
    },
   
})