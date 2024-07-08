import * as React from "react"
import {NavigationContainer} from "@react-navigation/native"
// import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { createDrawerNavigator } from '@react-navigation/drawer';
import {AboutScreen} from "../screens/AboutScreen"
import {HomeScreen} from "../screens/HomeScreen"

const MyTheme = {
  colors: {
    // primary: "#f9f9f9",
    // background: "#0e1d31",
    // card: "#0e1d31",
    // text: "#f9f9f9",
  },
}


const Drawer = createDrawerNavigator();
    

// const Tab = createBottomTabNavigator()

export const AppNavigation = () => {
  return (
    <NavigationContainer theme={MyTheme} initialRouteName="Axess">

    
    <Drawer.Navigator>
        <Drawer.Screen name="Axess" component={HomeScreen} />
        <Drawer.Screen name="Opera" component={AboutScreen} />
        <Drawer.Screen name="TNG" component={AboutScreen} />
        <Drawer.Screen name="1C" component={AboutScreen} />
        <Drawer.Screen name="Sber Device" component={AboutScreen} />
    </Drawer.Navigator>


    {/* <NavigationContainer theme={MyTheme} initialRouteName="Ады-Jол"> */}
      
    </NavigationContainer>
  )
}

{/* <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer> */}