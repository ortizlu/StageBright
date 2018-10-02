const LocalStrategy = require('passport-local').Strategy
const User = require('../db/models/user')

// when a user is logged in and the user wants to access another site in the page, the cookie is transferred. The cookie contains
// information about the user, most likely the mongo id and is done using serializeUser (putting the user info into the cookie that is)

// deserializeUser is when a user makes a request to see their profile page for example, we will take that cookie
// and grab that ID so we can pull up that users info.

module.exports = passport => {
  passport.serializeUser((user, done) => {
    // we're calling done with null (which is the error/ useless but needed. If we pass a user into the callback we're pretty certain
    // there's no error) and user.id which is the property associated with the person in mongo
    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user)
    })
  })

  passport.use(
    'local-signup',
    // NOTE: a new object instance?
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
      },
      //NOTE: how come the callback can be invoked with different parameters?
      (req, email, password, callback) => {
        // check to see if this email is taken
        User.findOne({ email: email }, (err, user) => {
          // an error just in case. Most likely will skip to next if statement
          if (err) return callback(err)
          // if the user is already taken, send them a flash message
          if (user) {
            //NOTE: what is going on here?
            return callback(
              null,
              false,
              req.flash('signupMessage', 'this email is already taken')
            )
          }
          //if the email is not taken, create a new user
          else {
            //creates a new user using the model
            //NOTE: how come we don't use User.create()...?
            const newUser = new User()
            //NOTE: I'm assuming that local.email is what the user inputs?
            newUser.email = email
            //NOTE: where does the encrypt method come from?
            newUser.password = newUser.encrypt(password)

            //NOTE: how come we have to save this user whereas what we've been doing in mongoose we didn't?
            newUser.save(err => {
              if (err) throw err
              return callback(null, newUser)
            })
          }
        })
      }
    )
  )

  passport.use(
    'local-login',
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
      },
      (req, email, password, callback) => {
        // search for a user with this email
        User.findOne({ email: email }, (err, user) => {
          if (err) return callback(err)
          // if the user does not exist in DB, return an error
          if (!user) {
            return callback(
              null,
              false,
              req.flash('loginMessage', 'No user found')
            )
          }
          // check password against saved password
          if (!user.validPassword(password)) {
            return callback(
              null,
              false,
              req.flash('loginMessage', 'Incorrect password')
            )
          }
          // pass user into callback
          return callback(null, user)
        })
      }
    )
  )
}
