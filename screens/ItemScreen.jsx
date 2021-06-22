import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, FlatList } from 'react-native';
import Color from "../constants/Colors"
import {Ionicons} from "@expo/vector-icons"
import StyledButton from "../components/StyledButton"
import * as cartActions from "../store/actions/cart"
import {useDispatch} from "react-redux"

const ItemScreen = props=>{

    const item = props.route.params.headphoneItem;
    const dispatch = useDispatch()

    useEffect(() =>
        props.navigation.setOptions({ 
        headerLargeTitle: true,//LOVELY
        headerTitle:item.brand,
        headerStyle: {
            backgroundColor: Color.home,
        },
        headerTintColor: '#1D0432',
        headerTitleStyle: {
            fontWeight: 'bold',
         },
      }) 
    )


    return(
        <View style={styles.screen}>
            <View style={styles.image}>
             <Image resizeMode="cover" style={{width:'100%', height:'100%',  backgroundColor:"white"}}  source={{uri:props.route.params.headphoneItem.image}}/>
            </View>
            <View style={styles.mid}>
                <Text style={{color:'green', fontSize:18}}>${item.price}</Text>
                <Text style={{fontSize:20, }}>{item.brand}</Text>
            </View>
            <View style={styles.bottom}>
                <View style={{marginLeft:"5%"}}>
                    <Text style={{color:'#1D0432',fontWeight:'bold'}}>QUALITIES</Text>
                    <FlatList style={{width:'100%'}} data={item.tags}  renderItem={(headphone)=>(<View style={styles.qualities}><Text >{headphone.item}</Text></View>)} keyExtractor={(item)=>item} />
                </View>
                <View style={{marginRight:"5%"}}>
                    <View style={styles.shadow}>
                        <StyledButton color={Color.home} title="Gift Item" icon="gift-outline" />
                    </View>
                    <View style={styles.shadow}>
                        <StyledButton color={Color.primary} title="Add to Cart" icon="cart-outline" onPress= {()=>{dispatch(cartActions.addToCart(item))}} />
                    </View>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,

    },
    image:{
        flex:8,
        width:"100%",
        height:"65%",
        shadowOpacity: 0.5,
        shadowOffset:{x:1,y:40}
    },
    mid:{
        flex:1, 
        justifyContent:"space-between",
        flexDirection:'row',
        padding:5,
    },

    qualities:{
        flexDirection:'row',

    },
    bottom:{
        flex:2,
        justifyContent:"space-between",
        flexDirection:'row',
    },
    shadow:{
        elevation:5,
        shadowOpacity:0.3,
        shadowOffset:{x:1,y:2},
        paddingBottom:8
    }
})

export default ItemScreen