import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';

import {Ionicons} from "@expo/vector-icons"

const AccountScreen = props =>{
    return(
        <View style={styles.screen}>
            <Text>Account</Text>
        </View> 
    )
}
const  styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default AccountScreen;