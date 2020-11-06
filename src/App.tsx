import React from 'react';
import { observer } from "mobx-react"
import styled from 'styled-components'

import { TodoStoreType } from "./models/todoStore"

import Todo from "./components/Todo"
import Header from "./components/Header"

export interface AppComponentProps {
  store: TodoStoreType
}

const StyledWrapper = styled.section`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background-image: linear-gradient(90deg, #ee5c87, #f1a4b5, #d587b3);
`

const StyledApp = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
`


const App = observer(function AppComponent({ store } : AppComponentProps) {
  return (
    <StyledWrapper>
      <StyledApp>
        <Header store={store}/>
        <div>
          {store.getFilteredTodos().map((todo: any) => <Todo key={todo.id} todo={todo}/>)}
        </div>
      </StyledApp>
    </StyledWrapper>
  );
})


export default App
