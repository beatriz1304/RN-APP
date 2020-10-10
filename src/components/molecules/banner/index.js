import React from 'react'
import { View, ImageBackground } from 'react-native'

import { Avatar, BaseText } from '_atoms'
import { Colors } from '_styles'

import styles from './styles'

const Banner = ({ backgroundImage, avatar, userName }) => {
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.content}>
        <Avatar source={avatar} style={styles.avatar} />
        <BaseText isBold color={Colors.WHITE}>
          {userName}
        </BaseText>
      </View>
    </ImageBackground>
  )
}

export default Banner
