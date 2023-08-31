import './Weather.css';
import React, { useState } from 'react';
import axios from 'axios';

function Weather() {
  const [location, setLocation] = useState('');
  const [dataa, setDataa] = useState({});

  const handleAPI = (event) => {
    if (event.key === 'Enter') {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=927bd5d7610e9cce6535f04542718963`)
        .then(res => {
          setDataa(res.data);
          setLocation('');
          console.log(dataa);
        });
    }
  };

  return (
    <div className="container">
      <div className='buttonPrep'>
        <input
          placeholder='Enter a location...'
          value={location}
          onChange={e => setLocation(e.target.value)}
          onKeyPress={handleAPI}
        />
      </div>
      <div className="topPortion">
        <p1>{dataa.name}</p1>
        <h1>{dataa.main && `${(dataa.main.temp - 273.15).toFixed(1)}°C`}</h1>
        <p className='weatherType'>{dataa.weather && dataa.weather[0] && dataa.weather[0].main}</p>
      </div>
      <div className="bottomPortion">
        <div>
          <h2>{dataa.main && `${(dataa.main.feels_like - 273.15).toFixed(1)}°C`}</h2>
          <p>Feels Like</p>
        </div>
        <div>
          <h2>{dataa.main && `${dataa.main.humidity}%`}</h2>
          <p>Humidity</p>
        </div>
        <div>
          <h2>{dataa.wind && `${(dataa.wind.speed * 2.2369).toFixed(2)}mph`}</h2>
          <p>Wind</p>
        </div>
      </div>
    </div>
  );
}

export default Weather;
