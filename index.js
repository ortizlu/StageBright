const express = require('express')
const app = express()
const flash = require('connect-flash')
const hbs = require('hbs')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')
const indexRoutes = require('./routes/index')
const passport = require('passport')
const methodOverride = require('method-override')

app.use(methodOverride('_method'))
// morgan is used for logging request details. It makes the 200 console.logs we see in the terminal when requesting a site
app.use(cookieParser())
app.use(bodyParser())

hbs.registerPartials(__dirname + '/views/partials')
hbs.registerHelper('equal', function(lvalue, rvalue, options) {
  if (arguments.length < 3)
    throw new Error('Handlebars Helper equal needs 2 parameters')
  if (lvalue != rvalue) {
    return options.inverse(this)
  } else {
    return options.fn(this)
  }
})
app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')
// used for using the public folder in express
app.use(express.static(__dirname + '/public'))
// the secret is what is used to compute the hash. Without this string (which could be anything) access to the session would essentially be denied.
app.use(session({ secret: 'SECRET-EXPRESS-PASSWORD' }))
app.use(flash())
// secret session cookie is signed with this secret to prevent tampering???????
// used for flash messages

require('./config/passport')(passport)
app.use(passport.initialize())
app.use(passport.session())

app.use(function(req, res, next) {
  res.locals.currentUser = req.user
  next()
})

// since we required the routes/controllers above, this makes express connect with our routes
app.use('/', indexRoutes)

app.set('port', process.env.PORT || 8081)

app.listen(app.get('port'), () => {
  console.log('LETS GET IT STARTED!')
})
