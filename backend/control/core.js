module.exports.getUsers = (req, res) => {
  const User = require('./../models/User')
  User.getUsers((err, docs) => {
    if(err) {
      res.send(err)
    } else {
      res.send(docs)
    }
  })
}
