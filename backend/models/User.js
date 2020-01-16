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
            err ? callback(err) : callback(null, docs)
          })
        }
      })
    },

    save: function(data, callback) {
      const dbConfig = require('../config/dbConfig')
      const client = dbConfig.client

      client.connect(err => {
        if(err) callback(`error connectiong ${err}`)
        else {
          const db = client.db(dbConfig.dbName)
          db.collection(collection).insertOne(data, (err, result) => {
            err ? callback(err) : callback(null, result)
          })
        }
      })

    }

  }
  
})()

module.exports = User