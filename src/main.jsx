//가상돔 요소를 생성해주는 리액트 객체 가져옴
import React from "react";
//리액트 객체가 생성한 리액트 요소를 일반돔으로 변환하는 객체
import ReactDOM from "react-dom/client";
//루트 컴포넌트(리액트 요소를 반환해주는 함수)
import App from "./App.jsx";
//루트 컴포넌트에 적용하 ㄹ전체 스타일 파일
import "./styles/index.css";

//App이라는 마스터 컴포넌트를 돔 형태로 구현해서 index.html의 #root요소안에 넣어줌.
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
