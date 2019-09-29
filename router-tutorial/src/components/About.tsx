import React from 'react'
import qs from 'qs'
import { Location } from 'history'

interface Props {
  location: Location
}
const About: React.FC<Props> = ({ location }) => {
  console.log(typeof location)

  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  })

  const showDetail = query.detail === 'true'

  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트입니다.</p>
      {showDetail && <p>detail is true</p>}
    </div>
  )
}

export default About
