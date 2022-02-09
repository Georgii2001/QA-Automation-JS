var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();

var testObj = {
    name: "test",
    sub: {
        name: 'test sub'
    },
    numbers: [1,2,3,4],
    hasNumbers: true  
}

beforeEach( ()=>{
    console.log('Test has started')
})

describe('test Suite', function(){
    describe('expect tests', function(){
        it('should be a valid EXPECT test object', function(){
            expect(testObj).to.be.an('object').and.is.ok
            expect(testObj).to.have.property('sub').that.is.an('object').and.is.ok
            expect(testObj).to.have.property('numbers').that.deep.equals([1,2,3,4])
            expect(testObj).to.have.property('hasNumbers',true)
        })
    })

    describe('assert tests', function(){
        it('should be a valid ASSERT test object', function(){
            assert.isOk(testObj)
            assert.isObject(testObj)
            assert.propertyVal(testObj,'name','test')
            assert.property(testObj,'sub')
            assert.deepStrictEqual(testObj.numbers, [1,2,3,4])
            assert.typeOf(testObj.hasNumbers,'boolean')
        })
    })

    describe('should tests', function(){
        it('should be a valid SHOULD test object', function(){
            testObj.should.be.an('object').and.is.ok
            testObj.name.should.equal('test')
            testObj.should.have.property('sub').that.is.an('object').and.is.ok
         // testObj.should.have.property('numbers').that.deep.equals([1,2,3,4])
            testObj.numbers.should.eql([1,2,3,4])
            testObj.should.have.property('hasNumbers',true)
        })
    })    
})

afterEach( ()=>{
    console.log('Test has finished')
})
