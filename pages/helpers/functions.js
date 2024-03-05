function getCurrentDateInTimezone(timezone) {
  const currentDate = new Date().toLocaleDateString("fr-FR", {
    month: "long",
    day: "2-digit",
    year: "numeric",
    timeZone: timezone,
  });
  return currentDate;
}

function concatenateValues(array) {
  let result = "";

  for (let i = 0; i < array.length; i++) {
    Object.values(array[i]).forEach((item) => {
      if (i !== array.length - 1) {
        result += item + ",";
      } else {
        result += item;
      }
    });
  }
  return result;
}

module.exports = {
  getCurrentDateInTimezone,
  concatenateValues,
};
