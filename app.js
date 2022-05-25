const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const users = require('./users.json').users
const app = express()
const port = 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`App is now running on http://localhost:${port}`)
})