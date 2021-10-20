require('dotenv').config()
const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const cors = require('cors')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 5000
const app = express()

app.use(cors())

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    app.listen(PORT, () => console.log(`Server start PORT: ${PORT}`))
  } catch (e) {
    console.log(e.message)
  }
}

start()
