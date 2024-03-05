const myFunctions = require("../helpers/functions");
import configurations from "../configurations/data_configuration";

let date = myFunctions.getCurrentDateInTimezone(configurations.timezone);

console.log(date);

export async function location() {
  let currentString = myFunctions.concatenateValues(configurations.current);
  let dailyString = myFunctions.concatenateValues(configurations.daily);
  let timezoneString = configurations.timezone.replace(/\//g, "%2F");
  let temperatureUnitString = configurations.temperatureUnit
    ? "celsius"
    : "fahrenheit";
  let forecastDaysString = configurations.forecastDays;

  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${configurations.latitude}&longitude=${configurations.longitude}&current=${currentString}&daily=${dailyString}&temperature_unit=${temperatureUnitString}&timezone=${timezoneString}&forecast_days=${forecastDaysString}`;
    const response = await fetch(url);
    console.log(url);

    const data = await response.json();
    data.date = date;
    data.city = configurations.city;

    return data;
  } catch (error) {
    return { error: error.message };
  }
}
