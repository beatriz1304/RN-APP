import { gql } from '@apollo/client'

export const GET_REPOSITORY_DETAIL = gql`
  query($repo_name: String!) {
    viewer {
      repository(name: $repo_name) {
        object(expression: "master:README.md") {
          ... on Blob {
            text
          }
        }
        url
        name
        issues(states: OPEN) {
          totalCount
        }
        pullRequests(states: OPEN) {
          totalCount
        }
        stargazerCount
        descriptionHTML
      }
    }
  }
`
export const GET_PROFILE = gql`
  query {
    viewer {
      avatarUrl
      login
      name
      company
      location
      email
      followers {
        totalCount
      }
      following {
        totalCount
      }
      starredRepositories {
        totalCount
      }
      bio
      repositories(affiliations: OWNER) {
        totalCount
      }
    }
  }
`

export const GET_HOME_INFO = gql`
  query {
    viewer {
      avatarUrl
      login
      repositories(first: 3, affiliations: OWNER, orderBy: { field: UPDATED_AT, direction: DESC }) {
        nodes {
          id
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

export const GET_REPOSITORIES = gql`
  query($cursor: String) {
    viewer {
      repositories(
        first: 10
        affiliations: OWNER
        after: $cursor
        orderBy: { field: UPDATED_AT, direction: DESC }
      ) {
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
