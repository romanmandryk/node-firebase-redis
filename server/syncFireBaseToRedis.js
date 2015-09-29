
process.env.NODE_ENV = 'development';
var _= require('lodash');
_.merge(process.env, require('./config/local.env'));

var fbStore = require('./components/fbStore');
var redis = require("redis");
var jsonify = require('redis-jsonify');
var flat = require("flat");
var redisClient = redis.createClient();


var things = fbStore.child('things');

sync();


function sync(){
  things.once("value", function(data) {
    if(!data) { return console.error('data not loaded'); }
    /*var flattenedArray = flat.flatten(data.val());*/
    console.log(data.val());
    redisClient.set('things', JSON.stringify(data.val()), function(){
      redisClient.end();
    });

  });
}
