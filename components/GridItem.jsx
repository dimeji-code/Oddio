import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import Color from "../constants/Colors"
import {Ionicons} from "@expo/vector-icons"

const GridItem = props =>{
    let likeState  = props.likeState;
    const [isLiked,setIsLiked] = useState(likeState)
    console.log("my props:",props);


function SwitchLikeState(){
        if (isLiked === true){
            return(<Ionicons name="heart-outline" size={25} color="red"/>)
            console.log("it is liked")
        }else{
            return <Ionicons name="heart-dislike-outline" size={25} color="black"/>  
            console.log("not liked")

        }
    }

    return(
        <View style={styles.list}>
            <TouchableOpacity style={styles.imgContainer} onPress={props.onPress}>
                 <Image resizeMode='cover' style={{width:'100%', height:'100%', marginTop:0, backgroundColor:"white"}} source={props.image}/>
            </TouchableOpacity>
            <Text style={{fontSize:15, fontWeight:'bold', marginLeft:5}}>{props.brand}</Text>
            <View style={{padding:8,flexDirection:'row',justifyContent:"space-between",alignItems:"flex-end"}}>
                <Text style={{color:'green'}}>${props.price}</Text>
                <TouchableOpacity >
                     <Ionicons name="heart-dislike-outline" size={25} color="black"/>
                </TouchableOpacity>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    list:{
        height:290,
        margin:1,
        borderColor:"grey",
        borderWidth:0.26,
        flex:1,
        margin: 4,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        backgroundColor:"#EAE8F3",
        shadowOpacity: 0.2,
        shadowOffset: {x:0,y:4},


    },
    imgContainer:{
        height:'75%',
    }, 
    opt:{
        color:"#1D0432",
        fontWeight: 'bold',
        // fontFamily:
    }
})
 export default GridItem