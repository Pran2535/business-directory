import { View, Text,TextInput } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import {Colors} from './../../constants/Colors'
import {Category} from './../../components/Home/Category'
const explore = () => {
  return (
    <View style={{
      padding:20,

    }}>
      <Text
      style={{
        fontFamily:'outfit-bold',
        fontSize:30,
        
      }}
      >Explore More</Text>

     {/* searchbar  */}
 <View style={{
      display:'flex',
      flexDirection:'row',
      gap:10,
      alignItems:'center',
      backgroundColor:'#fff',
      padding:10,
      marginVertical:10,
      marginTop:15,
      borderRadius:8,
      borderWidth:1,
      borderColor:Colors.PRIMARY
    }}>
<FontAwesome name="search" size={24} color={Colors.PRIMARY} />
<TextInput placeholder='Search...' style={{
  fontFamily:'outfit',
  fontSize:16,
}}/>
    </View>
     {/* category  */}

<Category/>
    
     {/* business list  */}



    </View>
  )
}

export default explore