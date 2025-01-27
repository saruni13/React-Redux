import React from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { incremented, amountAdded } from './features/counter/counter-slice';
import { usefetchBreedsQuery } from './features/counter/dogs/dogs-api-slice';
import './App.css';

function App() {
  // Accessing the current state and dispatch
  const value = useAppSelector((state) => state.counter.value); // Correctly selecting the counter state
  const dispatch = useAppDispatch();
  const { data = [], isfetching } = usefetchBreedsQuery();

  // Handler for the button click
  function handleClick() {
    dispatch(amountAdded(3)); // Dispatch the increment action
  }

  return (
    <>
      <h1>React Redux</h1>
      <div className="card">
        <button onClick={handleClick}>Count is: {value}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div>
        
      </div>
      <div>
        {isfetching ? (
          <p>Loading...</p>
        ) : (
          <>
            <p>Number of dogs fetched: {data.length}</p>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Picture</th>
                </tr>
              </thead>
              <tbody>
                {data.map((breed) => (
                  <tr key={breed.id}>
                    <td>{breed.name}</td>
                    <td>
                      <img src={breed.image.url} alt={breed.name} height={250} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
