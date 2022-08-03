import React from "react";
// 1. react-router-dom을 사용하기 위해서 아래 API들을 import 합니다.
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailPage from "../pages/DetailPage";
import TodoList from "../pages/TodoList";

// 2. Router 라는 함수를 만들고 아래와 같이 작성합니다.
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="detail/" element={<DetailPage />} />
        <Route path="detail/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
