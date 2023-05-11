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

const alrdyLogin = (req, res, next) => {
  let { studentId, instructorId, statusLogin } = req.session
  if (!studentId && !instructorId) {
    return next()
  } else if (studentId && statusLogin) {
    req.session.statusLogin = false
    return res.redirect(`/student/${studentId}`)
  }else if (instructorId && statusLogin) {
    req.session.statusLogin = false
    return res.redirect(`/instructor/${instructorId}`)
  }
  next()
}

router
  .get("/logout", Controller.logout)
  .use(alrdyLogin)
  .get("/", Controller.home)
  .get("/login", Controller.loginGet)
  .post("/login", Controller.loginPost)
  .get("/register", Controller.registerGet)
  .post("/register", Controller.registerPost)
  .use(loginCheck)
  .use("/student", require('./student'))
  .use("/instructor", require('./instructor'))

module.exports = router;