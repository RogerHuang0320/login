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

app.post('/login', (req, res) => {
  const { email, password } = req.body
  const user = users.find(user =>
    user.email === email && user.password === password
  )
  if (!user) {
    res.send('You have a wrong email or password')
  }
  res.render('login', { user })
})

app.listen(port, () => {
  console.log(`App is now running on http://localhost:${port}`)
})