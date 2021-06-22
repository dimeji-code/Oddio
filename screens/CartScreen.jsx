import React, { useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import Color from "../constants/Colors"
import { useSelector } from "react-redux"

const CartScreen = props => {

    const amt = useSelector(state => state.cart.totalAmount)
    const listData = useSelector(state => {
        const transformedItems = [];
        for (const key in state.cart.itemList) {
            transformedItems.push({
                prodId: key,
                title: state.cart.itemList[key].productTitle,
                quan: state.cart.itemList[key].quantity,
                price: state.cart.itemList[key].productPrice,
                sum: state.cart.itemList[key].sum
            })
        }
        return transformedItems
    })

    // console.log(listData)

    useEffect(() =>
        props.navigation.setOptions({
            headerStyle: {
                backgroundColor: Color.primary,
            },
            headerTintColor: '#1D0432',
            headerTitleStyle: {
                fontWeight: 'bold',
            }

        }, []))


    const ren = (item) => {
        console.log("i am here")
        console.log(item)
        return (
            <View style={styles.item}>
                <View style={styles.card}>
                    <View style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, backgroundColor: "#D4AA7D", height: 40, justifyContent: "center", padding: 5 }}>
                        <Text style={{ color: 'white' }}>{item.item.title}</Text>
                    </View>
                    <View style={{ padding: 6 }}>
                        <Text style={{ color: '#1E2019' }}>{item.item.quan}</Text>
                        <Text style={{ color: '#8DAB7F' }}>${item.item.price}</Text>
                    </View>
                </View>
            </View>
        )
    }

    return (

        <View style={styles.screen}>
            <View style={styles.items}>
                <FlatList data={listData} renderItem={ren} keyExtractor={item => item.prodId} />
            </View>
            <Text>${amt}</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    items: {
        width: "100%",
        height: "80%",
        paddingTop: 5
    },
    item: {
        height: 130,
        width: "100%",
        paddingHorizontal: 20,
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 10,
        elevation: 4,
        shadowOpacity: 0.3,
        shadowOffset: { x: 2, y: 1 }
    }

})
export default CartScreen