const CHANGE_INPUT = 'todos/CHANGE_INPUT'
const INSERT = 'todos/INSERT'
const TOGGLE = 'todos/TOGGLE'
const REMOVE = 'todos/REMOVE'

export const changeInput = (input: string) => ({ type: CHANGE_INPUT, input })
let id = 3
export const insert = (text: string): { type: typeof INSERT; todo: Todo } => ({
  type: INSERT,
  todo: { id: id++, text, done: false },
})
export const toggle = (id: number) => ({ type: TOGGLE, id })

export const remove = (id: number) => ({
  type: REMOVE,
  id,
})

type Todo = {
  id: number
  text: string
  done: boolean
}

type Todos = {
  input: string
  todos: Todo[]
}
const initialState: Todos = {
  input: '',
  todos: [
    { id: 1, text: 'todo 1', done: false },
    { id: 2, text: 'todo 2', done: true },
  ],
}

type todosAction =
  | { type: typeof CHANGE_INPUT; input: string }
  | { type: typeof INSERT; todo: Todo }
  | { type: typeof TOGGLE; id: number }
  | { type: typeof REMOVE; id: number }

const todos = (
  state = initialState,
  action: todosAction,
): typeof initialState => {
  switch (action.type) {
    case CHANGE_INPUT:
      return { ...state, input: action.input }
    case INSERT:
      return { ...state, todos: [...state.todos, action.todo] }
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.id) {
            return { ...todo, done: !todo.done }
          }
          return todo
        }),
      }
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      }

    default:
      return state
  }
}

export default todos
