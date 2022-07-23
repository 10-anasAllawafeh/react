import logo from './logo.svg';
import './App.css';
import React,{useState,useCallback} from 'react';
import Info from './component/info';
import Ourteam from './component/hooks'
import Counter from './component/effect'
import Joker from './component/custom';
import GetId from './component/callback';
import Button from './Button';


// import {Routes,BrowserRouter, Route,Link, Router} from "react-router-dom";



function App() {
  const {data,error,loading,reset}=Joker('https://v2.jokeapi.dev/joke/Any')

  if (loading) return <h1>Loading...</h1>

  if (error) return console.log(error);
  //////////////////
  // const [count , setCount] = useState(0);

  // function increment(){
  //   setCount(s => s + 1);
  // }

  // const incrementCallback = useCallback(increment, []);
////////////////////
const [count, setCount] = useState(0);
const [todos, setTodos] = useState([]);

const increment = () => {
  setCount((c) => c + 1);
};
const addTodo = useCallback(() => {
  setTodos((t) => [...t, "New Todo"]);
}, [todos]);
//////////////////

  return (
    <>
    {/* <div className='App'>
      
        {data? <div><h1>{data.setup}</h1><h1>{data.delivery}</h1></div> : ''}
        <button onClick={reset}>reset</button>
        
    </div>
    <GetId /> */}
    <div>
      count: {count}
      <Button onClick={incrementCallback}>
        Increment
      </Button>
    </div>
    {/* <BrowserRouter>
      <ROUTERS>
        <ROUTER path="/" element={<Info/>}>
          Information
        </ROUTER>
      </ROUTERS>
    </BrowserRouter> */}
    {/* <Info />
    <Ourteam />
    <Counter /> */}
    </>
  );
}

export default App;
