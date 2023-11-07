import { gql } from '@apollo/client'

export const API_URL = 'https://vortex.korabli.su/api/graphql/glossary/'

export const GET_DATA = gql`
  query allShips {
    vehicles {
      title
      description
      icons {
        large
        medium
      }
      level
      type {
        name
        title
        icons {
          default
        }
      }
      nation {
        name
        title
        color
        icons {
          small
          medium
          large
        }
      }
    }
  }
`
