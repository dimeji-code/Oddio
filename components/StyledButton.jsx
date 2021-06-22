import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, FlatList } from 'react-native';
import {Ionicons} from "@expo/vector-icons"

const StyledButton = props => {
    return(
        <View style={styles.styledButton}>
            <View style={{paddingRight:5}}>
                <Text style={{ fontFamily:"PingFangSC-Medium"}}>{props.title}</Text>
            </View>
            <TouchableOpacity onPress={props.onPress}>
                <View style={{
                    backgroundColor:props.color,
                    justifyContent:"center",
                    alignItems: 'center',
                    width:40, height:40,
                    borderRadius: 8}}>
                    <Ionicons name={props.icon} size={25} color="white" style={{ shadowOpacity:0.3,shadowOffset:{x:2,y:5}}}/>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    styledButton:{
        flexDirection:'row',
        backgroundColor:'white',
        height:40,
        minWidth:90, 
        paddingLeft:5,
        justifyContent:"space-between",
        alignItems: 'center',
        borderRadius:8,
    },
    gift:{

    },
})

export default StyledButton