const parser = require('cron-parser');
const {dedup, formatDates, sortDatesAsc} = require('../util/helper');
const {prepDates} = require('../util/prep');
const {getDatesForFreq} = require('../util/getDatesForFreq');


module.exports = {
    freqToUniqDates: function(req, res) {
      var freqs = {};
      for(let i = 0; i < req.body.frequencies.length; i++){

        let crons = dedup(req.body.frequencies[i].crons);
        let datesFromCrons = getDatesForFreq(req.body.start_date, req.body.end_date, crons);
        let sortedDates = sortDatesAsc(datesFromCrons);
        let preppedDates = prepDates(sortedDates);

        freqs[req.body.frequencies[i].name] = preppedDates;

      }

      return res.send(freqs);
    }
};
