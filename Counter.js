import React from 'react';
import { PropTypes } from 'prop-types';

const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync }) => (
  <>
    <div style={{ display: 'flex', gap: '1rem' }}>
      <button onClick={onIncrementAsync}>Increment after 1 second</button>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </div>
    <hr />
    <div>Clicked: {value} times</div>
  </>
);

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default Counter;
