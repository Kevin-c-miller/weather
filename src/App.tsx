import { useState, useEffect } from 'react';
import { getWeather, getMoreWeather } from './services/apiConfig';
import './App.css';
import Location from './components/Location';
import WeatherTemps from './components/WeatherTemps';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import SunsetAndRise from './components/SunsetAndRise';
import Alerts from './components/Alerts';
import { TheForecast } from './forecast.model';

const App = () => {
  // TODO: move state to contextAPI
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [additionalWeather, setAdditionalWeather] = useState<TheForecast[]>([]);
  const [location, setLocation] = useState('');
  const [dailyWeather, setDailyWeather] = useState({
    temp: 0,
    feels_like: 0,
    temp_max: 0,
    temp_min: 0,
  });
  const [myWeather, setMyWeather] = useState({
    icon: '',
    description: '',
    main: '',
  });
  const [sunTime, setSunTime] = useState({
    sunrise: 0,
    sunset: 0,
  });

  // get user longitude and latitude
  const userLocation = () => {
    try {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
        // console.log(location);
      });
    } catch (err) {
      console.log(err);
    }
  };

  // get weather data for user location
  const fetchWeatherData = async () => {
    const data = await getWeather(lat, long);
    const moreData = await getMoreWeather(lat, long);
    console.log(data);

    setLocation(data.name);
    setDailyWeather(data.main);
    setMyWeather(data.weather[0]);
    setAdditionalWeather(moreData.daily);
    setSunTime(data.sys);
  };

  console.log(additionalWeather);
  console.log(dailyWeather);
  // console.log(location);

  useEffect(() => {
    userLocation();
    fetchWeatherData();
  }, []);

  return (
    <div className="App">
      <div className="header">
        <Location location={location} long={long} lat={lat} />

        <Alerts />
      </div>

      <div className="currentWeather">
        <WeatherTemps
          temp={dailyWeather?.temp}
          feelsLike={dailyWeather?.feels_like}
          max={dailyWeather?.temp_max}
          min={dailyWeather?.temp_min}
        />

        <CurrentWeather
          description={myWeather?.description}
          icon={myWeather?.icon}
          main={myWeather?.main}
        />
      </div>

      <div className="bottomOfPage">
        <Forecast forecastWeather={additionalWeather} />
        <SunsetAndRise sunrise={sunTime?.sunrise} sunset={sunTime?.sunset} />
      </div>
    </div>
  );
};
export default App;
