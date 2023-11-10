import React, { createContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import api from "../api";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [activeLang, setActiveLang] = useState(false);
  const [activeLangBurger, setActiveLangBurger] = useState(false);
  const [languaeFirst, setLanguaeFirst] = useState("");

  const { t, i18n } = useTranslation();

  useEffect(() => {
    setLanguaeFirst(i18n.language);
  }, [i18n.language]);

  useEffect(() => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      case "all":
        setFilteredTodos(todos);
        break;

      default:
        break;
    }
  }, [todos, status]);

  useEffect(() => {
  const todoStore = JSON.parse(localStorage.getItem("todoStore"));
  if (todoStore && Array.isArray(todoStore)) {
    setTodos(todoStore);
  }
}, []);

useEffect(() => {
  const fetchTodos = async () => {
    try {
      const response = await api.get('/api/todos');
      setTodos(response.data);
    } catch (error) {
      console.error('Błąd podczas pobierania todos:', error);
      setTodos([]);
    }
  };

  fetchTodos();
}, []);

  const [projectName, setProjectName] = useState("My_projects");

  const [path, setPath] = useState("");

  const [navSticky, setNavSticky] = useState("");
  const [burgerActive, setBurgerAcive] = useState(false);
  const [viewportWidth, setViewportWidth] = useState();

  window.addEventListener("resize", function () {
    setViewportWidth(window.innerWidth);
  });

  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    setViewportWidth(window.innerWidth);
  }, [setViewportWidth]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const defaultContext = {
    inputText,
    setInputText,
    todos,
    setTodos,
    status,
    setStatus,
    filteredTodos,
    setFilteredTodos,
    projectName,
    setProjectName,
    path,
    setPath,
    navSticky,
    setNavSticky,
    burgerActive,
    setBurgerAcive,
    viewportWidth,
    setViewportWidth,
    scrollTop,
    showScroll,
    setShowScroll,
    handleChangeLanguage,
    t,
    activeLang,
    setActiveLang,
    activeLangBurger,
    setActiveLangBurger,
    languaeFirst,
  };

  return (
    <>
      <DataContext.Provider value={defaultContext}>
        {props.children}
      </DataContext.Provider>
    </>
  );
};
