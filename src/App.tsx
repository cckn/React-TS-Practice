import React, { useState, useRef, useCallback } from 'react'
import TodoTemplate from './components/TodoTemplate'
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList'
import { ITodo, OnRemove } from './components/types'

const App: React.FC = () => {
  const initialTodos: ITodo[] = [
    { id: 1, text: 'todo1 ', checked: true },
    { id: 2, text: 'todo2 ', checked: false },
    { id: 3, text: 'todo3 ', checked: true },
  ]
  const [todos, setTodos] = useState(initialTodos)

  const nextId = useRef(4)
  const onInsert = useCallback(
    (text: string) => {
      const todo: ITodo = {
        id: nextId.current,
        text,
        checked: false,
      }
      setTodos(todos.concat(todo))
      nextId.current += 1
    },
    [todos],
  )

  const onRemove: OnRemove = useCallback(
    (id: number) => {
      setTodos(todos.filter((todo) => todo.id !== id))
    },
    [todos],
  )

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove}></TodoList>
    </TodoTemplate>
  )
}

export default App
