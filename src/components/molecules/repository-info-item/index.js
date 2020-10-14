import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

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

RepositoryInfoItem.propTypes = {
  icon: PropTypes.instanceOf(Object),
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  iconBackgroundColor: PropTypes.string,
}

RepositoryInfoItem.defaultProps = {
  icon: undefined,
  title: undefined,
  value: undefined,
  iconBackgroundColor: undefined,
}

export default RepositoryInfoItem
