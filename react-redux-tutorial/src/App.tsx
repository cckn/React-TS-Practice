import React from 'react'
import CounterContainer from './containers/CounterContainer'
import TodosContainer from './containers/TodosContainer'

const App: React.FC = () => {
  return (
    <div className="App">
      <CounterContainer></CounterContainer>
      <hr />
      <TodosContainer></TodosContainer>
    </div>
  )
}

export default App
