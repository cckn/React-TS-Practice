import React from 'react'
import Profile, { data } from './Profile'
import { Link, Route } from 'react-router-dom'

const Profiles: React.FC = () => {
  return (
    <div>
      <h3>사용자 목룍: </h3>
      <ul>
        {Object.keys(data).map((username, index) => {
          return (
            <li key={index}>
              <Link to={`/profiles/${username}`}>{username}</Link>
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
