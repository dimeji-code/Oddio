import React, {useEffect} from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import {Ionicons} from "@expo/vector-icons"


const Buttons = props =>{
    const large = props.large
    const ioniconName = props.ionicon


    return(
    <View style={styles.container}>
        <TouchableOpacity style={{
            padding:5,
            height:40,
            maxWidth:(large?400:200),
            minWidth:(large? 300:100),
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: props.col,
            borderWidth:1.3,
            borderRadius: 4}} 
            onPress={props.onPress} >
            <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center",}}>
                {ioniconName && <Ionicons name={ioniconName} size={20} color={props.col} />}
                <Text style={{        
                    fontSize:20,
                    fontFamily:"PingFang SC",
                    color:props.col
                    }}> {props.title}</Text>
            </View>
        </TouchableOpacity>
        
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        paddingVertical:10,
    },

})


export default Buttons