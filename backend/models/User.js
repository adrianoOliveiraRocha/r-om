const User = (function() {
  const collection = 'user'

  return {

    login: function(data, callback) {
      const dbConfig = require('../config/dbConfig')
      const client = dbConfig.client
      
      client.connect(err => {
        if(err) callback(err)

        const db = client.db(dbConfig.dbName)
        db.collection(collection)
          .findOne({ email: data.email, pwd: data.pwd }, (err, result) => {
            err ? callback(err) : callback(null, result)              
          })

      })

    },
    
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
      
    },

    getUser: function(_id, callback) {
      const dbConfig = require('../config/dbConfig')
      const client = dbConfig.client
      const ObjectID = dbConfig.ObjectID
      const userId = new ObjectID(_id.trim())

      client.connect(err => {
        if(err) callback(err)
        else {
          const db = client.db(dbConfig.dbName)
          db.collection(collection)
            .findOne({_id: userId}, (err, result) => {
              err ? callback(err) : callback(err, result)
            })
        }
      })

    },

    update: function(data, callback) {
      
      const dbConfig = require('../config/dbConfig')
      const client = dbConfig.client
      const ObjectID = dbConfig.ObjectID
      let objectId = new ObjectID(data._id)
            
      client.connect(err => {
        if(err) callback(err)
        else {
          const db = client.db(dbConfig.dbName)
          db.collection(collection)
          .findOneAndUpdate({_id: objectId}, { $set: { email: data.email } }, (err, result) => {
            err ? callback(err) : callback(null, result)
          })
        }
      })

    },

    delete: function(_id, callback) {
      const dbConfig = require('./../config/dbConfig')
      const client = dbConfig.client
      const ObjectID = dbConfig.ObjectID
      let objectId = new ObjectID(_id)

      client.connect(err => {
        if(err) callback(err)
        const db = client.db(dbConfig.dbName)
        db.collection(collection)
          .findOneAndDelete({ _id: objectId }, (err, result) => {
            err ? callback(err) : callback(null, result)
          })

      })
    }

  }
  
})()

module.exports = User