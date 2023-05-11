const express = require('express')
const router = express.Router()
const Controller = require('../controllers')

const loginCheck = (req, res, next) => {
  const session = req.session
  if (!session.studentId && !session.instructorId) {
    const err = 'Please login or register first'
    res.redirect(`/?err=${err}`)
  } else {
    next()
  }
}



router
  .get("/", Controller.home)
  .get("/login",Controller.loginGet)
  .post("/login",Controller.loginPost)
  .get("/logout",Controller.logout)
  .get("/register",Controller.registerGet)
  .post("/register",Controller.registerPost)
  .use(loginCheck)
  .use("/student", require('./student'))
  .use("/instructor", require('./instructor'))

module.exports = router;