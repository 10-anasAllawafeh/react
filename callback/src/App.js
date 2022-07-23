import { useState, useCallback } from "react";
import ReactDOM from "react-dom/client";
import Todos from "./Todos";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const handleName = useCallback((e) => {
    setName(e.target.value);
  },[]);

  // const addTodo = () => {
  //   setTodos((t) => [...t, "New Todo"]);
  // };

  const addTodo = useCallback(() => {setTodos((t) => [...t, "New Todo"]);}, [todos]);
  return (
    <>
    <Todos todos={todos} addTodo={addTodo} x={handleName}/>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <hr />
        <p>name : {name}</p>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App();
