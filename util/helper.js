const date_sort_asc = function (date1, date2) {
  if (date1 > date2) return 1;
  if (date1 < date2) return -1;
  return 0;
};

module.exports = {
  dedup: (list = []) => {
    let dict = {};

    for(let i = 0; i < list.length; i++){
      dict[list[i]] = "added";
    }

    return Object.keys(dict);
  },
  formatDate: (date) => {
      let d = new Date(date).toISOString().split('T');
      return d[0] + " " + d[1].slice(0,8);
  },
  sortDatesAsc: (dates = []) => {
    return dates.sort(date_sort_asc);
  }
};
