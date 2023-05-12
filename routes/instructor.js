/**
 * METHOD 	ENDPOINT 	DESKRIPSI
GET 	/instructor/:instructorId/ 	menampilkan seluruh course yang miliki instructor beserta jumlah student
GET 	/instructor/:instructorId/courses/:courseId 	mengubah course yang sudah ada dan dimiliki oleh instructor
POST 	/instructor/:instructorId/courses/:courseId 	submit course yang sudah di edit
 */
const express = require('express')
const router = express.Router()
const Controller = require('../controllers')

const instructorValid = (req, res, next) => {
  const sesinstructorId = req.session.instructorId
  const curinstructorId = req.params.instructorId
  const curStudentId = req.session.studentId
  if (curStudentId) {
    res.redirect(`/student/${curStudentId}`)
  } else if (sesinstructorId != curinstructorId) {
    res.redirect(`/instructor/${sesinstructorId}`)
  } else {
    next()
  }
}

router.get("/:instructorId", instructorValid, Controller.instructorHome)
router.get("/:instructorId/courses/:courseId", instructorValid, Controller.editCourse)
router.post("/:instructorId/courses/:courseId", instructorValid, Controller.editCoursePost)



module.exports = router;
