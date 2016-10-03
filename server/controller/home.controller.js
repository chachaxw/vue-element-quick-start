module.exports = function(app) {
  app.get('/', function(req, res, next){
    res.send('Hello, server is running on the localhost:' + app.get('port'));
  });
};
