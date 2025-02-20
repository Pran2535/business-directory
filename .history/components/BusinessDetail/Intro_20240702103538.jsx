// Intro.js
import { View, Image, TouchableOpacity, Text, Alert } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../configs/FirebaseConfig';

const Intro = ({ business }) => {
  const onDelete=()=>{
   Alert.alert('Do you want to Delete','Do you really want to Delete this business?',[
    {
      text:'Cancel',
      style:'cancel',

    }, {
      text:'Delete',
      style:'destructive',
      onPress:()=>deleteBusiness()

    }
   ])
  }
    const router =useRouter();
    const deleteBusiness=async()=>{
      console.log("delete business");
      await deleteDoc(doc(db,'BusinessList',business?.id))
    }    
  return (
    <View>
        <View style={{
            position:'absolute',
            zIndex:10,
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            width:'100%',
            padding:20
        }}>
            <TouchableOpacity onPress={()=>router.back()}>
<Ionicons name="arrow-back-circle" size={40} color="white" />

            </TouchableOpacity>
      <Ionicons name="heart-outline" size={40} color="white" />
        </View>
      <Image
        source={{ uri: business?.imageUrl }}
        style={{
          width: '100%',
          height: 300,
        }}
      />
<View style={{
  display:'flex',
  flexDirection:'row',
   padding:20,
        marginTop:-20,
        backgroundColor:'#fff',
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        justifyContent:'space-between'
}}>
    <View style={{
        padding:20,
        marginTop:-20,
        backgroundColor:'#fff',
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
    }}>
        <Text 
        style={{
            fontSize:26,
            fontFamily:'outfit-bold',
            
        }}
        >{business.name}
        
        </Text>
         <Text
         style={{
            fontSize:18,
            fontFamily:'outfit',
            
         }}
         >{business.address}</Text>
    </View>
    <TouchableOpacity onPress={()=>onDelete()}>
<Ionicons name="trash" size={24} color="red" />
    </TouchableOpacity>
    </View>
    </View>
  );
};

export default Intro;
