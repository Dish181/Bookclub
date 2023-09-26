import { View, Image } from 'react-native'
import React from 'react'
import { styles } from '../stylesheet'

const Header = () => {
  return (
    <View>
      <Image style={styles.headerImage} source={require('../assets/header-image.png')}/>
    </View>
  )
}

export default Header