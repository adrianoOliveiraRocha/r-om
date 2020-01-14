const User = (function() {
  const collection = 'user'

  return {
    login: function(callback) {
      const db = require('./../config/db')
      db.connect(callback)
    } 
  }
  
})()

module.exports = User