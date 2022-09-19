import "react-native-gesture-handler"

import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {createStackNavigator} from "@react-navigation/stack"
import {NavigationContainer} from "@react-navigation/native"
import Icon from "@expo/vector-icons/MaterialCommunityIcons"

import Address from "./src/pages/Address/Address"
import Account from "./src/pages/Account/Account"
import Calendar from "./src/pages/Calendar/Calendar"
import Details from "./src/pages/Details/Details"
import Initial from "./src/pages/Initial/Initial"
import Login from "./src/pages/Login/Login"
import PaidTickets from "./src/pages/PaidTickets/PaidTickets"
import Register from "./src/pages/Register/Register"
import Scanner from "./src/pages/Scanner/Scanner"
import Terms from "./src/pages/Terms/Terms"

const Stack = createStackNavigator ()
const Tab = createBottomTabNavigator()
const AccountNavigation = createStackNavigator ()

function UserNavigation () {
  return (
    <AccountNavigation.Navigator>
      <AccountNavigation.Screen
      name = "Payment"
      component = {TabBarNavigation}
      options={{
        headerShown: false
      }}
      />

      <AccountNavigation.Screen
      name = "Details"
      component = {Details}
      options={{
        headerShown: false,
        tabBarStyle: {display:"none"}
        
      }}/>

    </AccountNavigation.Navigator>

  )
}

function TabBarNavigation (){
  return (
    <Tab.Navigator
    initialRouteName="Account"
    screenOptions={{
      tabBarActiveTintColor: "#ee9b00",
      tabBarInactiveTintColor: "#fff",
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: "#0a9396",
        
      }
    
    }}>
      <Tab.Screen 
      name= "Account"
      component = {Account}
      
      options = {{
        tabBarIcon: ({color}) => (<Icon name="account" size={36} color= {color}/>),
        headerShown: false,
      }}
      />
      <Tab.Screen 
      name= "PaidTickets"
      component = {PaidTickets}
      options = {{
        tabBarIcon: ({color}) => (<Icon name="playlist-check" size={36} color= {color}/>),
        headerShown: false,
        
      }}
      />
      <Tab.Screen 
      name= "Scanner"
      component = {Scanner}
      options = {{
        tabBarIcon: ({color}) => (<Icon name="barcode-scan" size={36} color= {color}/>),
        headerShown: false,
       
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
