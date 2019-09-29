import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Profiles from './components/Profiles'

const App: React.FC = () => {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/about">소개</Link>
          </li>
          <li>
            <Link to="/profiles">프로필</Link>
          </li>
        </ul>
      </div>
      <hr />
      <Route path="/" exact component={Home}></Route>
      <Route path={['/about', '/info']} component={About}></Route>
      <Route path={'/profiles'} component={Profiles}></Route>
    </>
  )
}

export default App
