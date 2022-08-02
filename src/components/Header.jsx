import React from "react"
import styled from "styled-components"

function Header() {
  return (
    <TodoHeader className='header'>
   <p>My Todo List</p>
   <p>React</p>
   </TodoHeader>
  )
}

export default Header

const TodoHeader=styled.div`
  background-color:rgb(186 159 234);
  color:white;
  display: flex;
  justify-content: space-between;
  padding: 1em;
  font-weight: bolder;
`

