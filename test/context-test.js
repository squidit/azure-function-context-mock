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

  it('Must return a Promise when execute function context.done()', function (done) {
    expect(context.done()).to.be.an('Promise');
    done();
  });
});
