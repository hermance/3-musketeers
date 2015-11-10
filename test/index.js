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

    it('should return true if passed parameter type is array', function () {;
      expect(is.array(['value1','value2'])).to.be.true;
    });
    it("should return false if passed parameter type is not array", function () {
      expect(is.array('hello')).to.be.false;
    });
  });

 describe('is.boolean', function () {

    it('should return true if passed parameter type is boolean (true, false)', function(){
	expect(is.boolean(true)).to.be.true;
	expect(is.boolean(false)).to.be.true;
    });
    it("should return false if passed parameter type is not boolean", function () {
        expect(is.boolean('hello')).to.be.false;
	expect(is.boolean(2)).to.be.false;
	expect(is.boolean([])).to.be.false;
    });
  });

 describe('is.date', function () {

    it('should return true if passed parameter type is date', function () {
	var arguments = new Date();
	expect(is.date(arguments)).to.be.true;
    });
    it("should return false if passed parameter type is not date", function () {
        expect(is.date('hello')).to.be.false;
	expect(is.date(2)).to.be.false;
	expect(is.date([])).to.be.false;
        expect(is.date(true)).to.be.false;
	expect(is.date(false)).to.be.false;
    });
  });

 describe('is.error', function () {

    it('should return true if passed parameter type is error', function () {
	var arguments = new Error();
	expect(is.error(arguments)).to.be.true;
    });
    it("should return false if passed parameter type is not error", function () {
        expect(is.error('hello')).to.be.false;
	expect(is.error(2)).to.be.false;
	expect(is.error([])).to.be.false;
        expect(is.error(true)).to.be.false;
	expect(is.error(false)).to.be.false;
    });
  });

 describe('is.function', function () {

    it('should return true if passed parameter type is function', function () {
	var arguments = function(){};
	expect(is.function(arguments)).to.be.true;
    });
    it("should return false if passed parameter type is not function", function () {
        expect(is.function('hello')).to.be.false;
	expect(is.function(2)).to.be.false;
	expect(is.function([])).to.be.false;
        expect(is.function(true)).to.be.false;
	expect(is.function(false)).to.be.false;
    });
  });

//Presence check
describe('is.empty', function(){
	it('should return true if empty', function () {
	//var arguments = "";
	expect(is.empty("")).to.be.true;
	expect(is.empty('')).to.be.true;
	expect(is.empty([])).to.be.true;
	expect(is.empty({})).to.be.true;
    });
    it("should return false if full", function () {
        expect(is.empty('hello')).to.be.false;
	expect(is.empty(2)).to.be.false;
	expect(is.empty(["1","2"])).to.be.false;
        expect(is.empty(true)).to.be.false;
	expect(is.empty(false)).to.be.false;
    });
});




describe('is.existy', function(){
	it('should return true if exists', function () {
	//var arguments = "";
	expect(is.existy("")).to.be.true;
	expect(is.existy('')).to.be.true;
	expect(is.existy([])).to.be.true;
	expect(is.existy({})).to.be.true;
        expect(is.existy(true)).to.be.true;
	expect(is.existy(false)).to.be.true;
    });
    it("should return false if does not exist", function () {
        expect(is.existy(null)).to.be.false;
	expect(is.existy(undefined)).to.be.false;
    });
});


describe('is.truthy', function(){
	it('should return true if truthy', function () {
	//var arguments = "";
	expect(is.truthy("hello")).to.be.true;
	expect(is.truthy('hello')).to.be.true;
	expect(is.truthy([1,2])).to.be.true;
        expect(is.truthy(true)).to.be.true;
    });
    it("should return false if does not truthy (falsy)", function () {
        expect(is.truthy(null)).to.be.false;
	expect(is.truthy(0)).to.be.false;
	expect(is.truthy(false)).to.be.false;
    });
});



describe('is.falsy', function(){
	it('should return true if falsy', function () {
	//var arguments = "";
	expect(is.falsy(null)).to.be.true;
	expect(is.falsy(0)).to.be.true;
	expect(is.falsy(false)).to.be.true;
    });
    it("should return false if does not falsy (truthy)", function () {
        
	expect(is.falsy("hello")).to.be.false;
	expect(is.falsy('hello')).to.be.false;
	expect(is.falsy([1,2])).to.be.false;
        expect(is.falsy(true)).to.be.false;
    });
});
});

