var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

//our only one  route
app.get('/', function (req, res) {
   res.sendFile(__dirname + '/start1.html');
})

var server = app.listen(process.env.PORT || 2001, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
