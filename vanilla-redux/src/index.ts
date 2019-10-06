import { createStore } from 'redux'

const divToggle: HTMLElement | null = document.querySelector('.toggle')
const counter: HTMLElement | null = document.querySelector('h1')

const buttonIncrease: HTMLElement | null = document.querySelector('#increase')
const buttonDecrease: HTMLElement | null = document.querySelector('#decrease')
if (
  divToggle === null ||
  counter === null ||
  buttonIncrease === null ||
  buttonDecrease === null
) {
  throw 'Error'
}

divToggle.onclick = () => {
  store.dispatch(toggleSwitch())
}
buttonIncrease.onclick = () => {
  store.dispatch(increase(1))
}
buttonDecrease.onclick = () => {
  store.dispatch(decrease())
}
// Action Types
const TOGGLE_SWITCH = 'TOGGLE_SWTICH' as const
const INCREASE = 'INCREASE' as const
const DECREASE = 'DECREASE' as const

const toggleSwitch = () => ({ type: TOGGLE_SWITCH })
const increase = (difference: number) => ({ type: INCREASE, difference })
const decrease = () => ({ type: DECREASE })

const initialState = { toggle: false, counter: 0 }

type Actions =
  | { type: typeof TOGGLE_SWITCH }
  | { type: typeof INCREASE; difference: number }
  | { type: typeof DECREASE }

const reducer = (
  state = initialState,
  action: Actions,
): typeof initialState => {
  switch (action.type) {
    case TOGGLE_SWITCH:
      return { ...state, toggle: !state.toggle }

    case INCREASE:
      return { ...state, counter: state.counter + action.difference }

    case DECREASE:
      return { ...state, counter: state.counter - 1 }

    default:
      return state
  }
}

const store = createStore(reducer)

const render = () => {
  const state = store.getState()

  if (state.toggle) {
    divToggle.classList.add('active')
  } else {
    divToggle.classList.remove('active')
  }

  counter.innerHTML = state.counter.toString()
}

render()
store.subscribe(render)
