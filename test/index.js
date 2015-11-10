var expect = require('chai').expect;
var is = require('../lib/is/index');

describe('is micro-checking library', function() {
  describe('is.arguments', function () {
    it('should return true if passed parameter type is arguments', function () {
      var getArguments = function () {
          return arguments;
      };
      var arguments = getArguments('test');
      expect(is.arguments(arguments)).to.be.true;
    });
    it("should return false if passed parameter type is not arguments", function () {
      var notArguments = ['test'];
      expect(is.arguments(notArguments)).to.be.false;
    });
  });
  
  describe('is.array', function () {
    it('should return true if passed parameter type is array', function () {
      expect(is.array(['value1','value2'])).to.be.true;
    });
    it("should return false if passed parameter type is not array", function () {
      expect(is.array('nieh')).to.be.false;
    });
  });
 
  describe('is.boolean', function () {
    it('should return true if passed parameter type is boolean', function () {
      expect(is.boolean(true)).to.be.true;
	  expect(is.boolean(false)).to.be.true;
    });
    it("should return false if passed parameter type is not boolean", function () {
      expect(is.boolean('iolo')).to.be.false;
    });
  });
  
  describe('is.date', function () {
    it('should return true if passed parameter type is date', function () {
      expect(is.date(new Date(2015-10-5))).to.be.true;
    });
    it("should return false if passed parameter type is not date", function () {
      expect(is.date('dang')).to.be.false;
    });
  });

  describe('is.error', function () {
    it('should return true if passed parameter type is error', function () {
      expect(is.error(new Error())).to.be.true;
    });
    it("should return false if passed parameter type is not error", function () {
      expect(is.error('dang')).to.be.false;
    });
  });
  
  describe('is.function', function () {
    it('should return true if passed parameter type is function', function () {
      expect(is.function(new Function())).to.be.true;
    });
    it("should return false if passed parameter type is not function", function () {
      expect(is.function('dang')).to.be.false;
    });
  });

  describe('is.nan', function () {
    it('should return true if passed parameter type is nan', function () {
      expect(is.nan(0/0)).to.be.true;
    });
    it("should return false if passed parameter type is not nan", function () {
      expect(is.nan(1)).to.be.false;
    });
  });
  
  describe('is.null', function () {
    it('should return true if passed parameter type is function', function () {
      expect(is.null(null)).to.be.true;
    });
    it("should return false if passed parameter type is not function", function () {
      expect(is.null('nieh')).to.be.false;
    });
  });
  
  describe('is.number', function () {
    it('should return true if passed parameter type is number', function () {
      expect(is.number(0)).to.be.true;
    });
    it("should return false if passed parameter type is not number", function () {
      expect(is.number('nieh')).to.be.false;
    });
  });
  
  describe('is.object', function () {
    it('should return true if passed parameter type is object', function () {
      expect(is.object(new Object())).to.be.true;
    });
    it("should return false if passed parameter type is not object", function () {
      expect(is.object('fu')).to.be.false;
    });
  });
  /*
  describe('is.json', function () {
    it('should return true if passed parameter type is object', function () {
      expect(is.object(new Object())).to.be.true;
    });
    it("should return false if passed parameter type is not object", function () {
      expect(is.object('fu')).to.be.false;
    });
  });  

  describe('is.regexp', function () {
    it('should return true if passed parameter type is regexp', function () {
      expect(is.object(new Object())).to.be.true;
    });
    it("should return false if passed parameter type is not regexp", function () {
      expect(is.object('fu')).to.be.false;
    });
  }); */
  
  describe('is.string', function () {
    it('should return true if passed parameter type is string', function () {
      expect(is.string('test')).to.be.true;
    });
    it("should return false if passed parameter type is not string", function () {
      expect(is.string(28)).to.be.false;
    });
  });
  
  describe('is.char', function () {
    it('should return true if passed parameter type is char', function () {
      expect(is.char('a')).to.be.true;
    });
    it("should return false if passed parameter type is not char", function () {
      expect(is.char('fu')).to.be.false;
    });
  });
});
