import React from 'react'
import { View, Text } from 'react-native'
import { useQuery } from '@apollo/client'

import { BaseText, Avatar, Chip } from '_atoms'
import { UserInfo, TextButton } from '_molecules'
import { Colors } from '_styles'
import { OrganizationIcon, LocationIcon, MailIcon, PersonIcon, StarIcon } from '_icons'
import { GET_PROFILE } from '_graphql'

import styles from './styles'

const Profile = ({ navigation }) => {
  const { loading, error, data } = useQuery(GET_PROFILE)
  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>Error :(</Text>

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.avatarAndNameContainer}>
          <Avatar source={data.viewer.avatarUrl} style={styles.avatar} />
          <View>
            <BaseText isBold>{data.viewer.name}</BaseText>
            <BaseText>{data.viewer.login}</BaseText>
          </View>
        </View>

        <View style={styles.bio}>
          <BaseText>{data.viewer.bio}</BaseText>
        </View>
        <View style={styles.contactContainer}>
          <UserInfo icon={<OrganizationIcon fill={Colors.GRAY_2} />} text={data.viewer.company} />
          <UserInfo icon={<LocationIcon fill={Colors.GRAY_2} />} text={data.viewer.location} />
          <UserInfo icon={<MailIcon fill={Colors.GRAY_2} />} text={data.viewer.email} />
        </View>

        <View style={styles.followersContainer}>
          <UserInfo
            icon={<PersonIcon fill={Colors.GRAY_2} />}
            text={`${data.viewer.followers.totalCount} followers`}
          />
          <UserInfo text={` • ${data.viewer.following.totalCount} following • `} />
          <UserInfo
            icon={<StarIcon fill={Colors.GRAY_2} />}
            text={data.viewer.starredRepositories.totalCount}
          />
        </View>
      </View>

      <TextButton style={styles.button} onPress={() => navigation.navigate('Repositories')}>
        <View style={styles.buttonContent}>
          <BaseText isBold color={Colors.WHITE} style={{ marginRight: 10 }}>
            Repositories
          </BaseText>
          <Chip text={data.viewer.repositories.totalCount} style={styles.totalCountRepo} />
        </View>
      </TextButton>
    </View>
  )
}

export default Profile
