| METHOD | ENDPOINT                                       | DESKRIPSI                                                                                              |
|--------|------------------------------------------------|--------------------------------------------------------------------------------------------------------|
| GET    | /                                              | akan di arahkan ke halaman login jika belum login, dan di arahkan ke user yang sesuai jika sudah login |
| GET    | /login                                         | login                                                                                                  |
| POST   | /login                                         | login                                                                                                  |
| GET    | /register                                      | register new student                                                                                    |
| POST   | /register                                      | register new student                                                                                    |
| GET    | /logout                                        | logout                                                                                                  |
| GET    | /student/:studentId/                           | menampilkan seluruh list course yang tersedia                                                          |
| GET    | /student/:studentId/courses/:courseId/enroll   | menambahkan course yang di pilih oleh student                                                          |
| GET    | /student/:studentId/courses/:courseId/unenroll | menghapus course yang di pilih oleh student                                                            |
| GET    | /student/:studentId/courses                    | menampilkan list course yang di miliki student                                                         |
| GET    | /instructor/:instructorId/                     | menampilkan seluruh course yang miliki instructor beserta jumlah student                               |
| GET    | /instructor/:instructorId/courses/:courseId    | mengubah course yang sudah ada dan dimiliki oleh instructor                                            |
| POST   | /instructor/:instructorId/courses/:courseId    | submit course yang sudah di edit                                                                       |

SCHEMA ERD:

![Screenshot of a comment on a GitHub issue showing an image, added in the Markdown, of an Octocat smiling and raising a tentacle.](/ERD.png)

TODOS:
1. ~~seeder :~~
- ~~Categories~~
- ~~Users (role instructor)~~
- ~~InstructorsDetails~~
- ~~Courses --> ini biar tampilan menarik buat 8 data atau lebih yaa sama column tambahin poster (string)~~
2. ~~register user (hanya untuk roles student) --> CR user & studentDetails (chaining create)~~
3. ~~login~~
4. ~~read all courses~~
5. ~~read my couses by logged student~~
6. ~~delete studentcourses (unenroll) by logged student~~
7. read my courses and total student  by logged instructor
8. edit my courses by logged instructor
9. ~~logout~~
