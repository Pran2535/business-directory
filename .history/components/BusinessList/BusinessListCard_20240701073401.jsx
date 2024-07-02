import { View, Text, Image } from 'react-native'
import React from 'react'

const BusinessListCard = ({business}) => {
  return (
    <View style={{
      padding:10,
      margin:10,
      borderRadius:15,
      backgroundColor:'#fff'
    }}>
      <Image source={{uri:business.imageUrl}} 
      style={{
        width:120,
        height:120,
        borderRadius:15,

      }}
      />
      <View>
        <Text>{business.name}</Text>
         <Text>{business.address}</Text>
         
         <View style={{display:'flex',flexDirection:'row', gap:5}}>
            <Image source={require('./../../assets/images/star.png')}
            style={{
                width:20,
                height:20

            }}
            />
            </View>


      </View>
    </View>
  )
}

export default BusinessListCard