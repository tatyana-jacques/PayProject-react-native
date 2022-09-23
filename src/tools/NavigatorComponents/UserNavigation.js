import {createStackNavigator} from "@react-navigation/stack"
import Details from "../../pages/Details/Details"
import TabBarNavigation from "./TabNavigator"

const AccountNavigation = createStackNavigator ()

export default function UserNavigation () {
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
