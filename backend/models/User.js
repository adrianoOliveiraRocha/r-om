const User = (function() {
  const collection = 'user'

  return {
    getUsers: function(callback) {
      const dbConfig = require('../config/dbConfig')
      const client = dbConfig.client

      client.connect((err) => {
        if(err ) callback(err)
        else {
          const db = client.db(dbConfig.dbName)
          db.collection(collection).find({}).toArray((err, docs) => {
            client.close(err ? console.log('db openned') : console.log('db closed'))
            err ? callback(err) : callback(null, docs)
          })
        }
      })
    }

  }
  
})()

module.exports = User