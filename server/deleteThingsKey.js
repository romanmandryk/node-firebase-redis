
process.env.NODE_ENV = 'development';

var redis = require("redis");
var redisClient = redis.createClient();

deleteFromRedis();


function deleteFromRedis(){

    redisClient.del('things', function(){
      redisClient.end();
    });

}
