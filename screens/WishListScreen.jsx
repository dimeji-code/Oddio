import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useCallback, useState} from 'react';
import { StyleSheet, Text, View, FlatList, Image, Button, Alert, Dimensions } from 'react-native';
import Color from "../constants/Colors"
import {ITEMS} from "../data/dummy_data"

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const WishListScreen = props =>{

    const [currentData, setCurrentData] = useState(ITEMS.filter(item => item.isLiked === true))

    // console.log(props)
    const handleRefresh = () => {
         setCurrentData( ITEMS.filter(item => item.isLiked === true));
    }

    useEffect(()=>{
        // console.log(props);
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
    })

        // const renderList = item => {

        //     return(
        //     <View style={styles.box}>
        //         <View style={styles.content}>
        //             <View style={styles.image}>
        //                 <Image style={{width:'100%',height:'100%'}} source={item.item.image}/>
        //             </View>
        //             <View style={styles.title}>
        //               <Text numberOfLines={2} style={{color:'#170932', fontSize:21}}>{item.item.brand}</Text>
        //               <Text style={{color:'#289C5D'}}>{item.item.price}</Text>
        //             </View>
        //         </View>
        //     </View>
        //     )
        // }

        const renderList = item => {

            return(
            <View style={styles.box}>
                    <View style={styles.image}>
                        <Image style={{width:'100%',height:'100%'}} source={item.item.image}/>
                    </View>
                    <View style={styles.title}>
                      <Text numberOfLines={2} style={{color:'#170932', fontSize:21}}>{item.item.brand}</Text>
                      <Text style={{color:'#289C5D'}}>{item.item.price}</Text>
                    </View>
            </View>
            )
        }

    return(
        <View style={styles.screen}>
            <Button title="ready" onPress={ ()=>{}}/>
            <FlatList  data={currentData} 
            renderItem={renderList} 
            keyExtractor={(item)=>item.id} 
            horizontal={true}
            decelerationRate={0}
            bounces={false}
            // pagingEnabled={true}
            // style={{width:'400%'}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        backgroundColor: "#E6EAF5",
        marginHorizontal:4,

    },
    // box:{
    //     width:"100%",
    //     height:160,
    //     // backgroundColor: Color.accent,
    //     backgroundColor: "#D4DAEA",
    //     marginVertical:4,
    //     borderWidth:0.3,
    //     borderColor:"white",
    //     shadowColor:"grey", shadowOpacity:0.35, shadowOffset:{x:2,y:4}
    // },
    content:{
        flexDirection:'row',
    },
    image:{
        width:"100%",
        height: "100%",
        backgroundColor: Color.home,
        shadowColor:"grey", shadowOpacity:0.65, shadowOffset:{x:2,y:4}
    },
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    box:{
        padding:10,
        marginHorizontal:10,
        width: windowWidth-10,
        height: "80%",
        // height:"70%",
        // backgroundColor: Color.accent,
        backgroundColor: "#D4DAEA",
        // marginVertical:4,
        // marginHorizontal:10,
        borderWidth:0.3,
        borderColor:"white",
        shadowColor:"grey", shadowOpacity:0.35, shadowOffset:{x:2,y:4}
    },
})
export default WishListScreen