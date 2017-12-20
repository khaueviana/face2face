var options = {
    useMongoClient: true,
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0
  };

  var uri = "mongodb://face2face:sohosarrombados@tnis6.mongodb.net:27017/concrete-shard-0";

  var mongoose = require('mongoose');
  mongoose.connect(uri, options);
 
module.exports = { Mongoose: mongoose, UserSchema: userSchema }