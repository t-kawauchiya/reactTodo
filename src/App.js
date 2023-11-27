import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    if (!task) return;
    setTodoList([...todoList, { task: task, isdone: false }]);
    setTask("");
  }
  const removeTodo = (index) => {
    const newList = [...todoList];
    newList.splice(index, 1);
    setTodoList(newList);
  }
  const toggleIsdone = (index) => {
    const newList = [...todoList];
    newList[index].isdone = !newList[index].isdone;
    setTodoList(newList);
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <ul>
        {todoList.map((todo, index) => {
          return <li key={index}>{todo.task}
            <button onClick={() => toggleIsdone(index)} >{todo.isdone ? "Done" : "Not Done"}</button>
            <button onClick={() => removeTodo(index)} >Remove</button>
          </li>;
        })}
      </ul>
      <form onSubmit={(e) => {
        e.preventDefault();
        addTodo();
      }}>
        <input
          type="text"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <input type="submit" value="Add Todo" onSubmit={addTodo} />
      </form>
    </div>
  );
}

export default App;
