import * as React from "react";
import {Area, AreaChart, Tooltip, XAxis, YAxis, Label} from "recharts";

import "/src/styles/weather/WeatherForecastChart.scss";


function WeatherForecastChart({ data }) {

    const temperature = data.list.map(weather => ({
        date: weather.dt_txt,
        temperature: [
            +(weather.main.temp_min - 273.15).toFixed(2),
            +(weather.main.temp_max - 273.15).toFixed(2)
        ]
    }))


    return (
        <article className="weather-forecast-chart">
            <AreaChart
                width={730}
                height={250}
                data={ temperature }
                margin={{
                    top: 20, right: 20, bottom: 20, left: 20,
                }}
            >
                <XAxis dataKey="date" />
                <YAxis label={{ value: 'Temperature,  °C', angle: -90, position: 'center' }} />
                <Area dataKey="temperature" stroke="#00bfff" fill="#00bfff"/>
                <Tooltip/>
            </AreaChart>
        </article>
    );
}

export default WeatherForecastChart;