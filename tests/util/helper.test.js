const expect = require('chai').expect;
const {dedup, formatDate, sortDatesAsc} = require('../../util/helper');


describe('Helper Func', function() {
    describe('dedup()', function() {
      context('with no arguments', function() {
        it('should return []', function() {
          let uniq = dedup();
          expect(uniq).to.eql([]);
        })
      });

      context('with empty array', function() {
        it('should return []', function() {
          let uniq = dedup([]);
          expect(uniq).to.eql([]);
        })
      });

      context('without duplicated arguments', function() {
        it('should return []', function() {
          let uniq = dedup(['one', 'two', 'three']);
          expect(uniq).to.eql(['one', 'two', 'three']);
        })
      });

      context('with duplicated arguments', function() {
        it('should return []', function() {
          let uniq = dedup(['one', 'two', 'one', 'three']);
          expect(uniq).to.eql(['one', 'two', 'three']);
        })
      });
    });

    describe('formatDate()', function() {
      context('with Mon Feb 18 2019 09:51:47 GMT-0800', function() {
        it('should return date in YYYY-MM-DD HH:MM:SS', function() {
          let date = formatDate('Mon Feb 18 2019 09:51:47 GMT-0800');
          expect(date).to.eql('2019-02-18 17:51:47');
        })
      });
    });

    describe('sortDatesAsc()', function() {
      context('with no arguments', function() {
        it('should return []', function() {
          let dates = sortDatesAsc();
          expect(dates).to.eql([]);
        })
      });

      context('with empty array', function() {
        it('should return []', function() {
          let dates = sortDatesAsc([]);
          expect(dates).to.eql([]);
        })
      });

      context('with 2019-2-16, 2019-2-18, 2019-2-17', function() {
        it('should return 2019-2-16, 2019-2-17, 2019-2-18', function() {
          let dates = sortDatesAsc(['2019-2-16', '2019-2-18', '2019-2-17']);
          expect(dates).to.eql(['2019-2-16', '2019-2-17', '2019-2-18']);
        })
      });

      context('with 2019-2-16, 2019-2-17, 2019-2-18', function() {
        it('should return 2019-2-16, 2019-2-17, 2019-2-18', function() {
          let dates = sortDatesAsc(['2019-2-16', '2019-2-17', '2019-2-18']);
          expect(dates).to.eql(['2019-2-16', '2019-2-17', '2019-2-18']);
        })
      });
    });


});
