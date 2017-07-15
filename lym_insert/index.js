const mongo = require('mongodb').MongoClient

var doc = {
  firstName: process.argv[2],
  lastName: process.argv[3]
}


mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
  if (err) throw err
  var collection = db.collection('docs')
  collection.insert(doc, function(err, data) {
    if (err) throw err
    console.log(JSON.stringify(doc))
    db.close()
  })
})
