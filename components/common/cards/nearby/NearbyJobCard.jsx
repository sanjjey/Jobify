import React from 'react'
import { View, Text ,TouchableOpacity,Image,} from 'react-native'

import { checkImageURL } from '../../../../utils'
import styles from './nearbyjobcard.style'

const NearbyJobCard = ({job,handleNavigate} ) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
        <TouchableOpacity style={styles.logoContainer}>
          <Image
  source={{ 
    uri: job.employer_logo
  }}
  resizeMode="cover"
  style={styles.logoImage}
  onError={(e) => console.log("Image failed to load:", e.nativeEvent.error)}
/>
        </TouchableOpacity>
        <View style={styles.textContainer}>

          <Text style={styles.jobName} numberOfLines={1}>{job.job_title}</Text>
          <Text style={styles.jobType}>{job.job_employment_type}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard;