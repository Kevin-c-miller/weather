import React from 'react';

interface CurrentWeatherProps {
  myWeather: {
    description: string;
    icon: string;
    main: string;
  };
}

const CurrentWeather = ({ myWeather }: CurrentWeatherProps) => {
  const { description, icon, main } = myWeather;

  return (
    <div>
      <h5>{main}</h5>
      <img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="weather icon"
      />
      <h6>{description}</h6>
    </div>
  );
};

export default CurrentWeather;
