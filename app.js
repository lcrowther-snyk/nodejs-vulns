/**
 * Module dependencies.
 */

var st = require('st');
var dust = require('dustjs-linkedin');
var dustHelpers = require('dustjs-helpers');
var express = require('express');
var http = require('http');
var cons = require('consolidate');


var app = express();
var routes = require('./routes');

// all environments
app.set('port', process.env.PORT || 3001);
app.engine('dust', cons.dust);
cons.dust.helpers = dustHelpers;

app.get('/', routes.index);

// Static
app.use(st({ path: './public', url: '/public' }));

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
