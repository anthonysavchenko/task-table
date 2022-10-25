const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const db = require('./queries')
const app = express()
const port = 3003

app.use(cors())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

app.get('/', db.getRows)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
