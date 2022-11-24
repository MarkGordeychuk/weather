import * as React from "react";
import axios from "axios";

import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecast";

// import weather from "../../examples/weather.json";
// import forecast from "../../examples/forecast.json";


export default function Weather(props) {
    let [currentWeatherElement, setCurrentWeatherElement] = React.useState(null);
    let [weatherForecastElement, setWeatherForecastElement] = React.useState(null);

    axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
            params: {
                "id": props.cityID,
                "appid": "4c87a0ac930069319c518bad48cef361"
            }
        }
    ).then(response => {
        setCurrentWeatherElement(<CurrentWeather data={response.data} />);
    });

    axios.get(
        "https://api.openweathermap.org/data/2.5/forecast",
        {
            params: {
                "id": props.cityID,
                "appid": "4c87a0ac930069319c518bad48cef361"
            }
        }
    ).then(response => {
        setWeatherForecastElement(<WeatherForecast data={response.data} />);
    });

    return (
        <div>
            { currentWeatherElement }
            { weatherForecastElement }
        </div>
    );
}