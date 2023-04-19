import React,{useEffect,useState} from 'react'
import Swiper from 'react-native-swiper'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {
View,StyleSheet,Text,ImageBackground,Image,TouchableOpacity,ScrollView,FlatList,VirtualizedList
} from 'react-native'
import axios from 'axios';

export default function HomeScreen(){
    const [data, setData] = useState([]);
    // api call
    useEffect(() => {
        axios.get('http://proteinium.iroidtechnologies.in/api/v1/get-mealcategories')
          .then(response => setData(response.data))
          .catch(error => console.error(error))
          
      }, []);
      console.log("data is ",data)
    // api call
    const renderItem = ({item}) => {
        return(
            <View>


                {/*  */}
                 <View style={Styles.secondContainer}>
                            <ImageBackground
                                style={Styles.imageBackground} 
                                source={require('../../assets/chicken.jpg')}>
                            <View style={Styles.overlay}>
                                <View style={{flexDirection:'row'}}>
                                <Text style={Styles.textView}>
                                    {/* {item.address.geo.lat} */}
                                    </Text>
                                </View>
                                </View>
                        </ImageBackground>
                        <View style={Styles.iconContainer}>
                                    <AntDesign name='up' color='#1ec5f7' size={30}/>
                                </View>
                </View>
                
             </View>
            // 
           
        )

    }
    return(
        <View style={Styles.container}>
                <View style={Styles.slideContainer}>
                    <Swiper showsButtons={false}>
                        <View style={Styles.slide1}>
                       <Image style={Styles.slideImage1} source={require('../../assets/images.jpg')}/>
                        </View>
                    <View style={Styles.slide2}>
                    <Image style={Styles.slideImage1} source={require('../../assets/images.jpg')}/>
                    </View>
                    <View style={Styles.slide3}>
                    <Image style={Styles.slideImage1} source={require('../../assets/images.jpg')}/>
                    </View>
                </Swiper>
           </View>
               
            <FlatList style={{marginBottom:50}}
                data={data}
                renderItem={renderItem}
                ListHeaderComponent={() => (
                    <View>
                    {/* <Text>Header Component</Text> */}
                    </View>
                )}
                ListFooterComponent={() => (
                    <View>
                    </View>
                )}
    />
        </View>
        
    )
}
const Styles = StyleSheet.create({
    container:{
        flex:1,
    },
    slideImage1:{
        height:'100%',
        width:'100%',
        borderRadius:20,
        resizeMode:'contain'
    },
    wrapper: {
        borderRadius:20,
        backgroundColor:'red',
        height:100
    },
    slideContainer:{
        height:180,
        width:'90%',
        marginTop:15,
        marginLeft:20,
        borderRadius:20
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:20
      },
      slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',


    },
    // slider ends
secondContainer:{
    marginTop:20,
    // height:300,
    width:'90%',
    marginLeft:20,
    borderRadius:20
},
imageBackground:{
    resizeMode:'contain',
    overflow: 'hidden',
    height:190,
    width:'100%',
    borderRadius:20,
    // marginBottom:5
},
overlay:{
    height:60,
    width:'100%',
    marginTop:155,
    backgroundColor: 'rgba(255,255,255,0.5)'
},
textView:{
    fontSize:20,
    color:"#fff",
    fontWeight:'bold',
    marginLeft:20,
    marginTop:5
},
iconContainer:{
    height:50,
    width:50,
    backgroundColor:'#fff',
    borderRadius:50,
    marginBottom:20,
    alignItems:"center",
    justifyContent:'center',
    marginLeft:250,
    marginTop:-25
}  

})