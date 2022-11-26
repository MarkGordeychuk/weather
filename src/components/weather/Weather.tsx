import * as React from "react";
import axios from "axios";

import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecast";

// import weather from "../../examples/weather.json";
// import forecast from "../../examples/forecast.json";


type WeatherProps = {
    cityID: number
};

type WeatherState = {
    currentWeather: any,
    weatherForecast: any
};


class Weather extends React.Component<WeatherProps, WeatherState> {
    constructor(props) {
        super(props);
        this.state = {
            currentWeather: null,
            weatherForecast: null
        };
    }

    render() {
        return (
            <div>
                {this.state.currentWeather ? <CurrentWeather data={this.state.currentWeather}/> : null}
                {this.state.weatherForecast ? <WeatherForecast data={this.state.weatherForecast}/> : null}
            </div>
        );
    }

    componentDidMount() {
        this.updateWeatherInfo();
    }

    updateWeatherInfo() {
        // Test
        // this.setState({
        //     currentWeather: weather,
        //     weatherForecast: forecast
        // });

        axios.get(
            "https://api.openweathermap.org/data/2.5/weather",
            {
                params: {
                    "id": this.props.cityID,
                    "appid": "4c87a0ac930069319c518bad48cef361"
                }
            }
        ).then(response => {
            console.log(response.data);
            this.setState({currentWeather: response.data});
        });

        axios.get(
            "https://api.openweathermap.org/data/2.5/forecast",
            {
                params: {
                    "id": this.props.cityID,
                    "appid": "4c87a0ac930069319c518bad48cef361"
                }
            }
        ).then(response => {
            console.log(response.data);
            this.setState({weatherForecast: response.data});
        });
    }
}

export default Weather;