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


describe('is.nan', function () {

    it('should return true if passed parameter type is Nan', function () {
	expect(is.nan(NaN)).to.be.true;
    });
    it("should return false if passed parameter type is not Nan", function () {
        expect(is.nan('hello')).to.be.false;
	expect(is.nan(2)).to.be.false;
	expect(is.nan([])).to.be.false;
        expect(is.nan(true)).to.be.false;
    });
  });

 describe('is.null', function () {

    it('should return true if passed parameter type is null', function () {
	expect(is.null(null)).to.be.true;
    });
    it("should return false if passed parameter type is not null", function () {
        expect(is.null('hello')).to.be.false;
	expect(is.null(2)).to.be.false;
	expect(is.null([])).to.be.false;
        expect(is.null(true)).to.be.false;
    });
  });

 describe('is.number', function () {

    it('should return true if passed parameter type is number', function () {
	expect(is.number(42)).to.be.true;
	expect(is.number(3.14)).to.be.true;
    });
    it("should return false if passed parameter type is not number", function () {
        expect(is.number('hello')).to.be.false;
	expect(is.number([])).to.be.false;
        expect(is.number(true)).to.be.false;
    });
  });

 describe('is.object', function () {

    it('should return true if passed parameter type is object', function () {
	expect(is.object({})).to.be.true;
	var arguments = new Object();
	expect(is.object(arguments)).to.be.true;
    });
    it("should return false if passed parameter type is not object", function () {
	expect(is.object('test')).to.be.false;
	expect(is.object(404)).to.be.false;
    });
  });

 describe('is.json', function () {

    it('should return true if passed parameter type is JSON object', function () {
	expect(is.json({})).to.be.true;
    });
    it("should return false if passed parameter type is not JSON object", function () {
	expect(is.json('test')).to.be.false;
	expect(is.json(404)).to.be.false;
    });
  });

 describe('is.regexp', function () {

    it('should return true if passed parameter type is regExp', function () {
	var reg = new RegExp('\\w+');
	expect(is.regexp(reg)).to.be.true;
    });
    it("should return false if passed parameter type is not regExp", function () {
	expect(is.regexp('test')).to.be.false;
	expect(is.regexp(404)).to.be.false;
    });
  });


 describe('is.sameType', function () {

    it('should return true if passed parameter type are same type', function () {
	expect(is.sameType(7,11)).to.be.true;
	expect(is.sameType("test","hello")).to.be.true;
	expect(is.sameType(true,false)).to.be.true;
    });
    it("should return false if passed parameter type are not same type", function () {
	expect(is.sameType('test',404)).to.be.false;
	expect(is.sameType(false,'404')).to.be.false;
    });
  });

 describe('is.string', function () {

    it('should return true if passed parameter type is string', function () {
	expect(is.string("PSG")).to.be.true;
    });
    it("should return false if passed parameter type is not string", function () {
	expect(is.string(404)).to.be.false;
	expect(is.string(true)).to.be.false;
    });
  });

 describe('is.char', function () {

    it('should return true if passed parameter type is string', function () {
	expect(is.char('a')).to.be.true;
    });
    it("should return false if passed parameter type is not string", function () {
	expect(is.char(404)).to.be.false;
	expect(is.char(true)).to.be.false;
	expect(is.char("hello")).to.be.false;
    });
  });

 describe('is.undefined', function () {

    it('should return true if passed parameter type is string', function () {
	expect(is.undefined(undefined)).to.be.true;
    });
    it("should return false if passed parameter type is not string", function () {
	expect(is.undefined(404)).to.be.false;
	expect(is.undefined(true)).to.be.false;
	expect(is.undefined("hello")).to.be.false;
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



describe('is.space', function(){
	it('should return true if is a space', function () {
	//var arguments = "";
	expect(is.space(" ")).to.be.true;
	expect(is.space("	")).to.be.true;
	expect(is.space("\n")).to.be.true;
    });
    it("should return false if is not space ", function () {
        
	expect(is.space("hello")).to.be.false;
	expect(is.space('hello')).to.be.false;
	expect(is.space([1,2])).to.be.false;
        expect(is.space(true)).to.be.false;
    });
});


describe('is.equal', function(){
	it('should return true if the two args are equals', function () {
	//var arguments = "";
	expect(is.equal("hello","hello")).to.be.true;
	//expect(is.equal([1],[1])).to.be.true;
	expect(is.equal(1,1)).to.be.true;
	expect(is.equal(true,true)).to.be.true;
	expect(is.equal('\\w+','\\w+')).to.be.true;
    });
    it("should return false if they are differents ", function () {
        
	expect(is.equal("hello","bye")).to.be.false;
	expect(is.equal(true,false)).to.be.false;
	expect(is.equal([1],[2])).to.be.false;
        expect(is.equal(1,2)).to.be.false;
        expect(is.equal('\\y+','\\w+')).to.be.false;
    });
});

//ARITMETIC CHECKS
describe('is.even', function(){
	it('should return true if the number is even', function () {
	//var arguments = "";
	expect(is.even(2)).to.be.true;
    });
    it("should return false if they are not even ", function () {
        
	expect(is.even(1)).to.be.false;
    });
});

describe('is.odd', function(){
	it('should return true if the number is odd', function () {
	//var arguments = "";
	expect(is.odd(1)).to.be.true;
    });
    it("should return false if they are not odd ", function () {
        
	expect(is.odd(2)).to.be.false;
    });
});

describe('is.positive', function(){
	it('should return true if the number is positive', function () {
	//var arguments = "";
	expect(is.positive(1)).to.be.true;
    });
    it("should return false if they are not positive (negative) ", function () {
        
	expect(is.positive(-2)).to.be.false;
    });
});
describe('is.negative', function(){
	it('should return true if the number is negative', function () {
	//var arguments = "";
	expect(is.negative(-1)).to.be.true;
    });
    it("should return false if they are not negative (positive) ", function () {
        
	expect(is.negative(2)).to.be.false;
    });
});
describe('is.above', function(){
	it('should return true if the number is above the min given', function () {
	//var arguments = "";
	expect(is.above(1,0)).to.be.true;
    });
    it("should return false if they are not above the min given", function () {
        
	expect(is.above(2,3)).to.be.false;
    });
});


describe('is.under', function(){
	it('should return true if the number is under the max given', function () {
	//var arguments = "";
	expect(is.under(1,3)).to.be.true;
    });
    it("should return false if they are not under the max given", function () {
        
	expect(is.under(5,3)).to.be.false;
    });
});

describe('is.within', function(){
	it('should return true if the number is within the max and min given', function () {
	//var arguments = "";
	expect(is.within(1,0,3)).to.be.true;
    });
    it("should return false if they are not within the max and min given", function () {
        
	expect(is.within(5,0,3)).to.be.false;
    });
});
describe('is.decimal', function(){
	it('should return true if the number is decimal', function () {
	//var arguments = "";
	expect(is.decimal(1.3)).to.be.true;
    });
    it("should return false if they are not decimal", function () {
        
	expect(is.decimal(5)).to.be.false;
    });
});

describe('is.integer', function(){
	it('should return true if the number is integer', function () {
	//var arguments = "";
	expect(is.integer(3)).to.be.true;
    });
    it("should return false if they are not integer", function () {
        
	expect(is.integer(5.2)).to.be.false;
    });
});

describe('is.finite', function(){
	it('should return true if the number is finite', function () {
	//var arguments = "";
	expect(is.finite(3)).to.be.true;
    });
    it("should return false if they are not finite", function () {
        
	expect(is.finite(Infinity)).to.be.false;
	expect(is.finite(-Infinity)).to.be.false;
	expect(is.finite(NaN)).to.be.false;
    });
});
























});

