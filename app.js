const express = require('express')
const router = require('./routes')
const app = express()
const port = 3000

app
  .set('view engine', 'ejs')
  .use(express.static("public"))
  .use(express.urlencoded({ extended: false }))
  .use(router)


app.listen(port, () => {
  console.log(`WEDEMY listening on port ${port}`)
})