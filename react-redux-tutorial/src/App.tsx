import React from 'react'
import Counter from './components/Counter'
import Todos from './components/Todos'

const App: React.FC = () => {
  return (
    <div className="App">
      <Counter number={0}></Counter>
      <hr />
      <Todos></Todos>
    </div>
  )
}

export default App
