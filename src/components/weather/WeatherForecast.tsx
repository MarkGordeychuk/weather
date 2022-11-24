import * as React from "react";

import WeatherForecastChart from "./WeatherForecastChart";
import WeatherForecastList from "./WeatherForecastList";



type CityObj = {
    id: number,
    name: string,
    coord: {
        lat: number,
        lon: number
    },
    country: string,
    population: number,
    timezone: number,
    sunrise: number,
    sunset: number
};

type WeatherResponse = {
    cod: number,
    list: Array<any>,
    city: object
};

function WeatherForecast({ data }) {
    // let [temperature, setTemperature] = React.useState(data.main.temp);


    return (
        <>
            <WeatherForecastChart data={ data } />
            <WeatherForecastList data={ data} />
        </>
    );
}

export default WeatherForecast;