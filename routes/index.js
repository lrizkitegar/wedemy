const express = require('express')
const router = express.Router()
const Controller = require('../controllers')

router
  .get("/", Controller.home)
  .get("/login")
  .get("/logout")
  .get("/register")
  .use("/student", require('./student'))
  .use("/instructor", require('./instructor'))

module.exports = router;