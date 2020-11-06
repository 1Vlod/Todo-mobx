import React, { useState } from "react"
import styled from "styled-components"

import { observer } from "mobx-react"
import { TodoStoreType } from "../models/todoStore"


interface HeaderComponentProps {
  store: TodoStoreType
}

const StyledHeader = styled.form`
  display: flex;
  justify-content: center;
`

const StyledInput = styled.input`
  border-radius: 5rem;
  width: 300px;

  padding: 1rem;

  font-size: 2rem;

  border: none;
  outline: none;

  background: black;
  color: white;
`

const StyledButton = styled.button`
  background: black;
  color: white;

  border-radius: 50%;
  margin-left: 20px;

  min-width: 64px;
  font-size: 50px;

  border: none;
  outline: none;

  opacity: 1;
  transition: opacity .5s; 

  &:hover {
    opacity: .5;
  }
`

const Header = observer(function HeaderComponent({ store }: HeaderComponentProps) {

  const [text, setText] = useState("")

  function handleChange(e : any): void {
    setText(e.target.value)
    setTimeout(() => {
      store.setFilter(e.target.value)
    }, 500)
  }

  function handleSubmit(e : any): void {
    e.preventDefault()
    handleClick()
  }

  const handleClick = () => {
    if (text.length > 0) {
      store.addTodo(text.slice(0, 57))
      setText("")
      store.setFilter("")
    } 
  }

  return (
    <StyledHeader onSubmit={handleSubmit}>
      <StyledInput type="text" value={text} onChange={handleChange}/>
      <StyledButton>+</StyledButton>
    </StyledHeader>
  )
})

export default Header

