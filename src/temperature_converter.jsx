import React, { useState } from 'react';

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState('20');
  const [fahrenheit, setFahrenheit] = useState('68');

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    if (value === '') {
      setFahrenheit('');
    } else {
      setFahrenheit(((parseFloat(value) * 9 / 5) + 32).toFixed(2));
    }
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    if (value === '') {
      setCelsius('');
    } else {
      setCelsius(((parseFloat(value) - 32) * 5 / 9).toFixed(2));
    }
  };

  return (
    <div className="flex items-center justify-center space-x-4">
      <div className="flex items-center">
        <input
          type="number"
          value={celsius}
          onChange={handleCelsiusChange}
          className="w-24 px-2 py-1 border rounded"
          placeholder="Celsius"
        />
        <label className="ml-2">°C</label>
      </div>
      <div className="flex items-center">
        <input
          type="number"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
          className="w-24 px-2 py-1 border rounded"
          placeholder="Fahrenheit"
        />
        <label className="ml-2">°F</label>
      </div>
    </div >
  );
};

export default TemperatureConverter;

