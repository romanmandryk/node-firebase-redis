var Firebase = require('firebase');
var config = require('../config/environment');
var ref = new Firebase(config.firebase.uri);

module.exports = ref;
