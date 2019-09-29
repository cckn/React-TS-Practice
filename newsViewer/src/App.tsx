import React, { useState } from 'react'

import axios from 'axios'
const App: React.FC = () => {
  const [data, setData] = useState(null)

  const onClick = () => {
    axios
      .get('http://jsonplaceholder.typicode.com/todos/1')
      .then((responce) => {
        setData(responce.data)
      })
  }

  return (
    <>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        ></textarea>
      )}
    </>
  )
}

export default App
