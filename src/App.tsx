import { useState, useEffect } from 'react';
import { getWeather, getMoreWeather } from './services/apiConfig';
import './App.css';
import Location from './components/Location';

function App() {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [location, setLocation] = useState('');

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
    console.log(data);
    setLocation(data.name);
  };

  useEffect(() => {
    userLocation();
    fetchWeatherData();
  }, []);

  return (
    <div className="App">
      <Location location={location} />
    </div>
  );
}

export default App;
