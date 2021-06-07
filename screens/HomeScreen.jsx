import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState, useCallback} from 'react';
import {useSelector} from "react-redux"
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity , Alert} from 'react-native';
import Color from "../constants/Colors"
import {Ionicons} from "@expo/vector-icons"
import GridItem from "../components/GridItem"


const HomeScreen = props =>{

    const allItems = useSelector(state => state.wishList.allItems)
    const likedItems = useSelector(state => state.wishList.items)
    const [refreshing, setRefreshing] = useState(false)
    const [initData,setInitData] = useState(allItems)

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

const handleRefresh = () => {
     setInitData(allItems)
    console.log(allItems)
}

    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
            // Alert.alert('Refreshed');
            handleRefresh()


        })

    },[likedItems])

 

    const renderItems = (shoppingItem) =>{
        let updatedShoppingItem = allItems.find(item => item.id ===shoppingItem.item.id)
        // console.log(updatedShoppingItem)
        return(
            <GridItem onPress={()=> props.navigation.navigate("ItemScreen",
            {
                // headphoneItem : shoppingItem.item
                headphoneItem : updatedShoppingItem
            }
            )} 
            id = {updatedShoppingItem.id}
            image={updatedShoppingItem.image} 
            brand={updatedShoppingItem.brand} 
            price={updatedShoppingItem.price}
            likeState={updatedShoppingItem.isLiked}
            ven = {(updatedShoppingItem.isLiked)?
                <Ionicons name="heart-outline" size={25} color="red"/>:
                <Ionicons name="heart-dislike-outline" size={25} color="black"/>
            }
            />
        )
    }
   
    return(
        <View style={styles.screen}>
        <View style={{height:40, borderBottomWidth:0.3, borderBottomColor:"grey",margin:4,justifyContent:"space-between",flexDirection:'row',borderRadius:5, padding:5, backgroundColor:"white", shadowOpacity:0.1}}>
        <TouchableOpacity style={styles.opt}><Text>Headphones</Text></TouchableOpacity>
        <TouchableOpacity style={styles.opt}><Text>Speakers</Text></TouchableOpacity>
        <TouchableOpacity style={styles.opt}><Text>Wireless</Text></TouchableOpacity>
       
        </View >
        <FlatList  
        data={initData} 
        numColumns={2} 
        renderItem={renderItems} 
        keyExtractor={(item) => item.id } 
        extraData={allItems}
        onRefresh={handleRefresh}
        refreshing={refreshing}
        />
    </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
    },
})
export default HomeScreen