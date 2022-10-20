import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoForm from "./components/TodoForm";
import "./App.css";
import styled from "styled-components";

function App() {
  const [todos, SetTodos] = useState([]);

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInput,
        complete: false,
      };
      SetTodos([...todos, newItem]);
    }
  };
  const removeTask = (id) => {
    SetTodos([...todos.filter((todo) => todo.id !== id)]);
  };
  const handleToggle = (id) => {
    SetTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
      ),
    ]);
  };
  const Container = styled.div`
   background-color: aqua;
    width: 600px;
    margin: auto;
    height: 500px;
  `;

  return (
    <Container>
      <div className="App">
        <header>
          <h1> Kairat Edilbekov:{todos.length}</h1>
        </header>
        <TodoForm addTask={addTask} />
        {todos.map((todo) => {
          return (
            <AddTodo
              todo={todo}
              key={todos.id}
              toggleTask={handleToggle}
              removeTask={removeTask}
            />
          );
        })}
      </div>
    </Container>
  );
}

export default App;
