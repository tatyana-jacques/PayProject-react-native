import "react-native-gesture-handler"

import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"


import Initial from "./src/pages/Initial/Initial"
import Login from "./src/pages/Login/Login"
import Register from "./src/pages/Register/Register"
import Address from "./src/pages/Address/Address"
import Terms from "./src/pages/Terms/Terms"
import Calendar from "./src/pages/Calendar/Calendar"

const Stack = createStackNavigator ()


export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Calendar">
        <Stack.Screen
        name="Initial"
        component = {Initial}
        options = {{
          headerShown: false
        }}
        />
        <Stack.Screen
        name="Login"
        component = {Login}
        options = {{
          headerShown: false
        }}
        />
        <Stack.Screen
        name="Register"
        component = {Register}
        options = {{
          headerShown: false
        }}
        />
        <Stack.Screen
        name="Address"
        component = {Address}
        options = {{
          headerShown: false
        }}
        />
        <Stack.Screen
        name="Terms"
        component = {Terms}
        options = {{
          headerShown: false
        }}
        />
         <Stack.Screen
        name="Calendar"
        component = {Calendar}
        options = {{
          headerShown: false
        }}
        />


      </Stack.Navigator>


    </NavigationContainer>
  )
}
