module.exports = (app) => {
  app.post('/login', (req, res) => {
    require('./../control/core').login(req, res)
  })
}
