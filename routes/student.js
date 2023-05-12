

const express = require('express')
const router = express.Router()
const Controller = require('../controllers')

const studentValid = (req, res, next) => {
  const sesStudentId = req.session.studentId
  const curStudentId = req.params.studentId
  const curInstructorId = req.session.instructorId
  if (curInstructorId) {
    return res.redirect(`/instructor/${curInstructorId}`)
  } else if (sesStudentId != curStudentId) {
    return res.redirect(`/student/${sesStudentId}`)
  } else {
    next()
  }
}

router.get("/:studentId", studentValid, Controller.studentHome)
router.get("/:studentId/courses/:courseId/enroll", studentValid, Controller.studentEnroll)
router.get("/:studentId/courses/:courseId/unenroll", studentValid, Controller.studentUnEnroll)
router.get("/:studentId/courses/", studentValid, Controller.studentCourses)


module.exports = router;

