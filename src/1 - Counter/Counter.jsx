import { useReducer, useState } from "react";

const initialState = { counter: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment-counter": {
      return { counter: state.counter + 1 };
    }
    case "decrement-counter": {
      return { counter: state.counter - 1 };
    }
    case "reset-counter": {
      return { counter: 0 };
    }
    default: {
      throw new Error("Invalid error");
    }
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrementCounter = () => {
    dispatch({ type: "increment-counter" });
  };

  const handleDecrementCounter = () => {
    dispatch({ type: "decrement-counter" });
  };

  const handleResetCounter = () => {
    dispatch({ type: "reset-counter" });
  };

  return (
    <div>
      <h1>Counter</h1>
      <table>
        <thead>
          <tr>
            <th>Counter Value</th>
            <th>Increment Counter Button</th>
            <th>Decrement Counter Button</th>
            <th>Reset Counter Button</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{state.counter}</td>
            <td>
              <button
                className="btn btn--green"
                onClick={handleIncrementCounter}
              >
                Increment Counter
              </button>
            </td>
            <td>
              <button className="btn btn--red" onClick={handleDecrementCounter}>
                Decrement Counter
              </button>
            </td>
            <td>
              <button className="btn btn--yellow" onClick={handleResetCounter}>
                Reset Counter
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Counter;
