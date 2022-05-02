import { useEffect, useState } from 'react';

interface ForecastProps {
  forecastWeather: {
    clouds: number;
    moon_phase: number;
    pop: number;
    humidity: number;
    temp: {
      day: number;
      eve: number;
      min: number;
      max: number;
    };
    weather: [
      {
        description: string;
      }
    ];
  }[];
}

const Forecast = ({ forecastWeather }: ForecastProps) => {
  const [today, setToday] = useState(0);
  const [tomorrow, setTomorrow] = useState({
    dt: 0,
    day: '',
  });
  const [daysOfWeek, setDaysOfWeek] = useState([
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]);

  // converting kelvin to farenheit
  const kelvinToFar = (kTemp: number) => {
    return +(1.8 * (kTemp - 273) + 32).toFixed(1);
  };

  useEffect(() => {
    const weekday = () => {
      let date = new Date();
      let tomorrowDay = '';
      setToday(date.getDay());

      for (let i = 0; i < daysOfWeek.length; i++) {
        if (today === i && today !== 6) tomorrowDay = daysOfWeek[today + 1];
        if (today === 6) tomorrowDay = daysOfWeek[0];
      }
      setTomorrow({
        dt: today !== 6 ? today + 1 : 0,
        day: tomorrowDay,
      });
    };

    weekday();
  }, [daysOfWeek, today]);

  return (
    <div className="forecast">
      <h4>7 Day Forecast</h4>
      {/* TODO: label each day in forecast with weekday name */}
      {forecastWeather.map((day, index) => (
        <div key={index} className="dailyForecast">
          {tomorrow.day} | High:
          {kelvinToFar(day?.temp?.max).toFixed(0)}
          <span>&deg;F</span> | Low: {kelvinToFar(day?.temp?.min).toFixed(0)}
          <span>&deg;F</span>
        </div>
      ))}
    </div>
  );
};

export default Forecast;

// TODO: finishing rendering data from api

// daily.moon_phase Moon phase. 0 and 1 are 'new moon', 0.25 is 'first quarter moon', 0.5 is 'full moon' and 0.75 is 'last quarter moon'. The periods in between are called 'waxing crescent', 'waxing gibous', 'waning gibous', and 'waning crescent', respectively.
// daily.pop Probability of precipitation. The values of the parameter vary between 0 and 1, where 0 is equal to 0%, 1 is equal to 100%
