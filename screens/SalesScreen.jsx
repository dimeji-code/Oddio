import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, Button } from 'react-native';

import {Ionicons} from "@expo/vector-icons"

const SalesScreen = props =>{
    return(
        <View style={styles.screen}>
            <Text>Sales Screen</Text>
            <Button title="SALES"  onPress={()=>{}}/>
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

export default SalesScreen;