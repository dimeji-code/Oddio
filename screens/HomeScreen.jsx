import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity , Alert} from 'react-native';
import Color from "../constants/Colors"
import {Ionicons} from "@expo/vector-icons"
import GridItem from "../components/GridItem"
import ItemScreen from "./ItemScreen"
import CartScreen from "./ItemScreen"
import {ITEMS} from "../data/dummy_data"



const HomeScreen = props =>{

    useEffect(() =>
        props.navigation.setOptions({ 
        headerStyle: {
            backgroundColor: Color.home,
          },
        headerTintColor: '#1D0432',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
            headerLeft:()=>(
                <TouchableOpacity style={{marginLeft:10}} onPress={()=> props.navigation.openDrawer()}>
                <Ionicons name="menu-outline" size={22} color="black"  />
                </TouchableOpacity>
            )
        })
    )
    useEffect(() => {
        const update = props.navigation.addListener('focus', () => {
            Alert.alert('Refreshed');
            console.log(ITEMS)
            // items = ITEMS
        })
        // console.log(ITEMS)

    })
    // console.log(ITEMS)

    const renderItems = (shoppingItem) =>{
        return(
            <GridItem onPress={()=> props.navigation.navigate("ItemScreen",
            {headphoneItem : shoppingItem.item}
            )} 
            image={shoppingItem.item.image} 
            brand={shoppingItem.item.brand} 
            price={shoppingItem.item.price}
            likeState={shoppingItem.item.isLiked}
            />
        )
    }
   
    return(
        <View style={styles.screen}>
            <View style={{height:40, borderBottomWidth:0.3, borderBottomColor:"grey",margin:4,justifyContent:"space-between",flexDirection:'row',borderRadius:5, padding:5, backgroundColor:"white", shadowOpacity:0.1}}>
            <Text style={styles.opt}>Headphones</Text>
            <Text style={styles.opt}>Earphones</Text>
            <Text style={styles.opt}>Wireless</Text>
            </View >
            <FlatList  data={ITEMS} numColumns={2} renderItem={renderItems} keyExtractor={(item) => item.id } />
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
    },
})
export default HomeScreen