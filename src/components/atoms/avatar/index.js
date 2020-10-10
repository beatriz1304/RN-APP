import React from 'react'
import { Image } from 'react-native'

const UserAvatar = ({ source }) => (
  <Image
    source={{
      uri: source,
    }}
    style={{ width: 100, height: 100 }}
  />
)

export default UserAvatar
