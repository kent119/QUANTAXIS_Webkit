var mongoose = require('mongoose');
var connWsc = mongoose.connect('mongodb://webadmin:wisers@ess17.wisers.com:15000/wsc');
var wscSchema = require('./wscSchema');

var wscQuery = mongoose.model('wasQuery', wscSchema)

module.exports = wscQuery;
