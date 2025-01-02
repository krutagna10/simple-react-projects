import { useState } from "react";

function Primes() {
  const [primeCount, setPrimeCount] = useState("");

  function handlePrimeCountChange(event) {
    setPrimeCount(event.target.value);
    console.log("Inside function: " + primeCount);
  }

  console.log("After function: " + primeCount);

  return (
    <div>
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

export default Primes;
