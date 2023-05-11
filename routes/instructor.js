/**
 * METHOD 	ENDPOINT 	DESKRIPSI
GET 	/instructor/:instructorId/ 	menampilkan seluruh course yang miliki instructor beserta jumlah student
GET 	/instructor/:instructorId/courses/:courseId 	mengubah course yang sudah ada dan dimiliki oleh instructor
POST 	/instructor/:instructorId/courses/:courseId 	submit course yang sudah di edit
 */
const express = require('express')
const router = express.Router()
const Controller = require('../controllers')

router.get("/:instructorId")
router.get("/:instructorId/courses/:courseId")
router.post("/:instructorId/courses/:courseId")


module.exports = router;
