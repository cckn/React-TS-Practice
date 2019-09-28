import React from 'react'
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md'
import cn from 'classnames'
import './TodoListItem.scss'
import { ITodo, OnRemove } from './types'

interface IProps {
  todo: ITodo
  onRemove: OnRemove
}
const TodoListItem: React.FC<IProps> = (props) => {
  const {
    todo: { id, text, checked },
    onRemove,
  } = props
  return (
    <div className="TodoListItem">
      <div className={cn('checkbox', { checked })}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline></MdRemoveCircleOutline>
      </div>
    </div>
  )
}

export default TodoListItem
