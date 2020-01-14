// https://www.youtube.com/watch?v=CyTWPr_WwdI&t=2727s
const User = (function() {
  const collection = 'user'

  return {
    login: function(callback) {
      const db = require('./../config/db')
      db.connect(callback)
    }, 

    getUsers: function(callback) {
      const db = require('./../config/db')
      db.connect(err => {
        if(err) callback(err)
        else {
          db.getDB().collection('user').find({}).toArray(callback)
        }
      })
      
    }
  }
  
})()

module.exports = User