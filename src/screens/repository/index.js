import React from 'react'
import { View, Text } from 'react-native'
import { gql, useQuery } from '@apollo/client'
import { WebView } from 'react-native-webview'

import { BaseText } from '_atoms'
import { RepositoryInfoItem } from '_molecules'
import { StarIcon, IssueIcon, PullRequestIcon } from '_icons'
import { Colors } from '_styles'

import styles from './styles'

const GET_REPOSITORY_DETAIL = gql`
  query($repo_name: String!) {
    viewer {
      repository(name: $repo_name) {
        object(expression: "master:README.md") {
          ... on Blob {
            text
          }
        }
        name
        issues(states: OPEN) {
          totalCount
        }
        pullRequests(states: OPEN) {
          totalCount
        }
        stargazerCount
        descriptionHTML
      }
    }
  }
`

const RepositoryDetail = ({ route }) => {
  const { name } = route.params
  const { loading, error, data } = useQuery(GET_REPOSITORY_DETAIL, {
    variables: { repo_name: name },
  })

  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>Error :(</Text>
  return (
    <View>
      <BaseText fontSize={20} isBold style={styles.title}>
        {data?.viewer?.repository?.name}
      </BaseText>
      <RepositoryInfoItem
        icon={<StarIcon fill={Colors.WHITE} />}
        title='Stars'
        value={data?.viewer?.repository?.stargazerCount}
        iconBackgroundColor={Colors.BLUE}
      />
      <RepositoryInfoItem
        icon={<IssueIcon fill={Colors.WHITE} />}
        title='Issues'
        value={data?.viewer?.repository?.issues?.totalCount}
        iconBackgroundColor={Colors.GREEN}
      />
      <RepositoryInfoItem
        icon={<PullRequestIcon fill={Colors.WHITE} />}
        title='Pull requests'
        value={data?.viewer?.repository?.pullRequests?.totalCount}
        iconBackgroundColor={Colors.PURPLE}
      />
      <WebView originWhitelist={['*']} source={{ html: data?.viewer?.repository?.object?.text }} />
    </View>
  )
}

export default RepositoryDetail
