// import React from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import {  amountAdded } from './features/counter/counter-slice';
import { fetchBreeds } from './features/counter/dogs/dogs-api-slice';
import './App.css';

function App() {
  // Accessing the current state and dispatch
  const value = useAppSelector((state) => state.counter.value); // Correctly selecting the counter state
  const dispatch = useAppDispatch();
  const [numdogs,setNumDogs] = useState(10);
  const { data = [], fetching } = fetchBreeds();

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
          {/* Edit <code>src/App.tsx</code> and save to test HMR */}
        </p>
      </div>
      <div>

      </div>
      <div>
        {fetching ? (
          <p>Loading...</p>
        ) : (
          <>
          <div>
            <p>Dogs to fetch:</p>
            <select value= {numdogs} onChange={(e) => setNumDogs(Number(e.target.value))}>
               <option value= {numdogs}>{numdogs}</option>
            </select>

          </div>
            <p>Number of dogs fetched: {data.length}</p>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Picture</th>
                </tr>
              </thead>
              <tbody>
                {data.map((breed:any) => (
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
