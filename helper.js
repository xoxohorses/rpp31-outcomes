let helper;

export default helper = {
  daysElapsed: function (startDate, endDate) {
    const diff = (endDate - startDate) / 86400000;
    return diff;
  },
};
