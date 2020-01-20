module.exports.login = (req, res) => {
  const User = require('./../models/User')

  User.login(req.query, (err, result) => {
    err ? res.json(err) : res.json(result)
  })
  
}

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
  User.update(data, (err, result) => {
    if(err) res.send(err)
    else {
      res.send(result.ok === 1 ? true : false)
    }
  })

}

module.exports.delete = (req, res) => {
  const _id = req.query._id
  const User = require('./../models/User')

  User.delete(_id, (err, result) => {
    if(err) res.json(err)
    else {
      res.send(result.ok === 1 ? true : false)
    }
  })
}
