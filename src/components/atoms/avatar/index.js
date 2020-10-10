import React from 'react'
import { Image } from 'react-native'

import styles from './styles'

const UserAvatar = ({ source }) => (
  <Image
    source={{
      uri: source,
    }}
    style={styles.avatar}
  />
)

export default UserAvatar
