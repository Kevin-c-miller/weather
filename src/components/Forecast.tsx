import React from 'react';

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
  // daily.moon_phase Moon phase. 0 and 1 are 'new moon', 0.25 is 'first quarter moon', 0.5 is 'full moon' and 0.75 is 'last quarter moon'. The periods in between are called 'waxing crescent', 'waxing gibous', 'waning gibous', and 'waning crescent', respectively.
  // daily.pop Probability of precipitation. The values of the parameter vary between 0 and 1, where 0 is equal to 0%, 1 is equal to 100%

  // converting kelvin to farenheit
  const kelvinToFar = (kTemp: number) => {
    return +(1.8 * (kTemp - 273) + 32).toFixed(1);
  };

  return (
    <div className="forecast">
      <h4>7 Day Forecast</h4>

      {forecastWeather.map((day, index) => (
        <div key={index} className="dailyForecast">
          High: {kelvinToFar(day?.temp?.max).toFixed(0)}
          <span>&deg;F</span> | Low: {kelvinToFar(day?.temp?.min).toFixed(0)}
          <span>&deg;F</span>
        </div>
      ))}
    </div>
  );
};

export default Forecast;
