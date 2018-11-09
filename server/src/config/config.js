module.exports = {
  port: process.env.PORT || 3000,
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
