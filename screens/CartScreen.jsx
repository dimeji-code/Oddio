import { StatusBar } from 'expo-status-bar';
import React,{useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Color from "../constants/Colors"
const CartScreen = props =>{

    useEffect(()=>props.navigation.setOptions({ 
        headerStyle: {
            backgroundColor: Color.primary,
          },
        headerTintColor: '#1D0432',
        headerTitleStyle: {
          fontWeight: 'bold',
        }}))

    return(
        <View style={styles.screen}>
            <Text>Hey</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default CartScreen