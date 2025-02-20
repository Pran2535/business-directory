import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import { collection, getDocs, query } from 'firebase/firestore'
import { db } from './../../configs/FirebaseConfig'
import CategoryItem from './CategoryItem'
import { useRouter } from 'expo-router'

const Category = ({ explore = false }) => {
  const router = useRouter();
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    GetCategoryList();
  }, []);

  const GetCategoryList = async () => {
    setCategoryList([])
    const q = query(collection(db, 'Category'))
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      setCategoryList(prev => [...prev, doc.data()])
    })
  }

  const onCategoryPressHandler = (category) => {
    if (!explore) {
      router.push('/businesslist/' + category.name)
    }
  }

  return (
    <View>
      {!explore && (
        <View style={{
          padding: 9,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
          <Text style={{
            fontSize: 20,
            fontFamily: 'outfit-bold',
          }}>
            Category
          </Text>
          <Text style={{
            color: Colors.PRIMARY,
            fontFamily: 'outfit-medium'
          }}>
            View All
          </Text>
        </View>
      )}
      <FlatList
        data={categoryList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ marginLeft: 20 }}
        renderItem={({ item, index }) => (
          <CategoryItem 
            category={item} 
            key={index}
            onCategoryPress={() => onCategoryPressHandler(item)}
          />
        )}
      />
    </View>
  )
}

export default Category;