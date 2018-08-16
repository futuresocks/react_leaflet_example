const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient;

const cors = require('cors')

app.use(cors())

MongoClient.connect('mongodb://localhost:27017', function(err, client){
  if(err){
    console.log(err);
    return
  }

  const db = client.db('bucketlistdb');
  const list = db.collection('list');

  app.get('/bucketlist', (req, res) => {
    list.find().toArray(function(err, countries){
      if(err){
        console.log(err);
        res.status(500);
        res.send();
      }

      res.json(countries)
    })
  })

  app.listen(3001, () => {
    console.log(`App listening`);
  })
})
