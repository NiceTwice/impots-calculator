import React from "react";
import "./App.css";
import { getIncomeTax } from "./helpers/impots";

const TaxCalculator = () => {
  const [tax, setTax] = React.useState(0);
  const [income, setIncome] = React.useState("");

  const handleSubmit = () => {
    const tax = getIncomeTax(Number.parseFloat(income) ?? 0);
    setTax(tax);
  };

  return (
    <div>
      <input
        onChange={(event) => setIncome(event.target.value)}
        value={income}
        placeholder="Enter your income"
      />
      <button onClick={handleSubmit}>Calculate</button>
      <div>Impots à payer: {tax.toFixed(2)} euros</div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <TaxCalculator />
    </div>
  );
}

export default App;
