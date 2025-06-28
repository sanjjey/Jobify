import React from 'react'
import { TouchableOpacity, Image } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({iconUrl,dimension}) => {
  const router = useRouter();
    return (
    <TouchableOpacity>
      <Image source={iconUrl} style={{ width: dimension, height: dimension }} />
    </TouchableOpacity>
    )
}

export default ScreenHeaderBtn;