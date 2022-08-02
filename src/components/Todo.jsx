import React from 'react'
import { useDispatch} from 'react-redux'
import styled from "styled-components"
import {toggleTodo, deleteTodo} from "../redux/modules/todolist"
import {useNavigate} from "react-router-dom"

function Todo({todo}) {

const dispatch=useDispatch();
const onClickChange=()=>{
  dispatch(toggleTodo(todo.id))
}
const onClickDelete=()=>{
 dispatch(deleteTodo(todo.id))
}
const navigate = useNavigate();
  return (
   
    <TodoBox>
       <button
      onClick={() => {
        navigate(`/detail/${todo.id}`);
      }}
    >
      상세페이지
    </button>
      <h3>{todo.title}</h3>
      <p>{todo.body}</p>
      <TodoBtns>
        <button onClick={onClickDelete}>삭제하기</button>
        <button onClick={onClickChange}>{todo.isDone ? "취소":"완료"}</button>
      </TodoBtns>
    </TodoBox>
  )
    
}

export default Todo

const TodoBox=styled.div`
  border:2px solid rgb(186 159 234);
  width: 300px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  button{
    background-color:white;
    border:2px solid #a185d3;
    padding:8px;
    border-radius:10px;
    width:90px;
  }
`
const TodoBtns= styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  margin: 10px;
  button{
    background:#a185d3;
    border:1px solid #a185d3;
    padding:8px;
    border-radius:10px;
    width:90px;
  }
`