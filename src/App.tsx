import React from 'react'
import TodoTemplate from './components/TodoTemplate'
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList'

const App: React.FC = () => {
  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList></TodoList>
    </TodoTemplate>
  )
}

export default App
