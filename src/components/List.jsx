import React from 'react'
import styled from "styled-components"
import Todo from './Todo'
import { useSelector } from 'react-redux';

function List() {
  const  todos  = useSelector((state) => state.todolist);
  console.log(todos)
  return (
    <div>
      <TodoList>Working!</TodoList>
      <AllLists>
      {todos.map((todo)=>(
        todo.isDone===false?<Todo todo={todo} key={todo.id}/>:null
      ))}
      </AllLists>
      <TodoList>Done!</TodoList>
      <AllLists>
      {todos.map((todo)=>(
        todo.isDone? <Todo key={todo.id} todo={todo}/>:null
      ))}
      </AllLists>
    </div>
  )
}

export default List

const AllLists=styled.div`
display:flex;
flex-wrap:wrap;
gap:10px

`
const TodoList=styled.h1`
  text-align:center;
  margin: 30px auto;
`

