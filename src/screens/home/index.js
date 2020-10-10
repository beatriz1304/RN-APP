import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

import { Banner, RepositoryItem, TextButton } from '_molecules'
import BackgroundImage from '_images/background.png'
import { Colors } from '_styles'

import styles from './styles'

const GET_AVATAR = gql`
  query {
    viewer {
      avatarUrl
      login
      name
      repositories(first: 3, affiliations: OWNER) {
        nodes {
          name
          description
          stargazerCount
          updatedAt
          primaryLanguage {
            color
            name
          }
        }
      }
    }
  }
`

const Home = ({ navigation }) => (
  <Query query={GET_AVATAR}>
    {({ loading, error, data }) => {
      if (loading) return <Text>Loading...</Text>
      if (error) return <Text>Error :(</Text>
      return (
        <ScrollView style={{ backgroundColor: Colors.BACKGROUND, marginBottom: 30 }}>
          <View>
            <Banner
              backgroundImage={BackgroundImage}
              avatar={data?.viewer?.avatarUrl}
              userName={data?.viewer?.login}
            />
            <View style={styles.repoList}>
              {data.viewer.repositories.nodes.map((item) => (
                <RepositoryItem name={item?.name} />
              ))}
            </View>
            <TextButton onPress={() => navigation.navigate('Repositories')}>VER MAIS</TextButton>
          </View>
        </ScrollView>
      )
    }}
  </Query>
)

export default Home
