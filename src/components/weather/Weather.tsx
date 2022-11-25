import * as React from "react";
import axios from "axios";

import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecast";

// import weather from "../../examples/weather.json";
// import forecast from "../../examples/forecast.json";


export default function Weather(props) {
    let [currentWeather, setCurrentWeather] = React.useState(null);
    let [weatherForecast, setWeatherForecast] = React.useState(null);

    if (!currentWeather) axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
            params: {
                "id": props.cityID,
                "appid": "4c87a0ac930069319c518bad48cef361"
            }
        }
    ).then(response => {
        console.log(response.data);
        setCurrentWeather(response.data);
    });

    if (!weatherForecast) axios.get(
        "https://api.openweathermap.org/data/2.5/forecast",
        {
            params: {
                "id": props.cityID,
                "appid": "4c87a0ac930069319c518bad48cef361"
            }
        }
    ).then(response => {
        console.log(response.data);
        setWeatherForecast(response.data);
    });

    return (
        <div>
            { currentWeather ? <CurrentWeather data={currentWeather} /> : null }
            { weatherForecast ? <WeatherForecast data={weatherForecast} /> : null }
        </div>
    );
}