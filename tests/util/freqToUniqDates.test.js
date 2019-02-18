const expect = require('chai').expect;
const {getDatesForFreq} = require('../../util/getDatesForFreq');


describe('Main functions', function() {
    describe('getDatesForFreq()', function() {

      context('with 2016-02-01 00:00:00, 2016-02-28 00:00:00, and ["0 0 0 20 * *", "0 0 0 10 * *"] ', function() {
        it('should return dates within the range', function() {
          let dates = getDatesForFreq('2016-02-01T08:00:00.000Z', '2016-02-28T08:00:00.000Z', ["0 0 0 20 * *", "0 0 0 10 * *"]);
          let expected = ["Sat Feb 20 2016 00:00:00 GMT-0800","Wed Feb 10 2016 00:00:00 GMT-0800"];
          expect(dates).to.eql(expected);
        })
      });

      context('with 2016-02-01 00:00:00, 2016-02-28 00:00:00, and ["0 0 0 25 3 *", "0 0 0 27 6 *", "0 0 0 30 9 *", "0 0 0 22 12 *", "0 0 0 25 3 *"]', function() {
        it('should return an empty date if no dates fall within the range', function() {
          let dates = getDatesForFreq('2016-02-01T08:00:00.000Z', '2016-02-28T08:00:00.000Z', ["0 0 0 25 3 *", "0 0 0 27 6 *", "0 0 0 30 9 *", "0 0 0 22 12 *", "0 0 0 25 3 *"] );
          let expected = [];
          expect(dates).to.eql(expected);
        })
      });

    });
});
