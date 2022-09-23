import Account from "../../pages/Account/Account"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Icon from "@expo/vector-icons/MaterialCommunityIcons"
import PaidTickets from "../../pages/PaidTickets/PaidTickets"
import Scanner from "../../pages/Scanner/Scanner"

const Tab = createBottomTabNavigator()

export default function TabBarNavigation (){
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
  