const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
var mongoose = require('mongoose')
const app = express()
const registerRoutes = require('./routes/registerRouter')
const loginRoutes = require('./routes/loginRouter')
const postRoutes = require('./routes/postRouter')
const orderRouter = require('./routes/orderRouter')
const conf = require('./config/config')

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
app.use('/posts', postRoutes)
app.use('/orders', orderRouter)

app.use(function (req, res, next) {
  res.status(404).send({ message: 'Error 404' })
})

app.listen(conf.port, () => {
  console.log('Server connected.')
})
