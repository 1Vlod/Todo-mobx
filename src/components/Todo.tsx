import React from "react"
import styled from "styled-components"

import { observer } from "mobx-react"

import { TodoType } from "../models/todoStore"

interface TodoComponentProps {
  todo: TodoType,
}

interface StyledTodoProps {
  readonly completed: boolean;
}

const StyledTodo = styled.div<StyledTodoProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.5rem;
  margin: 0.5rem;

  font-size: 1.5rem;
  background: black;
  border-radius: 5rem;
  min-width: 200px;
  transition: 1s opacity ease;

  opacity:  ${props => props.completed ? "0.5" : "1" };

`

const StyledTodoText = styled.span<StyledTodoProps>`
  transition: 1s all ease;
  
  color: white;
  text-decoration: ${props => props.completed ? "line-through" : ""};
`

const StyledTodoCheckbox = styled.input`
  margin-right: 15px;
`

const Todo = observer(function TodoComponent({ todo }: TodoComponentProps) {

  return (
    <StyledTodo completed={todo.completed}>
      <StyledTodoText completed={todo.completed}>{todo.text}</StyledTodoText>
      <StyledTodoCheckbox type="checkbox" onChange={todo.complete} checked={todo.completed}/>
    </StyledTodo>
  )
})

export default Todo
