import React from 'react'
import { View } from 'react-native'

import { BaseText } from '_atoms'

import styles from './styles'

const UserInfo = ({ icon, text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>{icon}</View>
      <BaseText>{text}</BaseText>
    </View>
  )
}

export default UserInfo
