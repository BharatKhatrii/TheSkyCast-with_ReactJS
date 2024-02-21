import React, { useState, useEffect } from "react";

export default function Weatherinfo(props) {
  
  const [weatherData, setWeatherData] = useState(null);

  console.log(`city name is: ${props.city}`);

  const WEATHER_API = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${props.city}?unitGroup=metric&key=${props.wAPI}&contentType=json`;
  
  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const response = await fetch(WEATHER_API);
        const data = await response.json();

        setWeatherData(data);
        
      } catch (error) {
        console.error("Error in fetching weather data:", error);
      }
    };

    getWeatherData();

  }, [props.city]);

  const current = weatherData?.currentConditions; 
  const days = weatherData?.days;

  const capitalizeFirstLetter = (string) => {
    if (typeof string === "string" && string.length > 0) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  };

  const hours_min = (string) => {
    if (typeof string === "string" && string.length > 0) {
      return string.substring(0, 5);
    }
  };

  const changingDateFormat = (datetime) => {
    const dateParts = datetime.split("-");
    const Date = dateParts[2] + "/" + dateParts[1];
    return Date;
  };
  

  return (
    <section>
      <div className="grid-box grid-box-1">
        <div id="grid-item-1" className="grid-items">
          <div id="item-1">
            <span id="name" style={{ fontSize: "1.4rem" }}>
              {" "}
              {capitalizeFirstLetter(weatherData?.address)}
            </span>
            <span id="localtime">{hours_min(current?.datetime)}</span>
          </div>

          <div id="item-2">
            <div className="flex column">
              <div className="flex">
                <span
                  id="temp_c"
                  style={{ color: `#bcbc0bf5`, fontSize: "3.8rem" }}
                >
                  {current?.temp}
                </span>
                <span
                  style={{ color: "#bcbc0bf5", padding: "35px 0px 0px 4px" }}
                >
                  {" "}
                  &deg;C{" "}
                </span>
              </div>

              <div id="item-3">
                <span> Feels like : &nbsp;</span>
                <span id="feelslike_c">{current?.feelslike} &deg;c</span>
              </div>
            </div>

            <div className="flex center" style={{ alignItems: "center" }}>
              <span id="icon" style={{ margin: `0px 20px` }}>
                {capitalizeFirstLetter(current?.icon)}
              </span>
            </div>
          </div>

          <div id="item-4">
            <span id="description" style={{ fontSize: "1.1rem" }}>
              {weatherData?.description}
            </span>
          </div>

          <div id="item-5">
            <div className="flex column">
              <span> Humidity</span>
              <span id="humidity" className="flex h-center">
                {current?.humidity} %
              </span>
            </div>

            <div className="flex column">
              <span> Wind Speed</span>
              <span id="wind_kph" className="flex h-center">
                {current?.windspeed} Km/h
              </span>
            </div>

            <div className="flex column">
              <span> Sunrise</span>
              <span id="sunrise" className="flex h-center">
                {hours_min(current?.sunrise)}
              </span>
            </div>

            <div className="flex column">
              <span> Sunset</span>
              <span id="sunset" className="flex h-center">
                {hours_min(current?.sunset)}
              </span>
            </div>
          </div>

          <div id="item-6">
            <a
              id="map"
              target="_blank"
              href={`http://maps.google.com/?q=${weatherData?.lat},${weatherData?.lon}`}
              rel="noopener noreferrer"
            >
              {" "}
              Find NearBy Location
            </a>
          </div>
        </div>
             
      
      {days !== null && days !== undefined ? (

      <div id="grid-item-2" className="grid-items">

      {days.slice(1, 6).map((days, index) => (

          <div id={`Day${index}`} key={`Day${index}`} className="future-days">
            <span id="futureDate">{changingDateFormat(days.datetime)}</span>
            <span>{days.tempmax}&deg;C</span>
            <span>{days.tempmin}&deg;C</span>
          </div>
 
      ))}

      </div>

      ) : (
        <h2 className="text-center">Loading...</h2>
      )}

      </div>
    </section>
  );
}
