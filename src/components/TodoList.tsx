import React from 'react'
import './TodoList.scss'
import TodoListItem from './TodoListItem'

const TodoList: React.FC = () => {
  return (
    <div className="TodoList">
      <TodoListItem></TodoListItem>
      <TodoListItem></TodoListItem>
      <TodoListItem></TodoListItem>
    </div>
  )
}

export default TodoList
