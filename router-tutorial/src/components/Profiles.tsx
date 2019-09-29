import React from 'react'
import { Route, NavLink } from 'react-router-dom'

import Profile, { data } from './Profile'

const Profiles: React.FC = () => {
  const activeStyle = { background: 'black', color: 'white' }
  return (
    <div>
      <h3>사용자 목룍: </h3>
      <ul>
        {Object.keys(data).map((username, index) => {
          return (
            <li key={index}>
              <NavLink to={`/profiles/${username}`} activeStyle={activeStyle}>
                {username}
              </NavLink>
            </li>
          )
        })}
      </ul>
      <Route
        path="/profiles"
        exact
        render={() => <div>사용자를 선택해 주세요</div>}
      ></Route>
      <Route path="/profiles/:username" component={Profile}></Route>
    </div>
  )
}

export default Profiles
