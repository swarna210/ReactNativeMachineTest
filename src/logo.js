import React from 'react'
import {
View,StyleSheet,Text,ImageBackground,Image,TouchableOpacity
} from 'react-native'
export default function Logo({navigation}){
    return(
        <View style={Styles.container}>
            <ImageBackground style={Styles.backgroundImage} source={require('../assets/bg.jpg')}
                            >
                <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                    <Image  source={require('../assets/logo.png')} /> 
                </TouchableOpacity>
                </ImageBackground>
           
        </View>
    )
}
const Styles = StyleSheet.create({
    container:{
        // flex:1,
        backgroundColor:"red"
    },
    backgroundImage:{
        height:'100%',
        width:"100%",
        alignItems:'center',
        justifyContent:'center'
    },
    
})