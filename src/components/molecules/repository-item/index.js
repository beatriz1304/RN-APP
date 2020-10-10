import React from 'react'
import { View } from 'react-native'

import { Card, BaseText } from '_atoms'
import { RepositoryIcon, RightArrowIcon } from '_icons'
import { Colors } from '_styles'

import styles from './styles'

const RepositoryItem = ({ name }) => (
  <Card style={styles.card}>
    <View style={styles.repoName}>
      <RepositoryIcon style={styles.repoIcon} />
      <BaseText color={Colors.BLACK} isBold fontSize={13}>
        {name}
      </BaseText>
    </View>
    <RightArrowIcon />
  </Card>
)

export default RepositoryItem
