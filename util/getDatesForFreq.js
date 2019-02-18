const parser = require('cron-parser');

module.exports = {
  getDatesForFreq : (s, e, uniqCronList = []) => {

    let dates = [];
    const options = {
      currentDate: s,
      endDate: e,
      iterator: true
    };

    for( let i = 0; i < uniqCronList.length; i++ ) {
        try {
          var interval = parser.parseExpression(uniqCronList[i], options);

          while (true) {
            try {
              var obj = interval.next();
              dates.push(obj.value.toString());

            } catch (e) {
              break;
            }
          }

          } catch (err) {
            console.log('Error: ' + err.message);
          }
    }
    return dates;

  }
};
