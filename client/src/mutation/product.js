import {gql} from "@apollo/client";

export const DELETE_PRODUCT = gql`
  mutation deleteProduct($id: ID) {
    deleteProduct(id:$id) {
      id, title, quantity
    }
  }
`

export const CREATE_PRODUCT = gql`
  mutation createProduct($title: String!, $quantity: Int, $providerId: ID) {
    createProduct(title: $title, quantity: $quantity, providerId: $providerId) {
      id, title, quantity
    }
  }
`

export const UPDATE_PRODUCT = gql`
  mutation updateProduct($title: String!, $quantity: Int, $providerId: ID) {
    updateProduct(title: $title, quantity: $quantity, providerId: $providerId) {
      id, title, quantity
    }
  }
`