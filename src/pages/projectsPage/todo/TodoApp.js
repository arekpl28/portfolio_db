import React, { useContext } from "react";
import FormTodo from "./FormTodo";
import TodoList from "./TodoList";
import { DataContext } from "../../../context/DataProvider";

import { DivTodoApp, DivWrapper, H2 } from "./TodoApp.css";

export default function TodoApp() {
  const { t } = useContext(DataContext);
  return (
    <>
      <DivTodoApp>
        <DivWrapper>
          <H2>{t("Todo")}</H2>
          <FormTodo></FormTodo>
          <TodoList></TodoList>
        </DivWrapper>
      </DivTodoApp>
    </>
  );
}
