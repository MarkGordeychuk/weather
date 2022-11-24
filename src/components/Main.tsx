import * as React from "react";

import SearchBar from "./SearchBar";
import Weather from "./weather/Weather";

import "../styles/Main.scss";


export default function Main() {
    let [cityID, setCityID] = React.useState(null);

    return (
        <main>
            <SearchBar setCityID={setCityID}/>
            {cityID ? <Weather cityID={cityID}/> : null}
        </main>
    );
}