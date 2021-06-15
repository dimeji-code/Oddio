import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, FlatList } from 'react-native';
import Color from "../constants/Colors"
import {Ionicons} from "@expo/vector-icons"

const ItemScreen = props=>{

    const item = props.route.params.headphoneItem;

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
                    <View style={styles.buttons}>
                        <View style={{paddingRight:5}}>
                         <Text style={{ fontFamily:"PingFangSC-Medium"}}>Gift Item</Text>
                        </View>
                        <TouchableOpacity>
                            <View style={styles.gift}>
                                <Ionicons name="gift-outline" size={25} color="white" style={{ shadowOpacity:0.3,shadowOffset:{x:2,y:5}}}/>
                            </View>
                        </TouchableOpacity>
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
    buttons:{
        flexDirection:'row',
        // backgroundColor:'red',
        height:40,
        minWidth:90, 
        justifyContent:"space-between",
        alignItems: 'center'
    },
    gift:{
        backgroundColor:Color.home,
        justifyContent:"center",
        alignItems: 'center',
        width:40, height:40,
        borderRadius: 8
    }
})

export default ItemScreen