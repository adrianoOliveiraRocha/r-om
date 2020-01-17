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

module.exports.save = (req, res) => {
  const data = req.query;
  const User = require('./../models/User')
  User.save(data, (err, result) => {
    if(err) {
      console.log(err)
      res.send("Something wrong")
    }
    else {
      console.log(result.insertedId)
      res.send("It's done!")
    }
  })
}

module.exports.getUser = (req, res) => {
  const _id = req.query._id
  const User = require('./../models/User')
  
  User.getUser(_id, (err, result) => {
    if(err) res.send(err)
    else {
      res.json(result)
    }
  })

} 

module.exports.update = (req, res) => {
  const data = req.query
  const User = require('./../models/User')
  User.getUser(data, (err, result) => {
    if(err) res.send(err)
    else {
      res.json(result)
    }
  })
}
