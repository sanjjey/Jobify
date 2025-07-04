import React from 'react'
import { View, Text ,TouchableOpacity,Image,} from 'react-native'

import { checkImageURL } from '../../../../utils'
import styles from './popularjobcard.style'

const PopularJobCard = ({item,selectedJob,handleCardPress} ) => {
  return (
    <TouchableOpacity style={styles.container(selectedJob,item)} onPress={()=>handleCardPress(item)}>
        <TouchableOpacity style={styles.logoContainer(selectedJob,item)}>
          <Image
          source={{uri:item.employer_logo}}
          resizeMode='contain'
          style={styles.logoImage}
          />
          <Text style={styles.companyName} numberOfLines={1}>{item.employer_name}</Text>
        </TouchableOpacity>
        <View style={styles.infoContainer}>

          <Text style={styles.jobName(selectedJob,item)}>{item.job_title}</Text>
          <Text style={styles.location}>{item.job_country}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard