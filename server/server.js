const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('port', process.env.PORT || 8080);

// 允许跨域(调试)
app.use(cors());

// 自动require controller文件
const files = fs.readdirSync('server/controller');
files.forEach(function(file) {
  if (file.indexOf('.controller') < 0) return;
  require('./controller/' + file)(app);
});

app.listen(app.get('port'), function(err) {
  if(err) {
    console.log(err);
  }
  console.log('CORS-enabled web server listening on the localhost:'+ app.get('port'));
});
