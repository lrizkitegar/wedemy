require('dotenv').config({path: 'setting.env'})
const express = require('express')
const router = require('./routes')
const session = require('express-session')
const app = express()
const port = process.env.PORT

app
  .set('view engine', 'ejs')
  .use(express.static("public"))
  .use(express.urlencoded({ extended: false }))
  .use(session({
    secret: 'pairprogramming',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      sameSite: true,
      maxAge: 3600 * 1000
    }
  }))
  .use(router)

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });