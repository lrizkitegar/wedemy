

const express = require('express')
const router = express.Router()
const Controller = require('../controllers')

router.get("/:studentId")
router.get("/:studentId/courses/:courseId/enroll")
router.get("/:studentId/courses/:courseId/unenroll")
router.get("/:studentId/courses/")


module.exports = router;

