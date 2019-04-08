const express = require('express');
const port = 3000;
const path = require('path');
const cors = require('cors');
const axios = require('axios');

const app = express();

function listenCB () {
    console.log('now we\'re running server on port: ' + port);
}

// Now let's add the static files with express middleware

app.use(cors());
app.get('/', (req, res)=>{
  console.log("req unparsed url ", req._parsedUrl.query)
  axios.get(req._parsedUrl.query)
  .then(function(response) {
    res.status(200);
    res.json(response.data)
    console.log( "made it through axios call")
  })
  .catch(function (error) {
    console.log("error ", error)
  }); 
})

app.listen(port, listenCB);