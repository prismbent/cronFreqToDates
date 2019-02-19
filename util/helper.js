const date_sort_asc = function (date1, date2) {
  if (date1 > date2) return 1;
  if (date1 < date2) return -1;
  return 0;
};

module.exports = {
  dedup: (list = []) => {
    return [...new Set(list)];
  },
  formatDate: (date) => {
      let d = new Date(date).toISOString().split('T');
      return d[0] + " " + d[1].slice(0,8);
  },
  sortDatesAsc: (dates = []) => {
    return dates.sort(date_sort_asc);
  }
};
