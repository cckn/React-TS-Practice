import React from 'react'
import { RouteComponentProps } from 'react-router'

export interface IProfiles {
  [username: string]: { name: string; description: string }
}

export const data: IProfiles = {
  velopert: { name: 'mj k', description: 'dev for react' },
  cckn: { name: 'ds', description: 'char' },
}

interface IParams {
  username: string
}

const Profile: React.FC<RouteComponentProps<IParams>> = ({ match }) => {
  const { username } = match.params

  const profile = data[username]

  if (!profile) {
    return <div>존재하지 않는 사용자입니다. </div>
  }
  return (
    <>
      <div>
        <h3>
          {username}({profile.name})
        </h3>
        <p>{profile.description}</p>
      </div>
    </>
  )
}

export default Profile
