import React, { useContext } from "react";
import { DataContext } from "../../../context/DataProvider";
import { DivTodo, Number, Li, BtnComplete, BtnTrash } from "./Todo.css";
import api from "../../../api";

export default function Todo({ text, id, index, completed }) {
  const { setTodos, todos } = useContext(DataContext);

  const handlerComplete = async () => {
    try {
      const response = await api.patch(`/api/todos/${id}`, {
        completed: !completed,
      });
      if (response.status === 200) {
        setTodos(
          todos.map((todo) => {
            if (todo.id === id) {
              return { ...todo, completed: !todo.completed };
            }
            return todo;
          })
        );
      }
    } catch (error) {
      console.error('Błąd podczas aktualizacji zadania:', error);
    }
  };

  const handlerDelete = async () => {
    try {
      const response = await api.delete(`/api/todos/${id}`);
      if (response.status === 200) {
        setTodos(todos.filter((todo) => todo.id !== id));
      }
    } catch (error) {
      console.error('Błąd podczas usuwania zadania:', error);
    }
  };
  
  return (
    <DivTodo>
      <Number className={completed ? "completed" : ""}>{`No. ${
        index + 1
      }`}</Number>
      <Li className={completed ? "completed" : ""}>{text}</Li>
      <BtnComplete onClick={handlerComplete}>
        <i
          className={completed ? "completed fas fa-check" : "fas fa-check"}
        ></i>
      </BtnComplete>
      <BtnTrash onClick={handlerDelete}>
        <i className="fas fa-trash"></i>
      </BtnTrash>
    </DivTodo>
  );
}
