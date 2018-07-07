var express = require('express'),
    exphbs  = require('express-handlebars'),
    http = require('http'),
    request = require('request'),
    bodyParser = require('body-parser'),
    app = express(),
    server = http.Server(app),
    helpers = require(__dirname + '/helpers/helpers.js'),
    google_sheets_helpers = require(__dirname + '/helpers/google-sheets.js');

google_sheets_helpers.load_data(function(data, data_last_modified){
  app.engine('handlebars', exphbs({defaultLayout: 'main'}));
  app.set('views', __dirname + '/views');
  app.set('view engine', 'handlebars');

  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.get('/', function (req, res) {
    res.render('home', {
      data: data,
      data_last_modified: data_last_modified,
      sc_security:process.env.SC_PROJECT,
      sc_project:process.env.SC_SECURITY
    });
  });

  app.use(express.static(__dirname + '/public'));

  app.set('port', process.env.PORT || 3000);
  app.set('ip', '127.0.0.1');

  var listener = app.listen(process.env.PORT, function () {
    console.log('Your app is running on port ' + listener.address().port);
  });
});