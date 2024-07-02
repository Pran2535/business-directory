import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, getDocs, query } from 'firebase/firestore'
import { db } from './../../configs/FirebaseConfig'

const Slider = () => {
  const [sliderList, setSliderList] = useState([]);

  useEffect(() => {
    GetSliderList();
  }, []);

  const GetSliderList = async () => {
    setSliderList([]);

    const q = query(collection(db, 'Slider'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      setSliderList((prev) => [...prev, doc.data()]);
    });
  }

  return (
    <View>
      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize:20,
        padding:20
      }}>
        #Special for you
      </Text>
      <FlatList 
      data={sliderList}
      horizontal={true}
      style={{paddingLeft:20}}
      renderItem={({item,index})=>(
        <Image source={{uri:item.imageUrl}} 
        style={{
            width:300,
            height:160,
            borderRadius:15,
        }}
        />      )}
      />
    </View>
  )
}

export default Slider;
