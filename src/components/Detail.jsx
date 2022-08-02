import React from 'react'
import styled from "styled-components"
import {useNavigate} from "react-router-dom"
import { useSelector } from 'react-redux'
import { useParams } from "react-router-dom";


function Detail() {
  const todos= useSelector(state=>state.todolist)
  console.log(todos)
  const navigate=useNavigate()
  const param = useParams();
  
  const found= todos.find(todo=>todo.id===parseInt(param.id));
  console.log(found)
 return( 
   <div>
      <DetailPage key={found.id}>
       <DetailHeader>
      <p>ID:{found.id}</p>
       <button onClick={()=>{
      navigate("/")
      }}>이전으로</button>
      </DetailHeader>
      <h1>{found.title}</h1>
      <p>{found.body}</p>
       </DetailPage> 
      )
      
   </div>

 )}


export default Detail

const DetailPage= styled.div`
  width:40vw;
  margin: 50px auto;
  border: 2px solid rgb(186 159 234);
  padding: 20px;
`

const DetailHeader= styled.div`
display:flex;
justify-content:space-between;
button{
  background-color: rgb(186 159 2340);
  width: 130px;
  height: 4vh;
  border-radius: 10px;
  color: white;
  font-weight:bold;
  border:1px solid rgb(186 159 234)

}


`