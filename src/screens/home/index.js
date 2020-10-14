import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { useQuery } from '@apollo/client'

import { NativeButton, Loader } from '_atoms'
import { Banner, RepositoryItem, TextButton } from '_molecules'
import BackgroundImage from '_images/background.png'
import { GET_HOME_INFO } from '_graphql/query'

import styles from './styles'

const Home = ({ navigation }) => {
  const { loading, error, data } = useQuery(GET_HOME_INFO)
  if (loading) return <Loader />
  if (error) return <Text>Error :(</Text>
  return (
    <ScrollView style={styles.container}>
      <View>
        <NativeButton onPress={() => navigation.navigate('Profile')}>
          <Banner
            backgroundImage={BackgroundImage}
            avatar={data?.viewer?.avatarUrl}
            userName={data?.viewer?.login}
          />
        </NativeButton>
        <View style={styles.repoList}>
          {data.viewer.repositories.nodes.map((item) => (
            <RepositoryItem
              name={item?.name}
              key={item.id}
              onPress={() => navigation.navigate('Repository', { name: item?.name })}
              showStarInfo={false}
            />
          ))}
        </View>
        <TextButton onPress={() => navigation.navigate('Repositories')}>VER MAIS</TextButton>
      </View>
    </ScrollView>
  )
}

export default Home
