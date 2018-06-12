var MongoClient = require('mongodb').MongoClient, assert = require('assert');
var url = 'mongodb://localhost:27017/test';
var data = require('../controller/CrawlerData');


var data = {
    connectData:  function (){
        return new Promise((resolve, reject) => {
            MongoClient.connect(url,  function (err, client) {
                resolve(client);
            })
        });
    },

}
module.exports = data;