import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Profiles from './components/Profiles'
import HistorySample from './components/HistorySample'

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
          <li>
            <Link to="/history">히스토리 샘플</Link>
          </li>
        </ul>
      </div>
      <hr />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path={['/about', '/info']} component={About}></Route>
        <Route path={'/profiles'} component={Profiles}></Route>
        <Route path={'/history'} component={HistorySample}></Route>
        <Route
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다.</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        ></Route>
      </Switch>
    </>
  )
}

export default App
