module.exports.login = (req, res) => {
  const data = req.query
  const User = require('./../models/User')

  User.login(err => {
    if(err) {
      res.json(err)
    } else {
      res.json({ message: 'It is connected!', data })
    }
  })
  
}

module.exports.test = (req, res) => {
  const db = require('./../config/db')
  db.connect(err => {
    if(err) {
      res.json(err)
    } else {
      res.json({ message: 'It is connected!' })
    }
  })
  
}

module.exports.getUsers = (req, res) => {
  const User = require('./../models/User')
  User.getUsers((err, documents) => {
    if(err) res.json(err)
    else {
      res.json(documents)
    }
  })
}
