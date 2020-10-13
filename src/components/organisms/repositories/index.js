import React from 'react'
import { Text } from 'react-native'
import { useQuery } from '@apollo/client'

import { GET_REPOSITORIES } from '_graphql'
import { RepositoryItem, List } from '_molecules'

const RepositoriesWrapper = () => {
  const { data, loading, error, fetchMore } = useQuery(GET_REPOSITORIES, {
    notifyOnNetworkStatusChange: true,
  })

  const onEndReached = () => {
    if (!loading && data.viewer.repositories.pageInfo.hasNextPage) {
      return fetchMore({
        query: GET_REPOSITORIES,
        variables: { cursor: data.viewer.repositories.pageInfo.endCursor },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          const previousNodes = previousResult.viewer.repositories.nodes
          const newNodes = fetchMoreResult.viewer.repositories.nodes
          const newPageInfo = fetchMoreResult.viewer.repositories.pageInfo
          const newResult = {
            viewer: {
              repositories: {
                nodes: [...previousNodes, ...newNodes],
                pageInfo: newPageInfo,
                __typename: previousResult.viewer.repositories.__typename,
              },
              __typename: previousResult.viewer.__typename,
            },
          }
          return newResult
        },
      })
    }
  }

  const renderList = (repositories) => {
    return (
      <List
        isLoading={loading}
        listData={repositories}
        renderItem={({ item, index }) => {
          return (
            <RepositoryItem
              name={item.name}
              description={item.description}
              stars={item?.stargazerCount}
              updatedAt={item?.updatedAt}
              primaryLanguage={item?.primaryLanguage}
            />
          )
        }}
        emptyMessage='Vc nao possui nenhum repositório no momento'
        loadNextItems={onEndReached}
      />
    )
  }

  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>Error :(</Text>

  return renderList(data.viewer.repositories.nodes || [])
}

export default RepositoriesWrapper
