import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { gql, useQuery } from '@apollo/client'
import Markdown from 'react-native-markdown-display'

import { BaseText, Card, Loader } from '_atoms'
import { RepositoryInfoItem } from '_molecules'
import { StarIcon, IssueIcon, PullRequestIcon } from '_icons'
import { Colors } from '_styles'
import { GET_REPOSITORY_DETAIL } from '_graphql/query'

import styles from './styles'

const RepositoryDetail = ({ route }) => {
  const { name } = route.params
  const { loading, error, data } = useQuery(GET_REPOSITORY_DETAIL, {
    variables: { repo_name: name },
  })

  if (loading) return <Loader />
  if (error) return <Text>Error :(</Text>
  return (
    <View>
      <ScrollView>
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

        {data?.viewer?.repository?.object?.text && (
          <Card style={styles.readme}>
            <Markdown>{data?.viewer?.repository?.object?.text}</Markdown>
          </Card>
        )}
      </ScrollView>
    </View>
  )
}

export default RepositoryDetail
