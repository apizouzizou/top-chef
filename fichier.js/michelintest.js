var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();
var path = require('path');
var port = 8000;
var  url = "https://restaurant.michelin.fr/restaurants/paris/"


//app.get('/scrape', function(req, res){

request(url, function(err,resp, body){
  if(err){
    console.log(err);
  }
  else{
    console.log(body);

  }
})



app.listen(port);
console.log("serveur is listening on " + port);
