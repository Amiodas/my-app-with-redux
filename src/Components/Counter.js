import { useSelector, useDispatch } from "react-redux";
import {
  incrementCounter,
  decrementCounter,
  resetCounter,
} from "../services/actions/counterAction";

const Counter = () => {
  const count = useSelector((state) => state.countR.count);
  console.log(count)
  const dispatch = useDispatch();
  // using react
  //   const [count, setCount] = useState(0);
  const handleIncrement = () => {
    //   setCount((count) => count + 1);
    dispatch(incrementCounter());
  };
  const handleDecrement = () => {
    //   setCount((count) => count - 1);
    dispatch(decrementCounter());
  };
  const handleReset = () => {
    //   setCount((count) => count - 1);
    dispatch(resetCounter());
  };

  return (
    <div>
      <h2>Counter App</h2>
      <ol>
        <li>state - count: 0</li>
        <li>actions - increment, decrement, reset</li>
        <li>reducers - increment - count = count + 1</li>
        <li>store</li>
      </ol>
      <h3>Count: {count}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Counter;
