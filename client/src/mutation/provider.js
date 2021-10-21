import {gql} from "@apollo/client";

export const DELETE_PROVIDER = gql`
  mutation deleteProvider($id: ID) {
    deleteProvider(id:$id) {
      id, organization, tel
    }
  }
`

export const CREATE_PROVIDER = gql`
  mutation createProvider($organization: String!, $tel: Int) {
    createProvider(organization:$organization, tel:$tel) {
      id, organization, tel
    }
  }
`

export const UPDATE_PROVIDER = gql`
  mutation updateProvider($id: ID, $organization: String!, $tel: Int) {
    updateProvider(id:$id, organization:$organization, tel:$tel) {
      id, organization, tel
    }
  }
`