import React from 'react'
import styled from 'styled-components'
import NewsItem from './NewsItem'
import axios from 'axios'
import usePromise from '../lib/usePromise'

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`

export interface Article {
  title: string
  description: string
  url: string
  urlToImage: string
}

interface IProps {
  category: string
}
const NewsList: React.FC<IProps> = (props) => {
  const { category } = props

  const [loading, response, error] = usePromise(() => {
    const baseUrl = `https://newsapi.org/v2/top-headlines?country=kr&${
      category === 'all' ? '' : `category=${category}&`
    }apiKey=87fb81b770dc4ccfbcdce4d469693de6`
    console.log(baseUrl)

    return axios.get(baseUrl)
  }, [category])

  console.log(category, [loading, response, error])

  if (loading) {
    return <NewsListBlock>대기 중</NewsListBlock>
  }
  if (!response) {
    return null
  }
  if (error) {
    return <NewsListBlock>에러 발생</NewsListBlock>
  }

  const { articles }: { articles: Article[] } = response.data
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article}></NewsItem>
      ))}
    </NewsListBlock>
  )
}

export default NewsList
