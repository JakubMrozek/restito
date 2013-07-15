var Restito = require('../lib/Restito');


describe('Restito', function() {
  
  describe('fields', function() {
 	
    it('should be empty array if there are no fields', function(){
	    var request = { query: { } };
	    var restito = new Restito(request);
	    restito.fields().should.be.eql([]);
	  });

	  it('should returns specific fields', function(){
	    var request = { query: { fields: 'name,email' } };
	    var restito = new Restito(request);
	    restito.fields().should.be.eql(['name', 'email']);
	  });

	  it('should returns non empty fields', function(){
	    var request = { query: { fields: ',name,email,' } };
	    var restito = new Restito(request);
	    restito.fields().should.be.eql(['name', 'email']);
	  });

  });


  describe('count', function(){
    
    it('should returns count', function(){
	    var request = { query: { count: 10 } };
	    var restito = new Restito(request);
	    restito.count().should.be.eql(10);
    });

    it('should change maxCount', function(){
	    var request = { query: { count: 1000 } };
	    var restito = new Restito(request, {maxCount: 50});
	    restito.count().should.be.eql(50);
    });

    it('should returns maxCount if there is no a count param', function(){
	    var request = { query: { } };
	    var restito = new Restito(request);
	    restito.count().should.be.eql(restito.maxCount);
    });

    it('should returns maxCount if the count param is not a number', function(){
	    var request = { query: { count: 'abc' } };
	    var restito = new Restito(request);
	    restito.count().should.be.eql(restito.maxCount);
    });

    it('should returns maxCount if the count param is higher than maxCount', function(){
	    var request = { query: { count: 10000 } };
	    var restito = new Restito(request);
	    restito.count().should.be.eql(restito.maxCount);
    });

  })


  describe('offset', function(){
    
    it('should returns offset', function(){
	    var request = { query: { offset: 10 } };
	    var restito = new Restito(request);
	    restito.offset().should.be.eql(10);
    });

    it('should returns 0 if there is no a offset param', function(){
	    var request = { query: { } };
	    var restito = new Restito(request);
	    restito.offset().should.be.eql(0);
    });

    it('should returns 0 if the offset param is not a number', function(){
	    var request = { query: { offset: 'abc' } };
	    var restito = new Restito(request);
	    restito.offset().should.be.eql(0);
    });

    it('should returns 0 if the offset param is lower than 0', function(){
	    var request = { query: { offset: -10 } };
	    var restito = new Restito(request);
	    restito.offset().should.be.eql(0);
    });

  });


  describe('sort', function() {
 	
    it('should be empty array if there are no sort fields', function(){
	    var request = { query: { } };
	    var restito = new Restito(request);
	    restito.sort().should.be.eql([]);
	  });

	  it('should returns specific sort fields', function(){
	    var request = { query: { sort: 'name,-email' } };
	    var restito = new Restito(request);
	    restito.sort().should.be.eql(['name', '-email']);
	  });

	  it('should returns non empty fields', function(){
	    var request = { query: { sort: ',name,-email,' } };
	    var restito = new Restito(request);
	    restito.sort().should.be.eql(['name', '-email']);
	  });

  });


  describe('filter', function() {
 	
    it('should be empty object if there are no sort fields', function(){
	    var request = { query: { } };
	    var restito = new Restito(request);
	    restito.filter().should.be.eql({});
	  });

	  it('should returns specific filter fields', function(){
	    var request = { query: { filter: 'name:Jakub@langs:cs,en,fr' } };
	    var restito = new Restito(request);
	    restito.filter().should.be.eql({
	    	name: 'Jakub',
	    	langs: ['cs', 'en', 'fr']
	    });
	  });

	  it('should returns specific filter fields with no empty values', function(){
	    var request = { query: { filter: 'name:Jakub@langs:,cs,en,fr,' } };
	    var restito = new Restito(request);
	    restito.filter().should.be.eql({
	    	name: 'Jakub',
	    	langs: ['cs', 'en', 'fr']
	    });
	  });

	  it('should returns specific filter fields with no empty names', function(){
	    var request = { query: { filter: '@name@langs:,cs,en,fr,' } };
	    var restito = new Restito(request);
	    restito.filter().should.be.eql({
	    	name: '',
	    	langs: ['cs', 'en', 'fr']
	    });
	  });

  });
  
}); 