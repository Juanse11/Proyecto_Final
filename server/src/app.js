const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
var mongoose = require('mongoose')
const app = express()
const registerRoutes = require('./routes/registerRouter')
const loginRoutes = require('./routes/loginRouter')

mongoose.connect(
  'mongodb://localhost/proyecto_final',
  { useNewUrlParser: true }
)
app.use(morgan('combined'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.use('/register', registerRoutes)
app.use('/login', loginRoutes)
app.use(function (req, res, next) {
  res.status(404).send({ message: 'Error 404' })
})

app.listen(3000, () => {
  console.log('Server connected.')
})
