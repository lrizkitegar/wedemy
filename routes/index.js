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
  let { studentId, instructorId } = req.session
  let url = req.originalUrl
  let statusUrl = url.includes("student") || url.includes("instructor")
  if (!studentId && !instructorId) {
    return next()
  } else if (studentId && !statusUrl) {
    req.session.statusLogin = false
    return res.redirect(`/student/${studentId}`)
  }else if (instructorId && !statusUrl) {
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