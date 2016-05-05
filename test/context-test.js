var expect = require('chai').expect;
var context = require('../src/context');

describe('context', function () {
  it('Must return context object with property done to be an function', function (done) {
    expect(context).to.have.property('done');
    expect(context.done).to.be.an('function');
    done();
  });

  it('Must return context object with property log to be an function', function (done) {
    expect(context).to.have.property('log');
    expect(context.log).to.be.an('function');
    done();
  });

  it('Must return context object with property bindings to be an empty object', function (done) {
    expect(context).to.have.property('bindings');
    expect(context.bindings).to.be.an('object');
    expect(Object.keys(context.bindings)).to.have.length(0);
    done();
  });

  it('Must return a Promise when call function context.done()', function (done) {
    expect(context.done()).to.be.an('Promise');
    done();
  });

  it('Must return result in context.done() with res and bindings', function (done) {
    context.done()
      .then(result => {
        expect(result).to.be.an('object');
        expect(result).to.have.property('res');
        expect(result).to.have.property('bindings');
        done();
      });
  });

  it('Must return a res object like a property in result in context.done()', function (done) {
    context.done()
      .then(result => {
        expect(result.res).to.be.an('object');
        expect(result.res).to.have.property('status');
        expect(result.res).to.have.property('body');
        done();
      });
  });

  it('Must return a bindings object like a property in result in context.done()', function (done) {
    context.done()
      .then(result => {
        expect(result.bindings).to.be.an('object');
        expect(Object.keys(result.bindings)).to.have.length(0);
        done();
      });
  });

  it('Must return a context object with property res contains own properties', function (done) {
    expect(context.res).to.be.an('object');
    expect(context.res).to.have.property('status');
    expect(context.res).to.have.property('body');
    done();
  });

  it('Must return 200 in status like default res object', function (done) {
    expect(context.res.status).to.be.an('number');
    expect(context.res.status).to.be.equal(200);
    done();
  });

  it('Must return empty string in body like default res object', function (done) {
    expect(context.res.body).to.be.an('string');
    expect(context.res.body).to.be.equal('');
    done();
  });
});
