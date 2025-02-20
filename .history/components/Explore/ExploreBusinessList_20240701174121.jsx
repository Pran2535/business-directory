import { View, Text, FlatList } from 'react-native'
import React from 'react'
import BusinessListCard from './BusinessListCard'

const ExploreBusinessList = ({businessList}) => {
  return (
    <View>
      <FlatList
      data={businessList}
      renderItem={({item,index})=>(
       <BusinessListCard/>
      )}
      />
    </View>
  )
}

export default ExploreBusinessList