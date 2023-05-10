| METHOD | ENDPOINT                                    | DESC                                                                                                   |
|--------|---------------------------------------------|--------------------------------------------------------------------------------------------------------|
| GET    | /                                           | akan di arahkan ke halaman login jika belum login, dan di arahkan ke user yang sesuai jika sudah login |
| GET    | /login                                      | login                                                                                                  |
| GET    | /student/:studentId/                        | menampilkan seluruh list course yang tersedia                                                          |
| GET    | /student/:studentId/courses                 | menampilkan list course yang di miliki student                                                         |
| GET    | /instructor/:instructorId/                  | menampilkan seluruh course yang miliki instructor beserta jumlah student                               |
| GET    | /instructor/:instructorId/courses/:courseId | mengubah course yang sudah ada dan dimiliki oleh instructor                                            |
| POST   | /instructor/:instructorId/courses/:courseId |                                                                                                        |

