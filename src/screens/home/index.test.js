import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { MockedProvider } from '@apollo/client/testing'
import { render, fireEvent, act } from '@testing-library/react-native'

import AppNavigator from '../../navigations/app-navigator'
import HomeScreen from './index'
import { GET_REPOSITORY_DETAIL, GET_HOME_INFO } from '_graphql'

// Silence the warning https://github.com/facebook/react-native/issues/11094#issuecomment-263240420
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper')
const mockRequestHome = {
  request: {
    query: GET_HOME_INFO,
  },
  result: {
    data: {
      viewer: {
        avatarUrl:
          'https://avatars0.githubusercontent.com/u/14113433?u=17ebeee60ef3567db0519560168c80a3e3cb66ff&v=4',
        login: 'beatrizTest',
        repositories: {
          nodes: [
            {
              id: '1=',
              name: 'REPO-NAME-1',
              description: null,
              stargazerCount: 0,
              updatedAt: '2020-10-12T00:08:04Z',
              primaryLanguage: {
                color: '#f1e05a',
                name: 'JavaScript',
              },
            },
            {
              id: '2',
              name: 'REPO-NAME-2',
              description: null,
              stargazerCount: 0,
              updatedAt: '2020-10-12T00:08:04Z',
              primaryLanguage: {
                color: '#f1e05a',
                name: 'JavaScript',
              },
            },
          ],
        },
      },
    },
  },
}

const mockRequestRepoDetail = {
  request: {
    query: GET_REPOSITORY_DETAIL,
    variables: {
      repo_name: 'REPO-NAME-1',
    },
  },
  result: {
    data: {
      viewer: {
        repository: {
          object: {
            text: 'Description',
          },
          url: 'https://github.com/beatriz1304/APP_Questions_StackOverflow',
          name: 'APP_Questions_StackOverflow',
          issues: {
            totalCount: 0,
          },
          pullRequests: {
            totalCount: 0,
          },
          stargazerCount: 0,
          descriptionHTML: '<div></div>',
        },
      },
    },
  },
}

// const mocks = [mockRequestHome, mockRequestRepoDetail, mockRequestHome]
test('if home page is loading', () => {
  const { getByText } = render(
    <MockedProvider mocks={[mockRequestHome]} addTypename={false}>
      <HomeScreen />
    </MockedProvider>
  )
  const element = getByText('Loading...')
  expect(element).toBeDefined()
})

test('if home page is showing content', async () => {
  const { debug, getByText, getAllByText, ...props } = render(
    <MockedProvider mocks={[mockRequestHome]} addTypename={false}>
      <HomeScreen />
    </MockedProvider>
  )

  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0))
  })

  const userName = getByText('beatrizTest')
  expect(userName).toBeDefined()

  const repoList = getAllByText(new RegExp('REPO-NAME-*'))
  expect(repoList).toHaveLength(2)

  const element = getByText('VER MAIS')
  expect(element).toBeDefined()
})

test('if clicking on repo item takes you to the detail repo screen', async () => {
  const { debug, getByText, getAllByText, ...props } = render(
    <MockedProvider
      mocks={[mockRequestHome, mockRequestHome, mockRequestRepoDetail]}
      addTypename={false}
    >
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </MockedProvider>
  )

  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0))
  })

  const repoItemToClick = getByText('REPO-NAME-1')

  fireEvent(repoItemToClick, 'press')
})
