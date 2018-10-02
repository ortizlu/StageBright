const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const postsController = require('./controllers/posts')

app.use(bodyParser.json())
app.use(cors())
app.use('/api/posts/', postsController)

app.listen(process.env.PORT || 8081)
