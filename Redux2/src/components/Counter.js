import classes from './Counter.module.css';
import {useDispatch, useSelector} from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();

  // 저장소에서 데이터가 변경될때마다 최신의 state를 받게 됨..
  const counter = useSelector(state => state.counter);

  const incrementHandler = () => {
    dispatch({ type : 'increment' });
  }

  const decrementHandler = () => {
    dispatch({ type : 'decrement' });
  }


  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
