import React from 'react'
import './TodoList.scss'
import TodoListItem from './TodoListItem'
import { ITodo, OnRemove, OnToggle } from './types'

interface IProps {
  todos: Array<ITodo>
  onRemove: OnRemove
  onToggle: OnToggle
}

const TodoList: React.FC<IProps> = (props) => {
  const { todos, onRemove, onToggle } = props
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  )
}

export default TodoList
