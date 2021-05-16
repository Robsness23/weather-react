import React from "react";
import axios from 'axios';

export default function Weather(props) {

    function handleResponse(response){
        alert(`The temperature in ${response.data.name} is ${response.data.main.temp}°C`);
    }
    let apiKey = "b58951333360ebb08a8b64b84f452e9d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return (
        <h2>
            Hello from Weather
        </h2>
    )
}