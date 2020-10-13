import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

import { Card, BaseText, NativeButton } from '_atoms'
import { Language } from '_molecules'
import { RepositoryIcon, RightArrowIcon, StarIcon } from '_icons'
import { Colors } from '_styles'
import dayjs from 'dayjs'

import styles from './styles'

const RepositoryItem = ({
  name,
  description,
  stars,
  updatedAt,
  primaryLanguage,
  onPress,
  showStarInfo,
}) => (
  <NativeButton onPress={onPress}>
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
          {showStarInfo && (
            <View style={styles.stars}>
              <StarIcon style={styles.starIcon} />
              <BaseText fontSize={11}>{stars}</BaseText>
            </View>
          )}
          {updatedAt && (
            <BaseText fontSize={11}>{`Updated on ${dayjs(updatedAt).format(
              'MMM DD, YYYY'
            )}`}</BaseText>
          )}
        </View>
      </View>
      <RightArrowIcon />
    </Card>
  </NativeButton>
)

RepositoryItem.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  stars: PropTypes.number,
  updatedAt: PropTypes.string,
  primaryLanguage: PropTypes.instanceOf(Object),
  onPress: PropTypes.func,
  showStarInfo: PropTypes.bool,
}

RepositoryItem.defaultProps = {
  name: undefined,
  description: undefined,
  stars: 0,
  updatedAt: undefined,
  primaryLanguage: undefined,
  onPress: () => {},
  showStarInfo: true,
}

export default RepositoryItem
