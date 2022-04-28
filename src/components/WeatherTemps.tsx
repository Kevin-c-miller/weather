interface WeatherProps {
  temp: number;
  feelsLike: number;
  min: number;
  max: number;
}

const WeatherTemps = ({ temp, feelsLike, max, min }: WeatherProps) => {
  // converting kelvin to farenheit
  const kelvinToFar = (kTemp: number) => {
    return +(1.8 * (kTemp - 273) + 32).toFixed(1);
  };

  console.log(kelvinToFar(temp));

  return (
    <div>
      <h2>
        Current Temperature: {kelvinToFar(temp)} <span>&deg;F</span>
      </h2>
      <ul>
        <li>
          Feels Like: {kelvinToFar(feelsLike)} <span>&deg;F</span>
        </li>
        <li>
          Today's High: {kelvinToFar(max)} <span>&deg;F</span>
        </li>
        <li>
          Today's Low: {kelvinToFar(min)} <span>&deg;F</span>
        </li>
      </ul>
    </div>
  );
};
export default WeatherTemps;
