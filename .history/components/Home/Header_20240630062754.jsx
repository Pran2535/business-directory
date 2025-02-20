import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import {Colors} from './../../constants/Colors'
import { FontAwesome } from '@expo/vector-icons';
const Header = () => {
    const {user} =useUser();
  return (
    <View style={{
        padding:20,
        paddingTop:40,
        backgroundColor:Colors.PRIMARY
    }}>
      <View style={{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:10
      }}>
      <Image source={{uri:user?.imageUrl}}
      style={{
        width:45,
        height:45,
        borderRadius:99
      }}
      />
      <View>
        <Text style={{
            color:'#fff'
        }}>Welcome ,</Text>
        <Text style={{
            fontSize:19,
            fontFamily:'outfit-medium',
            color:'#fff'
        }}>{user?.fullName}</Text>
      </View>
    </View>
    {/* search bar  */}
    <View style={{
      display:'flex',
      flexDirection:'row',
      gap:'10',
      alignItems:'center',
      
    }}>
<FontAwesome name="search" size={24} color="black" />
<TextInput placeholder='Search...'/>
    </View>
    </View>
  )
}

export default Header