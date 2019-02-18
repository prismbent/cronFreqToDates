const {formatDate} = require('./helper');


module.exports = {
  prepDates: function(dates = []) {
    let prepped = [];
    for(let i = 0; i < dates.length; i++) {
      prepped.push(`new Date('${formatDate(dates[i])}')`);
    }
    return prepped;
  }
};
