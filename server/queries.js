const  db  = require('./access.js')

db.connect()

const retrieveResults =(id, cb) => {
  db.query(`SELECT results.*, photos.* FROM results FULL OUTER JOIN photos ON results.review_id = photos.reviewp_id WHERE results.product_id = ${id} LIMIT 5;`, function(error, results){
    if (error) {
      cb(error, null)
    } else {
      console.log(results)
      cb (null, results)
    }
  })
}

module.exports ={
  retrieveResults
}