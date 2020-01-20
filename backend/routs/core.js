module.exports = (app) => {
  app.post('/login', (req, res) => {
    require('./../control/core').login(req, res)
  })

  app.post('/save', (req, res) => {
    require('./../control/core').save(req, res)
  })

  app.get('/get-users', (req, res) => {
    require('./../control/core').getUsers(req, res)
  })

  app.get('/get-user', (req, res) => {
    require('./../control/core').getUser(req, res)
  })

  app.post('/update', (req, res) => {
    require('./../control/core').update(req, res)
  })

  app.get('/delete', (req, res) => {
    require('./../control/core').delete(req, res)
  })
}
