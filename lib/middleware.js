var Restito = require('./Restito');

module.exports = function(config) {
  return function restito(req, res, next){
  	config = config || {};
    req.restito = new Restito(req, config);
    next();
  };
};
