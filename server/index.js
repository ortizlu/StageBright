const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const postsController = require('./controllers/posts')
const flash = require('connect-flash')
const passport = require('passport')

app.use(bodyParser.json())
app.use(cors())

//PASSPORT STUFF
app.use(session({ secret: 'SECRET-ACCESS-CODE' }))
app.use(flash())

require('./config/passport')(passport)
app.use(passport.initialize())
app.use(passport.session())

app.use(function(req, res, next) {
  res.locals.currentUser = req.user
  next()
})

app.use('/api/posts/', postsController)

app.listen(process.env.PORT || 8081)
