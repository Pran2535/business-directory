import { View, Text } from 'react-native'
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
    </View>
  )
}

export default Slider;
