

const express = require('express')
const router = express.Router()
const Controller = require('../controllers')

const studentValid = (req, res, next) => {
  const sesStudentId = req.session.studentId
  const curStudentId = req.params.studentId
  const curInstructorId = req.params.instructorId
  if (curInstructorId) {
    res.redirect(`/Instructor/${curInstructorId}`)
  } else if (sesStudentId != curStudentId) {
    res.redirect(`/student/${sesStudentId}`)
  } else {
    next()
  }
}

router.get("/:studentId", studentValid, Controller.studentHome)
router.get("/:studentId/courses/:courseId/enroll", studentValid, Controller.studentEnroll)
router.get("/:studentId/courses/:courseId/unenroll", studentValid, Controller.studentUnEnroll)
router.get("/:studentId/courses/", studentValid, Controller.studentCourses)


module.exports = router;

