import React from 'react'
import { View } from 'react-native'

import { BaseText, Chip } from '_atoms'

import styles from './styles'

const RepositoryInfoItem = ({ icon, title, value, iconBackgroundColor }) => (
  <View style={styles.container}>
    <View style={[styles.icon, { backgroundColor: iconBackgroundColor }]}>{icon}</View>
    <View style={styles.content}>
      <BaseText>{title}</BaseText>
      <Chip text={value} />
    </View>
  </View>
)

export default RepositoryInfoItem
