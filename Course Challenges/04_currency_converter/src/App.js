import { useEffect, useState } from 'react';
import './App.css';
 
export default function App() {
// 20240522220539
// https://api.frankfurter.app/latest?amount=100&from=USD&to=INR
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [converted, setConverted] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function convert() {
      setIsLoading(true)
      const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`)
      const data = await res.json();
      setConverted(data.rates[toCurrency])
      setIsLoading(false);
    }
    if (fromCurrency === toCurrency)
      return setConverted(amount)
    convert();
  }, [amount, fromCurrency,toCurrency]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Currency Converter</h1>
        <div>
          <input type="number"
            value={amount}
            onChange={e => setAmount(Number(e.target.value))} 
            disabled={isLoading}

            />
          <select value={fromCurrency} onChange={e=>setFromCurrency(e.target.value)} disabled={isLoading}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="INR">INR</option>
          </select>
           to  
           <select value={ toCurrency} onChange={e=>setToCurrency(e.target.value)} disabled={isLoading}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="INR">INR</option>
          </select>
          <p>OUTPUT: {converted} </p>
        </div>
      </header>
    </div>
  );
}

