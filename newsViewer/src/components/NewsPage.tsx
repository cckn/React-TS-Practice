import React from 'react'
import { RouteComponentProps } from 'react-router'
import Categories from './Categories'
import NewsList from './NewsList'

interface IParams {
  category: string
}

const NewsPage: React.FC<RouteComponentProps<IParams>> = (props) => {
  const {
    match: {
      params: { category = 'all' },
    },
  } = props

  return (
    <>
      <Categories />
      <NewsList category={category}></NewsList>
    </>
  )
}

export default NewsPage
