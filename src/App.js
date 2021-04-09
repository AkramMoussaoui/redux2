import { useDispatch, useSelector } from "react-redux";
import {
  addToCounter,
  removeFromCounter,
} from "./Redux/Actions/counterActions";
function App() {
  const state = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <p>{state}</p>
      <button onClick={() => dispatch(addToCounter())}>+</button>
      <button onClick={() => dispatch(removeFromCounter())}>-</button>
    </div>
  );
}

export default App;
