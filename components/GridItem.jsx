import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState, useCallback} from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import Color from "../constants/Colors"
import {Ionicons} from "@expo/vector-icons"
import {useSelector, useDispatch} from "react-redux"
import * as wishListActions from "../store/actions/wishlist"
import {ITEMS} from "../data/dummy_data"

const GridItem = props =>{
    const dispatch = useDispatch()
    let likeState  = props.likeState;
    // console.log(props)
    let current = useSelector(state=>state.wishList.allItems).find(item => item.id === props.id)
    let lik = current.isLiked
    const [isLiked,setIsLiked] = useState(lik)

    useEffect(() =>{

        console.log("whhyyyy meee ==============================================/n=======================")
    },[likeState,current])

    function SwitchIcon () {
        if (isLiked === true){
            return(<Ionicons name="heart-outline" size={25} color="red"/>)

        }else{
            return <Ionicons name="heart-dislike-outline" size={25} color="black"/>  
 

        }
    }

    const likeHandler = liked =>{
        if (liked  === false){
            dispatch(wishListActions.addToWishlist(props.id));
            setIsLiked(true)
            props.likeState = true
            current.isLiked = true


        }else{
            dispatch(wishListActions.removeFromWishlist(props.id));
            setIsLiked(false)
            props.likeState = false
            current.isLiked = false


        }
    }


    return(
        <View style={styles.list}>
            <TouchableOpacity style={styles.imgContainer} onPress={props.onPress}>
                 <Image resizeMode='cover' style={{width:'100%', height:'100%', marginTop:0, backgroundColor:"white"}} source={{uri: props.image}}/>
            </TouchableOpacity>
            <Text style={{fontSize:15, fontWeight:'bold', marginLeft:5}}>{props.brand}</Text>
            <View style={{padding:8,flexDirection:'row',justifyContent:"space-between",alignItems:"flex-end"}}>
                <Text style={{color:'green'}}>${props.price}</Text>
        {       <TouchableOpacity onPress={()=> likeHandler(isLiked)}>
                     {/* <SwitchIcon /> */}
                     {props.ven}
                </TouchableOpacity>
}

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