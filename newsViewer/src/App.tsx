import React from 'react'
import { Route } from 'react-router-dom'
import NewsPage from './components/NewsPage'

const App: React.FC = () => {
  return <Route path="/:category?" component={NewsPage}></Route>
}

export default App
