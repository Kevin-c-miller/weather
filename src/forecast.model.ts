export interface TheForecast {
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
}
