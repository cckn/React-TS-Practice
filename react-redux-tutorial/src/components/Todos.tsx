import React from 'react'

type TodoItemProps = {
  todo?: string
  onToggle?: () => void
  onRemove?: () => void
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onRemove }) => {
  return (
    <>
      <input type="checkbox" name="" id="" />
      <span>예제 택스트</span>
      <button>삭제</button>
    </>
  )
}

type TodosProps = {
  input?: string
  todos?: any
  onChangeInput?: () => void
  onInsert?: () => void
  onToggle?: () => void
  onRemove?: () => void
}

const Todos: React.FC<TodosProps> = ({
  input,
  todos,
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
}) => {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" />
        <button type="submit">등록</button>
      </form>
      <div>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </>
  )
}

export default Todos
