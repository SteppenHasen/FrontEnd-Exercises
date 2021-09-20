var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.sendfile('index.html');
});
app.get('/blogr', function(req, res) {
  res.file('./blogr-landing-page-main/index.html');
});
app.get('/time_track', function(req, res) {
  res.file('./time-tracking-dashboard-main/index.html');
});
app.get('/sunnyside', function(req, res) {
  res.file('./sunnyside-agency-landing-page-main/index.html');
});
app.get('/calculator', function(req, res) {
  res.file('./tip-calculator-app/index.html');
});

app.listen(8080);

console.log('Сервер стартовал!');