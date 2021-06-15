import React, {useState} from 'react'
import {Text, View,TouchableWithoutFeedback,Platform, StyleSheet,Image, ImageBackground, TextInput, StatusBar, KeyboardAvoidingView,Keyboard} from 'react-native'
import Buttons from "../../components/Buttons"
import Colors from "../../constants/Colors"
import  * as authActions from "../../store/actions/auth"
import { useDispatch } from "react-redux"

const SignupScreen = props => {
    const [role,setRole]  = useState("")

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const dispatch = useDispatch()

    return(
        
        <KeyboardAvoidingView       
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        // keyboardVerticalOffset={70} 
        style={{flex:1}}
        >
            <StatusBar barStyle="dark-content" hidden={false} />


            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.screen}>
                    <View style={styles.logo}>
                        {/* <Image style={{width:50, height:50}} source={require("../../assets/airpods.jpg")} /> */}
                        <Text style={{fontSize:28, color:"#632C81"}}>⏣dd-i⏣</Text>
                    </View>
                    <Text style={styles.text}>username:</Text>
                    <View style={styles.input}>
                        <TextInput style={{fontSize:16,paddingVertical:10}} autoCorrect={false} onChangeText={setUsername} value={username} />
                    </View>
                    <Text style={styles.text}>password:</Text>
                    <View style={styles.input}>
                        <TextInput style={{fontSize:16,paddingVertical:10}} autoCorrect={false}  onChangeText={setPassword} value={password} />
                    </View>
                    <Text style={styles.text}>confirm password:</Text>
                    <View style={styles.input}>
                        <TextInput style={{fontSize:16,paddingVertical:10}} autoCorrect={false}  onChangeText={setConfirmPassword} value={confirmPassword} />
                    </View>

                    <View style={{flexDirection:"row", justifyContent:"center"}}>
        
                        <View style={{ paddingHorizontal:10}}>
                            <Buttons onPress={()=>dispatch(authActions.authenticate())}  title="SIGNUP" />
                        </View>
                    </View>
                    <View style={styles.info}>
                        <Text> ◁◁◁ Swipe to go back</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>

        </KeyboardAvoidingView>
    )

      
}



const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal:20
    },
    logo:{
        flex:2,
        // backgroundColor:"green",
        justifyContent: 'center',
        alignItems: 'center',
        fontSize:30
    },
    text:{
        fontFamily:"PingFangTC-Semibold", fontSize:16
    },
    info:{
        alignItems: 'center',
        flex:1
    },
    input:{
        borderBottomColor:"black",
        borderBottomWidth:0.4,
        // paddingBottom: 18,
        marginVertical:20,
        // backgroundColor:"black",
    },
    topHalf:{
        flex:1,
        width:"100%",
        height:"100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
        bottomHalf:{
        flex:1,
        width:"100%",
        height:"100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default SignupScreen