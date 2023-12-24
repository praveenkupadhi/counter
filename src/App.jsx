import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(1);
  const [maxCount, setMaxCount] = useState(1000);

  const handleCountSub = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleCountAdd = () => {
    if (count < maxCount) {
      if (typeof count === 'string') setCount(+count + 1);
      else setCount(count + 1);
    }
  };

  return (
    <div className="App">
      <div id="input-value">
        <input
          type="number"
          placeholder="Enter initial count"
          onChange={(e) => {
            setCount(+e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Enter max count"
          onChange={(e) => {
            if (e.target.value === '') setMaxCount(1000);
            else setMaxCount(+e.target.value);
          }}
        />
      </div>
      <div id="counter">
        <button onClick={handleCountSub} id="dec">
          -
        </button>
        <input
          type="number"
          value={count}
          onChange={(e) => {
            if (e.target.value === '') setCount('');
            if (+e.target.value > 0 && +e.target.value <= 1000)
              setCount(+e.target.value);
          }}
        />
        <button onClick={handleCountAdd} id="inc">
          +
        </button>
      </div>
    </div>
  );
}

export default App;
