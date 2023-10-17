import React from "react";
import "./App.css";
import { getIncomeTax } from "./helpers/impots";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./style/mui/theme";

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
    <>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <div className="App">
          <TaxCalculator />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
