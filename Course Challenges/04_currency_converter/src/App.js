import { useEffect, useState } from 'react';
import './App.css';
 
export default function App() {
// 20240522220539
// https://api.frankfurter.app/latest?amount=100&from=USD&to=INR
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");

  useEffect(function () {
   const res= fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`)
    const data = res.json();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Currency Converter</h1>
        <div>
          <input type="number" value={amount} onChange={e=>setAmount(Number(e.target.value))} />
          <select>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="INR">INR</option>
          </select>
           to  
           <select>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="INR">INR</option>
          </select>
          <p>OUTPUT: {data.amount} </p>
        </div>
      </header>
    </div>
  );
}

