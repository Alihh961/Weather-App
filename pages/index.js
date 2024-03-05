import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudRain, faSnowflake } from "@fortawesome/free-solid-svg-icons";
import { location } from "./api/data";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await location();
        console.log(responseData);
        setData(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const formatDate = (date) => {
    const fullDayName = new Date(date).toLocaleDateString("fr-FR", {
      weekday: "long",
    });
    return fullDayName.slice(0, 3);
  };

  return (
    <div className="main container d-flex flex-column justify-content-center">
      <div className="row">
        <div className="col-xs-12 gap-5 d-flex flex-column p-lg-3 p-md-2 p-0">
          {data ? (
            <>
              <div className="col-12 p-3 col-lg-offset-4 weather-panel d-flex justify-content-around align-items-center gap-5">
                <div className="col-xs-6">
                  <h2>
                    {data.city}
                    <br />
                    <small>{data.date}</small>
                  </h2>
                  <p className="">
                    {data.current.rain !== 0 ? (
                      <>
                        <FontAwesomeIcon icon={faCloudRain} /> Rainy
                      </>
                    ) : data.current.snowfall !== 0 ? (
                      <>
                        <FontAwesomeIcon icon={faSnowflake} /> Snowy
                      </>
                    ) : (
                      "Calmy Weather"
                    )}
                  </p>
                </div>
                <div className="col-xs-6 text-center">
                  <div className="h1 temperature">
                    <span>
                      {Math.floor(data.current.temperature_2m)}
                      {data.current_units.temperature_2m}
                    </span>
                    <br />
                    <small>
                      {Math.floor(data.daily.temperature_2m_min[0])}° /{" "}
                      {Math.floor(data.daily.temperature_2m_max[0])}°
                    </small>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-around gap-1 col-12 p-lg-3 p-md-2 p-0 coming-days">
                {data.daily &&
                  data.daily.time.map((day, index) => (
                    <div key={index} className="text-center">
                      <h3>{formatDate(day)}</h3>
                      <p className="">
                        {data.daily.rain_sum[index] !== 0 ? (
                          <>
                            <FontAwesomeIcon icon={faCloudRain} /> Rainy
                          </>
                        ) : data.daily.snowfall_sum[index] !== 0 ? (
                          <>
                            <FontAwesomeIcon icon={faSnowflake} /> Snowy
                          </>
                        ) : (
                          "Calm"
                        )}
                      </p>
                      <small>
                        {Math.floor(data.daily.temperature_2m_min[index])}° /{" "}
                        {Math.floor(data.daily.temperature_2m_max[index])}°
                      </small>
                    </div>
                  ))}
              </div>
            </>
          ) : (
            <div className="w-100 text-center text-white loading">
              Loading...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
