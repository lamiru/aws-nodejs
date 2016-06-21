var express = require('express')
var app = express()
app.use('/', function(req, res) {
  res.send('Hello World!')
})
app.listen(8080)
console.log('Server running at http://localhost:8080/')
module.exports = app
