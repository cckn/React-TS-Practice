import React, { useState, useCallback } from 'react'
import NewsList from './components/NewsList'
import Categories from './components/Categories'

const App: React.FC = () => {
  const [category, setCategory] = useState('all')
  const onSelect = useCallback((category) => {
    setCategory(category)
  }, [])

  return (
    <>
      <Categories category={category} onSelect={onSelect}></Categories>
      <NewsList category={category}></NewsList>
    </>
  )
}

export default App
