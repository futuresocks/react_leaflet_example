const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.get('/bucketlist', () => {

})

app.listen(3001, () => {
  console.log(`App listening`);
})
