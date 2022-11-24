import * as React from "react";

import "../../styles/weather/CurrentWeather.scss";


function CurrentWeather({data}) {

    return (
        <article className="current-weather">
            <div className="current-weather__city-name">{data.name}</div>
            <div className="current-weather__current-temperature">
                {(data.main.temp - 273.15).toFixed(2)} °C
            </div>
            <div className="current-weather__feels-like">
                Feels like {(data.main.feels_like - 273.15).toFixed(2)} °C
            </div>
            <div className="current-weather__weather">
                {data.weather.map(weather => weather.description).join(", ")}
            </div>
        </article>
    );
}

export default CurrentWeather;