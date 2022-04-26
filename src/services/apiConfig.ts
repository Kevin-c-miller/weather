import axios from 'axios';

const KEY = process.env.REACT_APP_WEATHER_KEY;
const url = 'https://api.openweathermap.org';

console.log(KEY);

// get weather
export const getWeather = async (lat: string, long: string) => {
  try {
    const res = await axios.get(
      `${url}/data/2.5/weather?lat=${lat}&lon=${long}&appid=${KEY}`
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

// get more weather data (forecasts)
export const getMoreWeather = async (lat: string, long: string) => {
  try {
    const res = await axios.get(
      `${url}/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${KEY}`
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
