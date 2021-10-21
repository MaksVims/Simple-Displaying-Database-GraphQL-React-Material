import {gql} from "@apollo/client";

export const GET_PROVIDER = gql`
  query provider($id:ID) {
    provider(id:$id) {
      id,
      organization,
      tel,
      products {
        id,
        title,
        quantity
      }
    }
}
`

export const GET_PROVIDERS = gql`
  query {
    providers {
      id, 
      organization, 
      tel, 
      products {
        id,
        title
      }
    }
  }
`