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
  const [alerts, setAlerts] = useState({
    description: '',
    event: '',
    sender_name: '',
  });
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
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    // get weather data for user location
    const fetchWeatherData = async () => {
      try {
        const data = await getWeather(lat, long);
        const moreData = await getMoreWeather(lat, long);
        console.log(moreData);

        setLocation(data.name);

        if (location === 'Globe') {
          userLocation();
        } else {
          // setAlerts(moreData.alerts[0]);
          setDailyWeather(data.main);
          setMyWeather(data.weather[0]);
          setAdditionalWeather(moreData.daily);
          setSunTime(data.sys);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchWeatherData();
  }, [lat, location, long]);

  useEffect(() => {
    userLocation();
  }, []);

  console.log(additionalWeather);
  // console.log(alerts);

  return (
    <div className="App">
      <div className="header">
        <Location location={location} long={long} lat={lat} />

        <Alerts
          description={alerts?.description}
          sender={alerts?.sender_name}
          event={alerts?.event}
        />
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
