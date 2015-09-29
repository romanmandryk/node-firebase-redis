node-firebase-redis
==============

Small app to demonstrate node, firebase and redis working together. Uses angular.js on the client to display data.

before running the app
----------
1) install Node.js

2) run `npm install -g grunt bower`

3) install Redis

4) in root folder of the app run `npm install`, then `bower install`



how to run?
------------
1) create server/config/local.env.js (use local.env.sample as a template) and add proper firebase uri.

2) run `grunt serve` to run the main app - this will create few entries in your firebase store and display it in web app

3) by default 'things' are alwayse fetched from firebase, but when you run `node server/syncFireBaseToRedis`, this will synchronize data to local redis store and following calls will hit redis instead (check console output)


