const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const cors = require('cors');

app.use(cors({ origin: 'http://localhost:3000' }));

const uri = "mongodb://localhost:27017/parking-data";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
    if (err){
        console.log('Error occurred while connecting to database',err);
    } else {
        console.log('Connected to database');
    }
});

// app.get('/credentials', async (req, res) => {
//     const db = client.db('parking-data');
//     const users = await db.collection('credentials').find().toArray();
//     res.json(credentials);
//   });

app.listen(3001, () => console.log('Listening on port 3001'));

app.post('/login', async (req, res) => {
    const db = client.db('parking-data');
    const user = await db.collection('credentials').findOne({username: req.body.username});
    if (user && user.password === req.body.password) {
      res.json({status: 'ok'});
    } else {
      res.json({status: 'error'});
    }
});
  