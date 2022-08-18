import logo from './logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from './Redux/action';
import './App.css';

function App() {
  const state = useSelector(state => state)
  console.log(state)
  const dispatch = useDispatch()

  const handleIncrement = () => {
    dispatch(increment())
  }
  const handleDecrement = () => {
    dispatch(decrement())
  }

  const handleReset = () => {
    dispatch(reset())
  }
  return (
    <div className="App">
      <button onClick={handleIncrement}>+</button>
      <h1>{state.count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>reset</button>



    </div>
  );
}

export default App;
