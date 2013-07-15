

function Restito(request, config) {
  this.query = request.query; 
  this.maxCount = config && config.maxCount ? config.maxCount : 100;
}


Restito.prototype.fields = function() {
  if (!this.query.fields) return [];
  var fields = this._split(this.query.fields, ',');
  return fields;
};


Restito.prototype.count = function() {
  if (!this.query.count) return this.maxCount;
  var count = parseInt(this.query.count, 10);
  if (isNaN(count)) return this.maxCount;
  if (count > this.maxCount) return this.maxCount;
  return count;
};


Restito.prototype.offset = function() {
  if (!this.query.offset) return 0;
  var offset = parseInt(this.query.offset, 10);
  if (isNaN(offset)) return 0;
  if (offset < 0) return 0;
  return offset;
};


Restito.prototype.sort = function() {
  if (!this.query.sort) return [];
  var fields = this._split(this.query.sort, ',');
  return fields;
};


Restito.prototype.filter = function() {
  var filter = this.query.filter;
  if (!filter) return {};
  var fields = {};
  filter = this._split(filter, '@');
  filter.forEach(function(cond){
    var split = cond.split(':');
    var param = split[0];
    var value = split[1] || '';
    if (/,/.test(value)) {
      value = this._split(value, ',');
    }
    fields[param] = value; 
  }.bind(this));
  return fields;
};


Restito.prototype._split = function(value, delimiter) {
  return value.split(delimiter).filter(function(el) {
    return el;
  });
};


module.exports = Restito;