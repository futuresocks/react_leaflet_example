const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())

MongoClient.connect('mongodb://localhost:27017', function(err, client){
  if(err){
    console.log(err);
    return
  }

  const db = client.db('bucketdb');
  const list = db.collection('checklist');

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

  app.post('/bucketlist', (req, res) => {
    list.insertOne(req.body, function(err, result){
      if(err){
        console.log(err);
        res.status(500);
        res.send();
      }
      res.json(result.ops[0])
    })
  })

  app.delete('/bucketlist', (req, res) => {
    db.dropDatabase(function (err){
      if(err){
        console.log(err);
        res.status(500);
        res.send()
      }
      res.status(204)
      res.send();
    });
  })

  app.listen(3001, () => {
    console.log(`App listening`);
  })
})
