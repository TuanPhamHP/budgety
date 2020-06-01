import React, { useState, useEffect } from "react";
import "./App.css";
import "./assets/style/main.scss";

import Summarize from "./components/Summarize";
import MoneyAction from "./components/MoneyAction";
import MoneyList from "./components/MoneyList";
// import { Switch, Route, Link, useLocation } from "react-router-dom";
// import TestRouter from "./components/TestRouter";
// import User from "./components/User";

function newItem(item) {
  const id = Date.now();
  return {
    id,
    description: item.description,
    status: item.status,
    value: +item.value,
  };
}
function App() {
  const [list, setList] = useState([]);
  useEffect(() => {
    let list = localStorage.getItem("list");
    if (list) {
      setList(JSON.parse(list));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
    // localStorage.setItem("list",'');
  }, [list]);
  const handleAddItem = (item) => {
    let udatedItem = newItem(item);
    setList([...list, udatedItem]);
  };
  const handleDelete = (id) => {
    const deletedList = list.filter((value) => value.id !== id);
    setList(deletedList);
  };

  return (
    <div className="App container">
      <Summarize list={list} />
      <MoneyAction handleAddItem={handleAddItem} />
      <MoneyList list={list} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
