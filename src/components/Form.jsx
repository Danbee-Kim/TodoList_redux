import React from 'react'
import styled from "styled-components"
import { useState } from 'react'
import {useDispatch} from "react-redux"
import {addTodo} from "../redux/modules/todolist"

function Form() {
const dispatch=useDispatch();
const[lists,setLists]=useState({
  title:"",
  body:"",
})
const {title,body}=lists

const changeHandler=(e)=>{
  const {value,name}= e.target
  setLists({
    ...lists,
    [name]:value,
  })
}
const submitHandler=(e)=>{
  e.preventDefault()
  if(title === ""|| body==="") return
  dispatch(addTodo({
    id:Date.now(),
    title,
    body,
    isDone:false,
  }))
  setLists({ title: "", body: "" })
}  
return (
    <TodoForm  onSubmit={submitHandler}>
      <TodoInput>
        <label htmlFor='title'>제목</label>
        <input onChange={changeHandler} id='title' type="text" name="title" value={title}/>
        <label htmlFor='body'>내용</label>
        <input onChange={changeHandler} id='body' type="text" name="body" value={body}/>
      </TodoInput>
      <button >추가하기</button>
    </TodoForm>
  )
}

export default Form

const TodoForm= styled.form`
  height: 8vh;
  border:2px solid rgb(186 159 234);
  border-radius: 60px;
  display: flex;
  padding:20px;
  align-items: center;
  justify-content: space-between;
  margin-top:20px;
  button{
    background-color: rgb(186 159 2340);
  width: 130px;
  height: 4vh;
  border-radius: 10px;
  color: white;
  font-weight:bold;
  border:1px solid rgb(186 159 234);

  }
`
const TodoInput= styled.div`
  label{
    font-weight:bold
  }
  input{
  margin: 20px;
  width: 26vw;
  border:1px solid black;
  border-radius: 10px;
  height: 4vh;
  }

`