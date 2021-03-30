import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from './screens/HomeScreen'
import WishListScreen from './screens/WishListScreen'
import CartScreen from './screens/CartScreen'
import AccountScreen from './screens/AccountScreen'
import SalesScreen from './screens/SalesScreen'
import GiftScreen from './screens/GiftScreen'
import SettingsScreen from './screens/SettingsScreen'
import ItemScreen from './screens/ItemScreen'
import Colors from "./constants/Colors"

import {Ionicons} from "@expo/vector-icons"
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

// const MainStack = createStackNavigator();
// const WishStack = createStackNavigator();
// const CartStack = createStackNavigator();
enableScreens();
const MainStack = createNativeStackNavigator();
const WishStack = createNativeStackNavigator();
const CartStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function MainStackNav(){ 
  return(
    <MainStack.Navigator>
      <MainStack.Screen name="⏣dd-i⏣" component={HomeScreen}  />
      <MainStack.Screen name="ItemScreen" component={ItemScreen}  />
    </MainStack.Navigator>
  )
}

function DrawerNav(){
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

function WishStackNav(){
  return(
    <WishStack.Navigator>
      <WishStack.Screen name="WishList" component={WishListScreen}  />
    </WishStack.Navigator>
  )
}
function CartStackNav(){
  return(
    <CartStack.Navigator>
      <CartStack.Screen name="Cart" component={CartScreen} />
    </CartStack.Navigator>
  )
}
function TabNav(){
  return(
    <Tab.Navigator tabBarOptions={{activeTintColor:Colors.homeStrong}}>
      <Tab.Screen name="HOME" component={DrawerNav} options={{tabBarIcon:({color})=>(<Ionicons name = "home-outline" size={23} color={color} />)}} />
      <Tab.Screen name="WISHLIST" component={WishStackNav} options={{tabBarIcon:({color})=>(<Ionicons name = "bookmarks-outline" size={23} color={color} />)}} />
      <Tab.Screen name="CART" component={CartStackNav} options={{tabBarIcon:({color})=>(<Ionicons name = "cart-outline" size={23} color={color} />)}} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <TabNav />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
