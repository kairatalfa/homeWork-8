import React from "react";
import styled from "styled-components";

function AddTodo({ todo, toggleTask, removeTask }) {
  const DivForDelet = styled.div`
    display: flex;
    font-size: 25px;
    position: relative;
    left: 100px;
    bottom: 20px;
    color: red;
  `;
  const DivForText = styled.div`
 font-size: 25px;

  position: relative;
  top: 15px;
  right: 15px;
  `;

  return (
    <div key={todo.id} className="item-todo">
      <DivForText
        className={todo.complete ? "item-text strike" : "item-text"}
        onClick={() => toggleTask(todo.id)}
      >
        {todo.task}
      </DivForText>
      <DivForDelet onClick={() => removeTask(todo.id)}>X</DivForDelet>
    </div>
  );
}

export default AddTodo;
