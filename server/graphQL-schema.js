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
    tel: {type: Number},
    products: {
      type: new GraphQLList(ProductType),
      resolve: ({id}) => {
        return Product.find({productId: id})
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

module.exports = new GraphQLSchema({})