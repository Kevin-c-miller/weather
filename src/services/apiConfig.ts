import axios from 'axios';

const KEY = process.env.REACT_APP_WEATHER_KEY;
const url = 'https://api.openweathermap.org';

// get weather
export const getWeather = async (lat: number, lon: number) => {
  try {
    const res = await axios.get(
      `${url}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY}`
    );
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

// get more weather data (forecasts)
export const getMoreWeather = async (lat: number, lon: number) => {
  try {
    const res = await axios.get(
      `${url}/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${KEY}`
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
