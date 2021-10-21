import {gql} from "@apollo/client";

export const GET_PRODUCT = gql`
  query product($id:ID) {
    product(id:$id) {
      id, 
      title, 
      quantity,
      provider {
        id,
        organization,
        tel
      }
    }
}
`

export const GET_PRODUCTS = gql`
  query {
    products {
      id, 
      title, 
      quantity, 
      provider {
        id,
        organization
      }
    }
  }
`