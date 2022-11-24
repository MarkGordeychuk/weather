import * as React from "react";
import axios, {Axios} from "axios";

// import { cities } from "../cities.js";

import "../styles/SearchBar.scss";


function SearchBar(props) {
    let [list, setList] = React.useState([]);
    let [inputValue, setInputValue] = React.useState("");

    let cancel: Function = () => null;

    const reloadList = e => {
        const text: string = e.target.value;
        setInputValue(text);
        if (text) {
            // setList(
            //     cities.filter(
            //         city => city.name.toLowerCase().indexOf(text.toLowerCase()) > -1
            //     )
            // );

            cancel();
            axios.get("http://localhost:3000/city", {
                params: {
                    name_like: text,
                    _limit: 20
                },
                cancelToken: new axios.CancelToken(c => cancel = c)
            }).then(response => {
                setList(response.data);
            });
        } else {
            setList([]);
        }
    }

    const selectCity = city => {
        setInputValue(city.name);
        props.setCityID(city.id);
    }

    addEventListener("click", () => setList([]));

    return (
        <div className="search-bar">
            <input type="text" onChange={reloadList} value={inputValue}/>
            <ul className={list.length ? "search-bar__dropdown" : "search-bar__dropdown hidden"}>
                {list.map(city => <li key={city.id}><a onClick={() => selectCity(city)}>
                    {city.name}, {city.state}, {city.country}
                    (lon: {city.coord.lon}, lat: {city.coord.lat})
                </a></li>)}
            </ul>
        </div>
    )
};

export default SearchBar;