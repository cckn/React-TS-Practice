import React from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import Counter from '../components/Counter'
import { increase, decrease } from '../modules/counter'
import { Dispatch } from 'redux'

type Props = {
  number: number
  increase: any
  decrease: any
}
const CounterContainer: React.FC<Props> = ({ number, increase, decrease }) => {
  return (
    <Counter
      number={number}
      onIncrease={increase}
      onDecrease={decrease}
    ></Counter>
  )
}

export default connect(
  (state: any) => ({ number: state.counter.number }),
  {
    increase,
    decrease,
  },
)(CounterContainer)
