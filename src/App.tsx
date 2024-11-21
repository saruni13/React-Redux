import React from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { incremented } from './features/counter/counter-slice';
import './App.css';

function App() {
  // Accessing the current state and dispatch
  const value = useAppSelector((state) => state.counter.value); // Correctly selecting the counter state
  const dispatch = useAppDispatch();

  // Handler for the button click
  function handleClick() {
    dispatch(incremented()); // Dispatch the increment action
  }

  return (
    <>
      <h1>React Redux</h1>
      <div className="card">
        <button onClick={handleClick}>
          Count is: {value}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
