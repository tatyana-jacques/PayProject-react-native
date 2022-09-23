import "react-native-gesture-handler"
import {createStackNavigator} from "@react-navigation/stack"
import {NavigationContainer} from "@react-navigation/native"
import Address from "./src/pages/Address/Address"
import Calendar from "./src/pages/Calendar/Calendar"
import Initial from "./src/pages/Initial/Initial"
import Login from "./src/pages/Login/Login"
import Register from "./src/pages/Register/Register"
import Terms from "./src/pages/Terms/Terms"
import UserNavigation from "./src/tools/NavigatorComponents/UserNavigation"
import UserProvider from "./src/contexts/UserContext"

const Stack = createStackNavigator ()


export default function App () {
  return (
    <NavigationContainer>
       <UserProvider>
      <Stack.Navigator initialRouteName="Initial">
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
         <Stack.Screen
        name="User"
        component = {UserNavigation}
        options = {{
          headerShown: false
        }}
        />


      </Stack.Navigator>

      </UserProvider>
    </NavigationContainer>
  )
}
