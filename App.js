import "react-native-gesture-handler"

import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"

import Address from "./src/pages/Address/Address"
import Account from "./src/pages/Account/Account"
import Calendar from "./src/pages/Calendar/Calendar"
import Details from "./src/pages/PaidTickets/PaidTickets"
import Initial from "./src/pages/Initial/Initial"
import Login from "./src/pages/Login/Login"
import PaidTickets from "./src/pages/PaidTickets/PaidTickets"
import Register from "./src/pages/Register/Register"
import Scanner from "./src/pages/Scanner/Scanner"
import Terms from "./src/pages/Terms/Terms"

const Stack = createStackNavigator ()
const Tab = createBottomTabNavigator()
const PaymentStack = createStackNavigator ()

function PaymentNavigator () {
  return (
    <PaymentStack.Navigator>
      <PaymentStack.Screen
      name = "Scanner"
      component = {Pokedex}/>
      <PaymentStack.Screen
      name = "Details"
      component = {Details}/>

    </PaymentStack.Navigator>

  )
}

function UserNavigation (){
  return (
    <Tab.Navigator>
      <Tab.Screen 
      name= "Account"
      component = {Account}
      options = {{
        headerShown: false
      }}
      />
      <Tab.Screen 
      name= "PaidTickets"
      component = {PaidTickets}
      options = {{
        headerShown: false
      }}
      />
      <Tab.Screen 
      name= "PaymentNavigator"
      component = {PaymentNavigator}
      options = {{
        headerShown: false
      }}
      />
    </Tab.Navigator>
  )
}


export default function App () {
  return (
    <NavigationContainer>
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


    </NavigationContainer>
  )
}
