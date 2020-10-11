import React from 'react'
import { View } from 'react-native'

import { BaseText } from '_atoms'
import { RepositoryInfoItem } from '_molecules'
import { StarIcon, IssueIcon, PullRequestIcon } from '_icons'
import { Colors } from '_styles'

import styles from './styles'

const RepositoryDetail = () => (
  <View>
    <BaseText fontSize={20} isBold style={styles.title}>
      RN-APP
    </BaseText>
    <RepositoryInfoItem
      icon={<StarIcon fill={Colors.WHITE} />}
      title='Stars'
      value='4'
      iconBackgroundColor={Colors.BLUE}
    />
    <RepositoryInfoItem
      icon={<IssueIcon fill={Colors.WHITE} />}
      title='Issues'
      value='4'
      iconBackgroundColor={Colors.GREEN}
    />
    <RepositoryInfoItem
      icon={<PullRequestIcon fill={Colors.WHITE} />}
      title='Pull requests'
      value='4'
      iconBackgroundColor={Colors.PURPLE}
    />
  </View>
)

export default RepositoryDetail
