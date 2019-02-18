const expect = require('chai').expect;
const {prepDates} = require('../../util/prep');


describe('Helper Func', function() {
    describe('prepDates()', function() {

      context('with no args', function() {
        it('should return []', function() {
          let date = prepDates();
          expect(date).to.eql([]);
        })
      });

      context('with empty array', function() {
        it('should return []', function() {
          let date = prepDates([]);
          expect(date).to.eql([]);
        })
      });

      context('with 2019-2-16 00:00:00', function() {
        it('should return date format like new Date(\'2019-02-16 08:00:00\')', function() {
          let date = prepDates(['2019-2-16 00:00:00']);
          expect(date).to.eql(["new Date(\'2019-02-16 08:00:00\')"]);
        })
      });

    })
});
