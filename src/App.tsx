import { useState, useEffect } from 'react';
import { getWeather, getMoreWeather } from './services/apiConfig';
import './App.css';
import Location from './components/Location';
import WeatherInfo from './components/WeatherInfo';

interface Weather {
  temp: number;
  feels_like: number;
  temp_max: number;
  temp_min: number;
}

function App() {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState({});
  const [additionalWeather, setAdditionalWeather] = useState({});

  // get user longitude and latitude
  const userLocation = () => {
    try {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
    } catch (err) {
      console.log(err);
    }
  };

  // get weather data for user location
  const fetchWeatherData = async () => {
    const data = await getWeather(lat, long);
    const moreData = await getMoreWeather(lat, long);

    if (lat !== 0 && long !== 0) {
      setLocation(data.name);
      setWeather(data.main);
      setAdditionalWeather(moreData);
    } else {
      userLocation();
    }
  };
  console.log(typeof weather);

  useEffect(() => {
    userLocation();
    fetchWeatherData();
  }, []);

  return (
    <div className="App">
      <Location location={location} />

      {/* <WeatherInfo weather={weather} /> */}
    </div>
  );
}
export default App;
