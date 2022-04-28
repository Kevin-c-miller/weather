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
  const [tomorrowFullDate, setTomorrowFullDate] = useState('');

  // daily.moon_phase Moon phase. 0 and 1 are 'new moon', 0.25 is 'first quarter moon', 0.5 is 'full moon' and 0.75 is 'last quarter moon'. The periods in between are called 'waxing crescent', 'waxing gibous', 'waning gibous', and 'waning crescent', respectively.
  // daily.pop Probability of precipitation. The values of the parameter vary between 0 and 1, where 0 is equal to 0%, 1 is equal to 100%

  // converting kelvin to farenheit
  const kelvinToFar = (kTemp: number) => {
    return +(1.8 * (kTemp - 273) + 32).toFixed(1);
  };

  // TODO: add days of week next to each daily forecast
  // get day() object for todays day of week then loop thru the object

  const weekday = () => {
    let date = new Date();
    // console.log(date);
    let todayDate = date.getDate();
    let today = date.getDay();
    let tomorrow = '';
    const daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    for (let i = 0; i < daysOfWeek.length; i++) {
      if (today === i && today !== 6) tomorrow = daysOfWeek[today + 1];
      if (today === 6) tomorrow = daysOfWeek[0];
    }

    console.log(tomorrow);
    return tomorrow;
  };
  weekday();

  useEffect(() => {
    // setDate(daysOfWeek);
    // daysInMonth();
  }, []);

  return (
    <div className="forecast">
      <h4>7 Day Forecast</h4>

      {forecastWeather.map((day, index) => (
        <div key={index} className="dailyForecast">
          | High: {kelvinToFar(day?.temp?.max).toFixed(0)}
          <span>&deg;F</span> | Low: {kelvinToFar(day?.temp?.min).toFixed(0)}
          <span>&deg;F</span>
        </div>
      ))}
    </div>
  );
};

export default Forecast;

// const daysInMonth = (month: number, year: number) => {
//   return new Date(year, month, 0).getDate();
//   // return `${todayDate}`;
// };

// set date for forecast
// const setDate = (weekdays: {}) => {
//   let dt = new Date();
//   let month = dt.getMonth();
//   let year = dt.getFullYear();
//   let todayDate = dt.getDate();
//   let dayOfWeek = dt.getDay();
//   let weekday = '';

//   // loop over days of week object
//   for (let [key, val] of Object.entries(weekdays)) {
//     if (+key === dayOfWeek) {
//       weekday = String(val);
//     }
//   }
//   let fullDate = `${weekday}, ${month + 1}/${todayDate}`;
//   console.log(fullDate);

//   // forecastWeather.forEach((day) => {
//   //   setTomorrowFullDate(`${weekday}, ${month}/${todayDate}`);
//   // });
//   //   console.log(tomorrowFullDate);
//   return daysInMonth(month, year);
