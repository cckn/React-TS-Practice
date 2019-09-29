import React from 'react'
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md'
import cn from 'classnames'
import './TodoListItem.scss'
import { ITodo, OnRemove, OnToggle } from './types'

interface IProps {
  todo: ITodo
  onRemove: OnRemove
  onToggle: OnToggle
}
const TodoListItem: React.FC<IProps> = (props) => {
  const {
    todo: { id, text, checked },
    onRemove,
    onToggle,
  } = props
  return (
    <div className="TodoListItem">
      <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  )
}

export default TodoListItem
