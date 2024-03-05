const configurations = {
  latitude: 33.8933,
  longitude: 35.5016,
  city: "Lyon",
  timezone: "Europe/Paris",
  forecastDays: 7, // Allowed range 1 to 16

  daily: [
    { temperatureMax: "temperature_2m_max" },
    { temperatureMin: "temperature_2m_min" },
    { rain_sum: "rain_sum" },
    { snowfall_sum: "snowfall_sum" },
  ],

  current: [
    { temperature: "temperature_2m" },
    { rain: "rain" },
    { snowfall: "snowfall" },
  ],

  temperatureUnit: true, // true for Celsius , false for Fahrenheit
};

export default configurations;
