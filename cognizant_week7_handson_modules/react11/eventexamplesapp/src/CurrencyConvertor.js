import React, { useState } from 'react';

function CurrencyConvertor() {
  const [rupees, setRupees] = useState('');
  const [euros, setEuros] = useState(null);

  const handleChange = (e) => {
    setRupees(e.target.value);
  };

  const handleSubmit = () => {
    const euroValue = parseFloat(rupees) / 90;
    setEuros(euroValue.toFixed(2));
  };

  return (
    <div style={{ marginTop: '30px' }}>
      <h2>Currency Converter (INR ➡️ Euro)</h2>
      <input
        type="number"
        placeholder="Enter Rupees"
        value={rupees}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Convert</button>

      {euros && (
        <p>{rupees} INR = <strong>{euros} EUR</strong></p>
      )}
    </div>
  );
}

export default CurrencyConvertor;