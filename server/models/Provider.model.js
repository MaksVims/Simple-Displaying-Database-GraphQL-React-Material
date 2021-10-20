const {Schema, model} = require('mongoose')

const ProviderModel = new Schema({
  organization: {type: String, required: true, unique: true},
  tel: {type: Number}
})

module.exports = model('Provider', ProviderModel)

