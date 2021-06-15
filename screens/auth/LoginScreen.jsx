import React, {useState} from 'react'
import {Text,Button, View,TouchableWithoutFeedback,Platform, StyleSheet, Image, TextInput, StatusBar, KeyboardAvoidingView,Keyboard} from 'react-native'
import Buttons from "../../components/Buttons"
import Colors from "../../constants/Colors"
import  * as authActions from "../../store/actions/auth"
import { useDispatch } from "react-redux"

const LoginScreen = props => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()
    return(
        <KeyboardAvoidingView       
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        // keyboardVerticalOffset={100} 
        style={{flex:1, backgroundColor:"white"}}
        >
            <StatusBar barStyle="dark-content" hidden={false}  />
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} >

                    <View  style={styles.screen} >
                        <View style={styles.logo}>
                            <Text style={styles.image}>⏣dd-i⏣</Text>
                        </View>

                        <Text style={styles.text}>username</Text>
                        <TextInput returnKeyType="done" style={styles.inputText}  onChangeText={setUsername} value={username} />
                        <Text style={styles.text}>password</Text>
                        <TextInput returnKeyType="done" style={styles.inputText} onChangeText={setPassword} value={password} />

                        <View style={styles.buttonPack}>
                            <View style={styles.buttonContainer}>
                                <Buttons onPress={() =>dispatch(authActions.authenticate())} title="LOGIN" />
                            </View>
                            <View style={styles.buttonContainer}>
                                <Buttons onPress={() =>props.navigation.navigate("Signup")}  title="SIGNUP" />
                            </View>
                        </View>
                        <Button  color="grey" title="Forgot password?" onPress={()=>{}} />
                    </View>

            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>

    )
}

const styles = StyleSheet.create({
    screen:{
        paddingHorizontal:30,
        paddingTop:50,
        justifyContent: "space-around"

    },
    logo:{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:80,
        marginTop:80,
    },
    image:{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:40,
        marginTop:45,
        fontSize:28,
        color: "#632C81"
    },
    input:{
        borderBottomColor:"black",
        borderBottomWidth:0.4,
        marginVertical:20,
    },
    text:{
        fontFamily:"PingFangTC-Semibold", fontSize:16
    },
    inputText:{
        fontSize:16,
        paddingBottom:6,
        borderBottomColor:"black",
        borderBottomWidth:0.4,
        marginVertical:29,
    },
    buttonPack:
    {flexDirection:"row", justifyContent:"center"}
    ,
    buttonContainer:
    {paddingHorizontal:10}
})

export default LoginScreen