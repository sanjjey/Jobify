import {useState} from 'react'
import { View, Text,TouchableOpacity,ActivityIndicator,FlatList } from 'react-native'
import {useRouter} from 'expo-router'
import {SIZES,COLORS} from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'



import styles from './popularjobs.style'
import useFetch from '../../../hook/useFetch'

const Popularjobs = () => {
  const router=useRouter();
  const {data,isLoading,error} = useFetch('search',{query:'React Developer', num_pages:'1',page:'1'})
  console.log(data);
  const [selectedJob,setSelectedJob] = useState();
  const handleCardPress = () =>{
    
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>

      </View>
      <View style={styles.cardsContainer}>
        {isLoading ?(
          <ActivityIndicator size='large' colors={COLORS.primary}/>
        ) :error?(
          <View>
    <Text>Error loading data:</Text>
    <Text>{error.message}</Text>
    <Text>{JSON.stringify(error.response?.data, null, 2)}</Text>
  </View>
        )
          : (<FlatList
          data={data}
          renderItem={({item})=>(
            <PopularJobCard
            item={item}
            />
          )}
          keyExtractor={item=>item?.job_id}
          contentContainerStyle={{columnGap:SIZES.medium}}
          horizontal
          showsHorizontalScrollIndicator={false}
            />
            
          )}
          
      </View>
    </View>
  )
}

export default Popularjobs;