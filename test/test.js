var expect = require('expect.js');

describe('the thing', function () {
    it('should be an object :)', function () {
        expect(THING).to.be.an('object');
    });

    it('should have a someFunc function', function () {
        expect(THING.someFunc).to.be.a('function');
    });
});
