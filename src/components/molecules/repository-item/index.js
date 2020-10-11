import React from 'react'
import { View } from 'react-native'

import { Card, BaseText } from '_atoms'
import { Language } from '_molecules'
import { RepositoryIcon, RightArrowIcon, StarIcon } from '_icons'
import { Colors } from '_styles'
import dayjs from 'dayjs'

import styles from './styles'

const RepositoryItem = ({ name, description, stars, updatedAt, primaryLanguage }) => (
  <Card style={styles.card}>
    <View style={styles.content}>
      <View style={styles.repoName}>
        <RepositoryIcon style={styles.repoIcon} />
        <BaseText color={Colors.BLACK} isBold fontSize={13}>
          {name}
        </BaseText>
      </View>
      {description && <BaseText style={styles.description}>{description}</BaseText>}

      <View style={styles.footer}>
        {primaryLanguage && (
          <Language name={primaryLanguage?.name} color={primaryLanguage?.color} />
        )}
        <View style={styles.stars}>
          <StarIcon style={styles.starIcon} />
          <BaseText fontSize={11}>{stars}</BaseText>
        </View>
        {updatedAt && (
          <BaseText fontSize={11}>{`Updated on ${dayjs(updatedAt).format(
            'MMM DD, YYYY'
          )}`}</BaseText>
        )}
      </View>
    </View>
    <RightArrowIcon />
  </Card>
)

export default RepositoryItem
