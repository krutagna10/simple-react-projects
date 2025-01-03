import Primes from "./3 - Number Of Primes/Primes.jsx";
import { useState } from "react";

function App() {
  const [primeCount, setPrimeCount] = useState("");

  console.log("Before function: " + primeCount);

  function handlePrimeCountChange(event) {
    setPrimeCount(event.target.value);
    console.log("Inside function: " + primeCount);
  }

  console.log("After function: " + primeCount);

  return (
    <div className="app">
      <h1>Prime Number</h1>
      <div>
        <input
          onChange={handlePrimeCountChange}
          type="number"
          placeholder="Enter the prime count"
          value={primeCount}
        />
        <button>Generate Primes</button>
      </div>
    </div>
  );
}

export default App;
