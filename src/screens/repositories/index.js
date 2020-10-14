import React from 'react'

import { Container } from '_atoms'
import { Repositories } from '_organisms'

const RepositoriesScreen = ({ navigation }) => {
  return (
    <Container>
      <Repositories navigation={navigation} />
    </Container>
  )
}

export default RepositoriesScreen
