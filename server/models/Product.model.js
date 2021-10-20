const {Schema, model} = require('mongoose')

const ProductSchema = new Schema({
  title: {type: String, required: true, unique: true},
  quantity: {type: Number, default: 0},
  providerId: {type: String, required: true}
})

module.exports = model('Product', ProductSchema)

