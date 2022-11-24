import * as React from "react";

import "/src/styles/weather/WeatherForecastList.scss";


function WeatherForecastList({ data }) {
    const ulRef: React.RefObject<HTMLUListElement> = React.createRef();
    let [leftButtonDisabled, setLeftButtonDisabled] = React.useState(true);
    let [rightButtonDisabled, setRightButtonDisabled] = React.useState(false);

    const length: number = data.list.length;
    let current: number = 0;
    const max: number = length - 5;

    const scrollLeft = () => {
        if (!current) return;

        current--;

        const element: HTMLUListElement = ulRef.current;
        element.scrollBy({
            left: current * element.scrollWidth / length - element.scrollLeft,
            behavior: "smooth"
        });


        if (!current) setLeftButtonDisabled(false);
        setRightButtonDisabled(false);
    }

    const scrollRight = () => {
        if (current === max) return;

        current++;

        const element: HTMLUListElement = ulRef.current;
        element.scrollBy({
            left: current * element.scrollWidth / length - element.scrollLeft,
            behavior: "smooth"
        });

        if (current === max) setRightButtonDisabled(true);
        setLeftButtonDisabled(false);
    }

    return (
        <article className="weather-forecast-list">
            <button className="weather-forecast-list__prev" onClick={scrollLeft} disabled={leftButtonDisabled}/>
            <ul className="weather-forecast-list__list" ref={ulRef}>
                { data.list.map(weather => (
                    <li key={ weather.dt }>
                        <div className="weather-forecast-list__list__time">
                            { weather.dt_txt }
                        </div>
                        <div className="weather-forecast-list__list__temp">
                            Temperature: { (weather.main.temp - 273.15).toFixed(2) } °C
                        </div>
                        <div className="weather-forecast-list__list__minmax">
                            Min: { (weather.main.temp_min - 273.15).toFixed(2) } °C
                        </div>
                        <div className="weather-forecast-list__list__minmax">
                            Max: { (weather.main.temp_max - 273.15).toFixed(2) } °C
                        </div>
                        <div className="weather-forecast-list__list__feels-like">
                            Feels like { (weather.main.feels_like - 273.15).toFixed(2) }
                        </div>
                        <div>
                            { weather.weather.map(weather => weather.description).join(", ") }
                        </div>
                    </li>
                )) }
            </ul>
            <button className="weather-forecast-list__next" onClick={scrollRight} disabled={rightButtonDisabled}/>
        </article>
    );
}

export default WeatherForecastList;