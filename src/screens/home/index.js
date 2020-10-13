import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { useQuery } from '@apollo/client'

import { NativeButton } from '_atoms'
import { Banner, RepositoryItem, TextButton } from '_molecules'
import BackgroundImage from '_images/background.png'
import { Colors } from '_styles'
import { GET_HOME_INFO } from '_graphql'

import styles from './styles'

const Home = ({ navigation }) => {
  const { loading, error, data } = useQuery(GET_HOME_INFO)
  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>Error :(</Text>
  return (
    <ScrollView style={{ backgroundColor: Colors.BACKGROUND, marginBottom: 30 }}>
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
