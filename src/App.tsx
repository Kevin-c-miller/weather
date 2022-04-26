import { useState, useEffect } from 'react';
import { getWeather, getMoreWeather } from './services/apiConfig';
import './App.css';

function App() {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);

  return (
    <div className="App">
      <h1>Weather</h1>
    </div>
  );
}

export default App;
