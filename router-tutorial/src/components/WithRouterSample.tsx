import React from 'react'
import { RouteComponentProps } from 'react-router'
import { withRouter } from 'react-router-dom'

const WithRouterSample: React.FC<RouteComponentProps> = (props) => {
  const { location, match, history } = props
  return (
    <div>
      <h4>location</h4>
      <textarea
        value={JSON.stringify(location, null, 2)}
        rows={7}
        readOnly={true}
      ></textarea>

      <h4>match</h4>
      <textarea
        value={JSON.stringify(match, null, 2)}
        rows={7}
        readOnly={true}
      ></textarea>
      <button onClick={() => history.push('/')}>홈으로</button>
    </div>
  )
}

export default withRouter(WithRouterSample)
