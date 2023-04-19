import React from 'react';
import {StyleSheet,Image,View} from 'react-native'
import Icon  from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons"
import Octicons from "react-native-vector-icons/Octicons"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Logo from './src/logo'
import Login from './src/login'
// bottom tab
import HomeScreen from './src/home/homeScreen';
import Meals from './src/home/meals';
import Profile from './src/home/profile';
import More from './src/home/more';
const Stack = createStackNavigator()
const BottomTab = createBottomTabNavigator()
function Mystack(){
  return(
    <Stack.Navigator>
     <Stack.Screen name='Logo' component={Logo} options={{headerShown:false}}/>
     <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
     <Stack.Screen name='BottomTab' component={MyBottomTab} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}
function MyBottomTab(){
  return(
    <BottomTab.Navigator 
    screenOptions= {{
      tabBarLabelStyle:{fontSize:14},
      tabBarItemStyle:{width:100},
      tabBarStyle:{backgroundColor:'#fff',height:70,fontWeight:'bold',},
      // editing
      headerRight:()=> <View style={{flexDirection:'row'}}>
                  <Ionicons style={{marginLeft:30}} 
                      name='notifications' size={30} color='#ffffff'/> 
                  <Octicons name='dot-fill' size={30} color='#ff0000' 
                        containerStyle={{ 
                        marginTop:-100,marginLeft:-50}}
                        iconStyle={{ marginTop:100,backgroundColor:'yellow',marginLeft:50}}
                         />
             </View>
                ,
                // editing
      headerStyle:{backgroundColor:'#1aa3ff',height:70},
      headerTitle:()=> <Image style={Styles.image} source={require('./assets/homelogo.png')}
      />
    }}
    >
      <BottomTab.Screen  name='Home' component={HomeScreen} 
          options ={{
            tabBarActiveTintColor:'#33adff',
            tabBarInactiveTintColor:'#bfbfbf',
            tabBarIcon:({focused})=> 
                focused? <Icon name="home" size={29} color='#33adff'/>:<Icon name="home" size={29} color='#bfbfbf'/>
          }}
          />
      <BottomTab.Screen name='Meals' component={Meals} options={{headerShown:false,
      tabBarActiveTintColor:'#33adff',
      tabBarInactiveTintColor:'#bfbfbf',
      tabBarIcon:({focused})=> 
          focused? <Icon name="calendar" size={29} color='#33adff'/>:<Icon name="calendar" size={29} color='#bfbfbf'/>
      }}/>
      <BottomTab.Screen name='Profile' component={Profile} options={{headerShown:false,
            tabBarActiveTintColor:'#33adff',
            tabBarInactiveTintColor:'#bfbfbf',
            tabBarIcon:({focused})=> 
                focused? <Icon name="user" size={29} color='#33adff'/>:<Icon name="user" size={29} color='#bfbfbf'/>}}/>
      <BottomTab.Screen name='More' component={More} options={{headerShown:false,
            tabBarActiveTintColor:'#33adff',
            tabBarInactiveTintColor:'#bfbfbf',
            tabBarIcon:({focused})=> 
                focused? <Icon name="more-horizontal" size={29} color='#33adff'/>:<Icon name="more-horizontal" size={29} color='#bfbfbf'/>}}/>
      </BottomTab.Navigator>
  )
}
export default function App() {
  return (
    <NavigationContainer>
      <Mystack/>
    </NavigationContainer>
  );
};


const Styles =StyleSheet.create({
  image:{
    height:120,
    width:200,
    marginLeft:70,
    marginTop:20
  },
  
})
       
  


