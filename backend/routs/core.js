module.exports = (app) => {
  app.post('/save', (req, res) => {
    require('./../control/core').save(req, res)
  })

  app.get('/get-users', (req, res) => {
    require('./../control/core').getUsers(req, res)
  })
}
