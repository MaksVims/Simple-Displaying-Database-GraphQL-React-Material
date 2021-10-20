const {
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLList,
  GraphQLSchema
} = require('graphql')

const Provider = require('./models/Provider.model')
const Product = require('./models/Product.model')

const ProviderType = new GraphQLObjectType({
  name: 'Provider',
  fields: () => ({
    id: {type: GraphQLID},
    organization: {type: new GraphQLNonNull(GraphQLString)},
    tel: {type: GraphQLInt},
    products: {
      type: new GraphQLList(ProductType),
      resolve: ({id}) => {
        return Product.find({providerId: id})
      }
    }
  })
})

const ProductType = new GraphQLObjectType({
  name: 'Product',
  fields: () => ({
    id: {type: GraphQLID},
    title: {type: new GraphQLNonNull(GraphQLString)},
    quantity: {type: GraphQLInt},
    provider: {
      type: ProviderType,
      resolve: ({providerId}) => {
        return Provider.findById(providerId)
      }
    }
  })
})

const rootQuery = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    product: {
      type: ProductType,
      args: {id: {type: GraphQLID}},
      resolve: (parent, {id}) => {
        return Product.findById(id)
      }
    },
    products: {
      type: new GraphQLList(ProductType),
      resolve: () => {
        return Product.find()
      }
    },
    provider: {
      type: ProviderType,
      args: {id: {type: GraphQLID}},
      resolve: (parent, {id}) => {
        return Provider.findById(id)
      }
    },
    providers: {
      type: new GraphQLList(ProviderType),
      resolve: () => {
        return Provider.find()
      }
    }
  })
})

const rootMutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    createProvider: {
      type: ProviderType,
      args: {
        organization: {type: new GraphQLNonNull(GraphQLString)},
        tel: {type: GraphQLInt},
      },
      resolve: (parent, {organization, tel}) => {
        const provider = new Provider({organization, tel})
        return provider.save()
      }
    },

    createProduct: {
      type: ProductType,
      args: {
        title: {type: new GraphQLNonNull(GraphQLString)},
        quantity: {type: GraphQLInt},
        providerId: {type: GraphQLID}
      },
      resolve: (parent, {title, quantity, providerId}) => {
        const product = new Product({title, quantity, providerId})
        return product.save()
      }
    }
  })
})

module.exports = new GraphQLSchema({
  query: rootQuery,
  mutation: rootMutation
})