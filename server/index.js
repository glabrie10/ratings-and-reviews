const express = require('express');
const queries = require("./queries");
const app = express();
const PORT = 3001;
const newRelic = require('newrelic');

app.use(express.static('../client/dist'));
app.use(express.json())

app.listen(PORT, () => {
  console.log(`Server running and listening now on port: ${PORT}`);
});
// const formatResults = (result) => {
//   var dicks = result
//   return dicks;

// }
// List Reviews
app.get('/reviews/:product_id/list', (req, res) => {
  const id = req.params.product_id
  queries.retrieveResults(id, ( err, result ) => {
    if (err) {
      res.status(400).send(err, 'nothing found');
    } else {
      res.status(200).send(result);
    }
  })
});


// get review meta data
// three seperate
// getRatingTotals, getRecommendedTotal, getCharacteristics
app.get('/reviews/:product_id/meta', (req, res) => {
  const id = req.params.product_id
  res.send('get meta data')
})

// add review
app.post('/reviews/:product_id', (req, res) => {
  const id = req.params.product_id
  res.send('add review')
})

// Mark Review as Helpful
app.put('/reviews/helpful/:review_id', (req, res) => {
  const id = req.params.review_id
  res.send('Mark Review Helpful')
})

// Report Review
app.put('/reviews/report/:review_id', (req, res) => {
  const id = req.params.review_id
  res.send('report review')
})