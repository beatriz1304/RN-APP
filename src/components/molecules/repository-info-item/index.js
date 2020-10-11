import React from 'react'
import { View } from 'react-native'

import { BaseText } from '_atoms'

import styles from './styles'

const RepositoryInfoItem = ({ icon, title, value, iconBackgroundColor }) => (
  <View style={styles.container}>
    <View style={[styles.icon, { backgroundColor: iconBackgroundColor }]}>{icon}</View>
    <View style={styles.content}>
      <BaseText>{title}</BaseText>
      <View style={styles.chip}>
        <BaseText>{value}</BaseText>
      </View>
    </View>
  </View>
)

export default RepositoryInfoItem
