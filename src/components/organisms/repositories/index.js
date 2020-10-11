import React from 'react'
import { View, Text } from 'react-native'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'

import { Banner, RepositoryItem, TextButton, List } from '_molecules'

const GET_REPOSITORIES = gql`
  query($after: String) {
    viewer {
      repositories(first: 10, affiliations: OWNER, after: $after) {
        nodes {
          name
          description
          url
          stargazerCount
          updatedAt
          primaryLanguage {
            color
            name
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
`

const RepositoriesWrapper = ({ error, loading, repositories, loadMore }) => {
  console.log('REPOSITORIES: ', repositories)
  const onEndReached = () => {
    console.log('END OF LIST')
    if (!loading) {
      loadMore()
    }
  }

  const renderList = (repositories) => {
    console.log('REPOSITORIES HERE: ', repositories)

    return (
      <List
        // ListHeaderComponent={<Text>REPOSITORIOS</Text>}
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
      // <Text>LISTTTTT</Text>
    )
  }

  if (error) {
    return (
      <View style={{ padding: 20 }}>
        <Text>Failed to load repositories</Text>
      </View>
    )
  }

  return renderList(repositories)
}

// { data: { error, loading, search } }
export default graphql(GET_REPOSITORIES, {
  props: ({ data: { error, loading, viewer, fetchMore } }) => {
    console.log('GRAPHQL: ', loading)
    return {
      repositories: viewer ? viewer.repositories.nodes : [],
      loading,
      error,
      loadMore: () =>
        fetchMore({
          variables: { after: viewer.repositories.pageInfo.endCursor },
          notifyOnNetworkStatusChange: true,
          updateQuery: (previousResult = {}, { fetchMoreResult = {} }) => {
            console.log('OLD', previousResult)
            console.log('NEW', fetchMoreResult)
            // Specify how to merge new results with previous results
            const mergedObject = {
              ...previousResult,
              viewer: {
                ...previousResult.viewer,
                repositories: {
                  nodes: [
                    ...previousResult.viewer.repositories.nodes,
                    ...previousResult.viewer.repositories.nodes,
                  ],
                  pageInfo: fetchMoreResult.viewer.repositories.pageInfo,
                },
              },
            }
            console.log('MERGED OBJECT: ', mergedObject)
            return mergedObject
          },
        }),
    }
  },
})(RepositoriesWrapper)
