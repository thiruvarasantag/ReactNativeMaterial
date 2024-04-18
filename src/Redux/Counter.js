import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

const Counter = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;

// We define two action creators (increment and decrement) in actions.js.
// We define a reducer (counterReducer) in reducers.js to handle the state updates based on the actions.
// We create the Redux store in store.js using the createStore function, passing in the root reducer (counterReducer).
// In the React component Counter, we use the useSelector hook to select the count state from the Redux store, and the useDispatch hook to dispatch actions (increment and decrement) to the store.