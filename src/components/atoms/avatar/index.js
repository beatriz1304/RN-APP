import React from 'react'
import { Image } from 'react-native'

import styles from './styles'

const UserAvatar = ({ source, style }) => (
  <Image
    source={{
      uri: source,
    }}
    style={[styles.avatar, style]}
  />
)

export default UserAvatar
