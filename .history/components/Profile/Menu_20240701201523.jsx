import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {Colors} from './../../constants/Colors'
import { useRouter } from 'expo-router'
const Menu = () => {
    const menu=[
        {
            id:1,
            name:'Add Business',
             icon:require('./../../assets/images/add.png'),
             path:'/business/add-business',

        },
         {
            id:2,
            name:'My Business',
             icon:require('./../../assets/images/business-and-trade.png'),
             path:'',

        },
         {
            id:3,
            name:'Share App',
             icon:require('./../../assets/images/share_1.png'),
             path:'',

        },
         {
            id:4,
            name:'Logout',
             icon:require('./../../assets/images/logout.png'),
             path:'',

        },
    ]

    const router =useRouter();
    const onMenuClick=(item)=>{
router.push(item.path)
    }
  return (
    <View style={{
        marginTop:50,

    }}>
      <FlatList
      numColumns={2}
      data={menu}
      renderItem={({item,index})=>(
        <TouchableOpacity  
        onPress={()=>onMenuClick(item)}
        style={{
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            gap:10,
            flex:1,
            padding:10,
            borderRadius:15,
            borderWidth:1,
            margin:10,
            backgroundColor:'#fff',
            borderColor:Colors.PRIMARY
        }}>
            <Image source={item.icon}
            style={{
                width:50,
                height:55,

            }}
            />
            <Text style={{
                fontFamily:'outfit-medium',
                fontSize:15,
                flex:1,


            }}>{item.name}</Text>
            </TouchableOpacity>
      )}
      />
<Text style={{
    fontFamily:'outfit',
    textAlign:'center',
    marginTop:150,
    color:Colors.GRAY
}}
>Developed by Pranav kumar @all rights reserved</Text>

    </View>
  )
}

export default Menu