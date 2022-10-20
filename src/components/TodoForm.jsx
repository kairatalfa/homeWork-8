import { useState } from "react";
import React from "react";
import styled from "styled-components";

function TodoForm({ addTask }) {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };
  const handleKeyPress = (e) => {
    if (e.key === "enter") {
      handleSubmit("");
    }
  };

  const Button = styled.button`
    background-color: blue;
    border: none;
    color: white;
    height: 20px;
    border-radius: 100px;
   
  `;
 

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={userInput}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder=" Введите значение..."
      />

      <Button> Cохранить </Button>
    </form>
  );
}

export default TodoForm;
