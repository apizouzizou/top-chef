var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();
var path = require('path');
var port = 8081;
var  url = "https://restaurant.michelin.fr/restaurants/paris"


app.get('/scrape', function(req, res){

  request(url, function(err,resp, html){
    if(!err){
      var $ = cheerio.load(html);
      var title

      var json = {title : ""}

       $('.poi_card-display-title').filter(function(){

         var data = $(this)

         title = data.text()

         json.title = title
       })
    }

    fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){
      console.log('File successfully written! - Check your project directory for the output.json file');
    })

    res.send('Check your console!')
  });
})

app.listen('8081');
exports = module.exports = app;
