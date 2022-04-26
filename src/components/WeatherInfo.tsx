import { Weather } from '../App';

// interface  Props {
//     weather: Weather{}
// }

export default function WeatherInfo(props: {
  weather: Weather;
  main: Weather;
}) {
  return (
    <div>
      <h2>Weather</h2>
    </div>
  );
}
