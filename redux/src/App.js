import './App.css';
import { useSelector,useDispatch }   from 'react-redux';
import { decrement, increment, logIn, logOut } from './actions';
import Register from './components/register';

function App() {
  const counter= useSelector(state=>state.counter);
  const logged= useSelector(state=>state.logged);
  const dispatch=useDispatch();
  return (
    <>
    {/* <div className="App">
      <button onClick={()=>dispatch(increment())}>+</button>
      <h1>Counter is <span style={{color: color}}>{counter}</span></h1>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <button onClick={()=>dispatch(logIn())}>Log in</button>
      <button onClick={()=>dispatch(logOut())}>Log out</button>
      {!logged? <h1 style={{color:"red"}}>You are logged Out</h1>: <h1 style={{color: "greenyellow"}}>You are logged in</h1>}
    </div> */}
    <Register />
    </>
  );
}

export default App;
