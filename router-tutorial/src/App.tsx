import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Profile, { data } from './components/Profile'

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
            프로필
            <ul>
              {Object.keys(data).map((username, index) => {
                return (
                  <li key={index}>
                    <Link to={`/profiles/${username}`}>{username}</Link>
                  </li>
                )
              })}
            </ul>
          </li>
        </ul>
      </div>
      <hr />
      <Route path="/" exact component={Home}></Route>
      <Route path={['/about', '/info']} component={About}></Route>
      <Route path={'/profiles/:username'} component={Profile}></Route>
    </>
  )
}

export default App
