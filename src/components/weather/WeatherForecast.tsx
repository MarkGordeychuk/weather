import * as React from "react";

import WeatherForecastChart from "./WeatherForecastChart";
import WeatherForecastList from "./WeatherForecastList";


function WeatherForecast({ data }) {

    return (
        <>
            <WeatherForecastChart data={ data } />
            <WeatherForecastList data={ data} />
        </>
    );
}

export default WeatherForecast;