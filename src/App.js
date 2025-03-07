import { useEffect, useState } from "react";

function App() {
  const [work, setWork] = useState("");
  const [todos, setTotodos] = useState([]);

  const onSubmit = (event) => {
    event.preventDefault();
    setTotodos((current) => [...current, work]);
    setWork("");
  };
  const onChange = (event) => {
    setWork(event.target.value);
  };
  const onClick = (event) => {
    const delTodo = event.target.parentElement.id;
    setTotodos((current) => current.filter((item) => item !== delTodo));
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);
  return (
    <div className="App">
      <h1>
        My to dos (
        {todos.length === 0 ? "Add your today's work!" : todos.length})
      </h1>
      <form onSubmit={onSubmit}>
        <input
          value={work}
          onChange={onChange}
          type="text"
          placeholder="What's today's work?"
        />
        <button>Add</button>
      </form>
      <hr />
      <ul>
        {todos.map((todo, index) => (
          <li id={todo} key={index}>
            {todo}
            <button onClick={onClick}> ❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
