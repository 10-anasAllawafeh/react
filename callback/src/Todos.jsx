import { memo } from "react";

const Todos = ({ todos, addTodo,x }) => {
  console.log("child render");
  const randomColour = () => '#'+(Math.random()*0xFFFFFF<<0).toString(16);

  return (
    <>
      <h2 style={{background: randomColour()}}>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <form action="">
        <input type="text" onChange={x}/>
      <button onClick={addTodo}>Add Todo</button>
      </form>
    </>
  );
};

export default memo(Todos);