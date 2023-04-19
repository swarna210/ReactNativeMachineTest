import React ,{useState} from 'react'
import {
View,StyleSheet,Text,TextInput,TouchableHighlight
} from 'react-native'
import axios from 'axios';


export default function Login({navigation}){
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    async function login(){
        const LOGIN_API_URL = 'http://proteinium.iroidtechnologies.in/api/v1/login';

        const loginData = {
            username: email,
            password: password,
        };
    
        axios.post(LOGIN_API_URL, loginData)
        .then(response => {
            console.log('Login successful:', response.data);
           navigation.navigate('BottomTab')
        })
        .catch(error => {
            console.error('Login failed:', error);
        });
    }
    
    // axios ends
    return(
        <View>
            <View >
                <Text style={Styles.skiptext}>Skip</Text>
            </View>
            <View style={Styles.formContainer}>
                <Text style={Styles.signText}>Sign In</Text>
                <Text style={Styles.detailsText}>Enter Your Details</Text>
                <TextInput style={Styles.inputText} 
                    onChangeText={(data) => setEmail(data)}
                    placeholder='User Name' placeholderTextColor='#cccccc'></TextInput>
                <TextInput style={Styles.inputText}
                    secureTextEntry={true} 
                    onChangeText={(data) => setPassword(data)}
                    placeholder='Password' placeholderTextColor='#cccccc'></TextInput>
                        <TouchableHighlight style={Styles.button} 
                        onPress={login}
                        // onPress={()=> navigation.navigate('BottomTab')}
                            underlayColor='transparent'>
                            <Text style={Styles.buttontext}>Sign In</Text>
                        </TouchableHighlight>
                <Text style={{color:'#000000'}}>Forgot your password?</Text>
                <View style={Styles.Innercontainer}>
                    <Text style={{color:'#bfbfbf'}}>Don't have an Account?</Text>
                    <Text style={Styles.signupText}>Sign Up</Text>
                </View>
            </View>
        </View>
    )
}
const Styles = StyleSheet.create({
    container:{
       flex:1
    },
    skiptext:{
        fontWeight:'bold',
        fontSize:20,color:"black",
        marginLeft:300,
        marginTop:20
    },
    formContainer:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:50
    },
    signText:{
        fontSize:25,
        fontWeight:'bold',
        color:'#000000',
        marginBottom:20
    },
    detailsText:{
        marginBottom:20,
        color:'#bfbfbf'
        
    },
    inputText:{
        backgroundColor:'#e6e6e6',
        width:290,
        marginBottom:20,
        borderRadius:50,
        height:60,
        paddingLeft:50,
        fontSize:15
    },
    button:{
        alignItems:'center',
        justifyContent:"center",
        backgroundColor:"#66c2ff",
        borderRadius:50,
        marginBottom:20
    },
    buttontext:{
        color:'#ffffff',
        width:290,
        paddingLeft:120,
        height:60,
        paddingTop:20,
        fontWeight:'bold'
    },
    Innercontainer:{
        flexDirection:'row',
        marginTop:20
    },
    signupText:{
        color:"#1aa3ff",
        marginLeft:10
    }
})