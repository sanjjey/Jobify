import {useState} from 'react'
import { View, Text,TouchableOpacity,ActivityIndicator,FlatList } from 'react-native'
import {useRouter} from 'expo-router'
import {SIZES,COLORS} from '../../../constants'
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'



import styles from './nearbyjobs.style'
import useFetch from '../../../hook/useFetch'

const NearbyJobs = () => {
  const router=useRouter();
  const {data,isLoading,error} = useFetch('search',{query:'React Developer', num_pages:'1',page:'1'})
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
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
          : ( data?.map((job)=>(
            <NearbyJobCard
            job={job}
            key = {`nearby-jobs-${job?.job_id}`}
            handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
            />
          ))
            
          )}
          
      </View>
    </View>
  )
}

export default NearbyJobs;