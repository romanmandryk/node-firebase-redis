
var fbStore = require('./fbStore');
var redis = require("redis");
var redisClient = redis.createClient();

module.exports.get = function(key, callback){
  redisClient.get(key, function(err, data){
    if (err || !data){
      var ref = fbStore.child(key);
      ref.once("value", function(data) {
        console.log('got data with key ' + key + ' from firebase');
        return callback(null, data.val());
      });
      return;
    }
    console.log('got data with key ' + key + ' from redis');
    callback(err, JSON.parse(data));
  });
};
