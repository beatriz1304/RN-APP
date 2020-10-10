import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

import { NativeButton } from '_atoms'
import { Banner } from '_molecules'
import BackgroundImage from '_images/background.png'

const GET_AVATAR = gql`
  query {
    viewer {
      avatarUrl
      login
      name
      repositories(first: 3, affiliations: OWNER) {
        nodes {
          name
        }
      }
    }
  }
`

// TODO STYLE PAGE
const Home = ({ navigation }) => (
  <Query query={GET_AVATAR}>
    {({ loading, error, data }) => {
      if (loading) return <Text>Loading...</Text>
      if (error) return <Text>Error :(</Text>
      return (
        <ScrollView>
          <View>
            <Banner
              backgroundImage={BackgroundImage}
              avatar={data?.viewer?.avatarUrl}
              userName={data?.viewer?.login}
            />
            {data.viewer.repositories.nodes.map((item) => (
              <Text>{item.name}</Text>
            ))}
            <NativeButton onPress={() => navigation.navigate('Repositories')}>
              <Text>VER MAIS</Text>
            </NativeButton>
          </View>
        </ScrollView>
      )
    }}
  </Query>
)

export default Home
