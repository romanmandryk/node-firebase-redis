'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/angularfullstack2-dev'
  },
  firebase: {
    uri: process.env.FIREBASE_URI
  },

  seedDB: true
};
