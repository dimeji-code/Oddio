import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useCallback, useState} from 'react';
import { StyleSheet, Text, View, FlatList, ImageBackground, Button, Alert, Dimensions } from 'react-native';
import Color from "../constants/Colors"
import {ITEMS} from "../data/dummy_data"
import {useSelector} from "react-redux"
import {Ionicons} from "@expo/vector-icons"

const WishListScreen = props =>{

    const iths = useSelector(state => state.wishList.items)

    const [currentData, setCurrentData] = useState(iths)

    // console.log(props)
    const handleRefresh = () => {
        setCurrentData(iths);
        // setCurrentData(iths);
    }

    useEffect(()=>{
        props.navigation.setOptions({ 
            headerStyle: {
                backgroundColor: Color.accent,
            },
            headerTintColor: '#1D0432',
            headerTitleStyle: {
            fontWeight: 'bold',
            }}   
    )})



    useEffect(()=>{
        const unsubscribe = props.navigation.addListener('focus', () => {
            // Alert.alert('Refreshed');
            handleRefresh();
        })
        unsubscribe;
    })

        const renderList = item => { 

            return(
            <View style={styles.box}>
                    <Text numberOfLines={2} style={{color:'#170932', fontSize:21, fontFamily:'PingFang SC'}}>{item.item.brand}</Text>
                    <View style={styles.image}>   
                        <ImageBackground style={{width:'100%',height:'100%'}} source={{uri:item.item.image}}/>
                        <View style={styles.detail}>
                            <Text >
                                <Text style={{fontSize:17,fontFamily:'Trebuchet MS'}}>$</Text><Text style={{color:'#03440C'}}>{item.item.price}</Text>
                            </Text>
                            <Ionicons size={23} color="grey" name="notifications-outline"/>
                        </View>
                    </View>
            </View>
            )
        }

    return(
        <View style={styles.screen}>
            {/* <Button title="ready" onPress={ ()=>{}}/> */}
            <FlatList  
            data={currentData} 
            renderItem={renderList} 
            keyExtractor={(item)=>item.id} 
            // horizontal={true}
            decelerationRate={0}
            bounces={true}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        backgroundColor: "#E6EAF5",

    },
    image:{
        width:"100%",
        height: "100%",
        backgroundColor: Color.home,
        shadowColor:"grey", shadowOpacity:0.65, shadowOffset:{x:2,y:4}
    },
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    box:{
        padding:10,
        width:"100%",
        height: 200,
        backgroundColor: "#D4DAEA",
        borderWidth:0.3,
        borderColor:"white",
        shadowColor:"grey", shadowOpacity:0.35, shadowOffset:{x:2,y:4}
    },
    detail:{
        width:"100%",
        position:"absolute",
        flexDirection:"row",
        justifyContent:"space-between",
        padding:5,
    }
})
export default WishListScreen