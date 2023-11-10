import React, { useContext } from "react";
import Todo from "./Todo";

import { DataContext } from "../../../context/DataProvider";
import { DivTodoContainer, UlTodoList, Bar } from "./TodoList.css";

export default function TodoList() {
  const { filteredTodos } = useContext(DataContext);

  const todosList = Array.isArray(filteredTodos) 
    ? filteredTodos.map((todo, index) => (
        <Todo
          key={todo.id}
          id={todo.id}
          completed={todo.completed}
          text={todo.text}
          index={index}
        ></Todo>
      ))
    : [];
  return (
    <>
      <DivTodoContainer>
        <UlTodoList>
          <Bar>{todosList.reverse()}</Bar>
        </UlTodoList>
      </DivTodoContainer>
    </>
  );
}
