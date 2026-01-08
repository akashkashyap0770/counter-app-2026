import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  /** Count increment Function */
  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  /** Count Decrement Function */
  const handleDecrement = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  /** Count Reset Function */
  const handleReset = () => {
    setCount(0);
  };

  /** Tracking Count using useEffect Hook */
  useEffect(() => {
    console.log("Tracking Count:", count);
  }, [count]);

  return (
    <div className="outer-container">
      <h1 className="counter-title">📱 Counter Application</h1>

      <div className="container">
        <p className="count">Count: {count}</p>

        <div className="btn-grouping">
          <button className="btn-inc" onClick={handleIncrement}>
            ➕
          </button>
          <button className="btn-dec" onClick={handleDecrement}>
            ➖
          </button>
          <button className="btn-res" onClick={handleReset}>
            🔄
          </button>
        </div>
      </div>

    </div>
  );
}

export default App;
