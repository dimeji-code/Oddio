import React from 'react';

import {Ionicons} from "@expo/vector-icons"
import {createStackNavigator} from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import LoginScreen from "../screens/auth/LoginScreen"
import SignupScreen,{screenOptions as signupScreenOptions} from "../screens/auth/SignupScreen"

import HomeScreen from '../screens/HomeScreen'
import WishListScreen from '../screens/WishListScreen'
import CartScreen from '../screens/CartScreen'
import AccountScreen from '../screens/AccountScreen'
import SalesScreen from '../screens/SalesScreen'
import GiftScreen from '../screens/GiftScreen'
import SettingsScreen from '../screens/SettingsScreen'
import ItemScreen from '../screens/ItemScreen'
import Colors from "../constants/Colors"

enableScreens();
const MainStack = createNativeStackNavigator();
const WishStack = createNativeStackNavigator();
const CartStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();

// const MainStack = createStackNavigator();
// const WishStack = createStackNavigator();
// const CartStack = createStackNavigator();
// const AuthStack = createStackNavigator();

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


export const MainStackNav = ()=> { 
    return(
      <MainStack.Navigator>
        <MainStack.Screen name="⏣dd-i⏣" component={HomeScreen}  />
        <MainStack.Screen name="ItemScreen" component={ItemScreen}  />
      </MainStack.Navigator>
    )
  }
  
  export const DrawerNav = () => {
    return(
      <Drawer.Navigator initialRouteName="Home" drawerContentOptions={{activeTintColor: "#632C81"}}>
        <Drawer.Screen name="Home" component={MainStackNav} />
        <Drawer.Screen name="Account" component={AccountScreen} />
        <Drawer.Screen name="Sales" component={SalesScreen} />
        <Drawer.Screen name="Gift" component={GiftScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    )
  }
  
  export const  WishStackNav = () => {
    return(
      <WishStack.Navigator>
        <WishStack.Screen name="WishList" component={WishListScreen}  />
      </WishStack.Navigator>
    )
  }
  export const CartStackNav =() =>{
    return(
      <CartStack.Navigator>
        <CartStack.Screen name="Cart" component={CartScreen} />
      </CartStack.Navigator>
    )
  }
 export const TabNav = () =>{
    return(
      <Tab.Navigator tabBarOptions={{activeTintColor:Colors.homeStrong}}>
        <Tab.Screen name="HOME" component={DrawerNav} options={{tabBarIcon:({color})=>(<Ionicons name = "home-outline" size={23} color={color} />)}} />
        <Tab.Screen name="WISHLIST" component={WishStackNav} options={{tabBarIcon:({color})=>(<Ionicons name = "bookmarks-outline" size={23} color={color} />)}} />
        <Tab.Screen name="CART" component={CartStackNav} options={{tabBarIcon:({color})=>(<Ionicons name = "cart-outline" size={23} color={color} />)}} />
      </Tab.Navigator>
    )
  }

  // const AuthStack = createStackNavigator()
  export const AuthNav = () =>{
       return(
               <AuthStack.Navigator>
                  <AuthStack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
                  <AuthStack.Screen name="Signup" component={SignupScreen} options={{headerShown:false}} />
               </AuthStack.Navigator>
       )
   }