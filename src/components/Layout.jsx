import React from 'react'
import styled from "styled-components"

function Layout(props) {
  return (
    <TodoLayout>{props.children}</TodoLayout>
  )
}

export default Layout

const TodoLayout=styled.div`
  min-width: 800px;
  max-width: 1200px;
  margin: 0 auto;
`