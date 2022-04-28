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

  return (
    <div className="weatherTemps">
      <h2>
        {/* TODO: add and onclick here somehwere to toggle between F and Celcius, can do all at once to make it easy */}
        Current: {kelvinToFar(temp)} <span>&deg;F</span>
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
