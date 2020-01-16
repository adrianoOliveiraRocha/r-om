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
