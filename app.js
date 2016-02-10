var express = require('express');
var app = express();
var http = require('http');

app.get('/weather', function (req, res){
  res.send('It is Raining')
});

app.get('/weather/:city', function(request, response) {

  http.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=fded0b7b22bcd7e1318b3fcf44ff99b9' + request.params.city + '&jscmd=data&format=json', function(res){ 
    // console.log(res.statusCode);
    var body = '';
    res.on('data', function(d) {
      console.log(d)
      body += d
    });

    res.on('end', function() {
        console.log(body) 
     });

    console.log(typeof body)

    });

  });

app.listen('3000', function() {
  console.log('Serving on Port 3000');
});