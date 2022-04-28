import React from 'react';

interface SunProps {
  sunrise: number;
  sunset: number;
}

const SunsetAndRise = ({ sunrise, sunset }: SunProps) => {
  // converitng unix timestamp to local time
  let unix_sunriseTimestamp = sunrise;
  let unix_sunsetTimestamp = sunset;

  // New JavaScript Date object based on the timestamp
  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  const sunriseDate = new Date(unix_sunriseTimestamp * 1000);
  const sunsetDate = new Date(unix_sunsetTimestamp * 1000);

  // Hours part from the timestamp
  const sunriseHours = sunriseDate.getHours();
  const sunsetHours = sunsetDate.getHours() - 12;

  // Minutes part from the timestamp
  const sunriseMinutes = sunriseDate.getMinutes();
  const sunsetMinutes = sunsetDate.getMinutes();

  // Seconds part from the timestamp
  const sunriseSeconds = sunriseDate.getSeconds();
  const sunsetSeconds = sunsetDate.getSeconds();

  // Will display time in 10:30:23 format
  const sunriseFormatted = `${sunriseHours}:${sunriseMinutes}:${sunriseSeconds} AM`;
  const sunsetFormatted = `${sunsetHours}:${sunsetMinutes}:${sunsetSeconds} PM`;

  return (
    <div className="sunInfo">
      <h5> Today's Sunrise & Sunset </h5>
      <p className="sunInfoList">
        Sunrise: {sunriseFormatted} <br />
        Sunset: {sunsetFormatted}
      </p>
    </div>
  );
};

export default SunsetAndRise;
