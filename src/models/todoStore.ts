import { types } from "mobx-state-tree"

const Todo = types
  .model({
    text: types.string,
    completed: false,
    id: types.identifierNumber
  })
  .actions((self) => ({
    complete(): void {
      self.completed = !self.completed
    }
  }))

const TodoStore = types
  .model({
    todos: types.array(Todo),
    filter: types.optional(types.string, "")
  })
  .views((self) => ({
    getFilteredTodos(): TodoType[]{
      return self.todos.filter(todo => todo.text.startsWith(self.filter))
    }
  }))
  .actions((self) => ({
    addTodo(text: string): void {
      const id = self.todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1
      self.todos.unshift({
        text,
        id
      })
    },
    setFilter(text: string): void {
      self.filter = text
    }
  }))

export type TodoType = {text: string, completed: boolean, id: number, complete: any}
export type TodoStoreType = {todos: TodoType[], filter: string, addTodo: any, setFilter: any, getFilteredTodos: any}

export default TodoStore