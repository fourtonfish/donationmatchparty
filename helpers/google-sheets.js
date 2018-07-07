var GoogleSpreadsheet = require('google-spreadsheet'),
    moment = require('moment'),
    url = require('url'),
    helpers = require(__dirname + '/helpers.js');

var creds = require(__dirname + '/../.data/client_secret.json');
var doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEETS_SPREADSHEET_ID);

module.exports = {
  load_data: function(cb) {
    doc.useServiceAccountAuth(creds, function (err) {
      doc.getInfo(function(err, info) {
        // console.log(info);
        var data = [],
            data_last_modified = moment(info.updated).fromNow();

        doc.getRows(1, function (err, rows) {
          // console.log(rows);
          
          rows.forEach(function(row, index){
            var urls = [];
            row.urls.split('\n').forEach(function(one_url){
              urls.push({
                title: url.parse(one_url).hostname,
                url: one_url
              });
            });

            data.push({
              name: row.name,
              cause: row.cause,
              max_match: row.maxmatch,
              max_match_num: parseFloat(row.maxmatch.replace(/(\$|,)/gi, '')),
              urls: urls
            });
          });
          if (cb){
            cb(data, data_last_modified);
          }
          else{
            console.log('load_data was called without a callback...');
          }        
        });    
      });
    });
  }
};