import React, { useContext } from "react";
import api from "../../../api";
import { DataContext } from "../../../context/DataProvider";
import {
  Form,
  DivInput,
  InputTodo,
  ButtonTodo,
  DivSelect,
  Label,
  Select,
} from "./FormTodo.css";

export default function FormTodo() {
  const { setTodos, inputText, setInputText, setStatus, t } = useContext(
    DataContext
  );

  const addTodoToDatabase = async (newTodo) => {
  try {
    const response = await api.post('/api/todos', newTodo);
    if (response.status === 201) { 
      setTodos(prevTodos => [...prevTodos, response.data]); 
    }
  } catch (error) {
    console.error('Błąd podczas dodawania todo:', error);
  }
};

  const handlerInputText = (e) => {
    setInputText(e.target.value);
  };

  const handlerClickAddTodo = (e) => {
    e.preventDefault();
  if (inputText.trim() === "") {
    return;
  } else {
    const newTodo = {
      text: inputText,
      completed: false,
    };
    addTodoToDatabase(newTodo);
    setInputText(""); 
  }
  };

  const handlerSelect = (e) => {
    setStatus(e.target.value);
  };

  return (
    <>
      <Form>
        <DivInput>
          <InputTodo
            value={inputText}
            onChange={handlerInputText}
            type="text"
          />
          <ButtonTodo onClick={handlerClickAddTodo} type="submit">
            {t("Create")}
          </ButtonTodo>
        </DivInput>
        <DivSelect>
          <Label htmlFor="select">{t("Select")}</Label>
          <Select name="select" onChange={handlerSelect}>
            <option value="all">{t("All")}</option>
            <option value="completed">{t("Completed")}</option>
            <option value="uncompleted">{t("Uncompleted")}</option>
          </Select>
        </DivSelect>
      </Form>
    </>
  );
}
