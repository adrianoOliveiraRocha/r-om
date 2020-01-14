module.exports = (app) => {
  app.get('/test', (req, res) => {
    require('../control/core').test(req, res)
  })

  app.post('/login', (req, res) => {
    require('./../control/core').login(req, res)
  })

  app.get('/get-users', (req, res) => {
    require('./../control/core').getUsers(req, res)
  })
}
