import React, { useEffect } from 'react'
import { History } from 'history'

interface Props {
  history: History
}
const HistorySample: React.FC<Props> = (props) => {
  const handleGoBack = () => {
    props.history.goBack()
  }
  const handleGoHome = () => {
    props.history.push('/')
  }

  useEffect(() => {
    const unBlock = props.history.block('are you serious?')
    return () => {
      if (unBlock) {
        unBlock()
      }
    }
  }, [])
  return (
    <div>
      <button onClick={handleGoBack}>뒤로</button>
      <button onClick={handleGoHome}>홈으로</button>
    </div>
  )
}

export default HistorySample
