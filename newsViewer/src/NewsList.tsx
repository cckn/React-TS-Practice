import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import NewsItem from './NewsItem'
import axios from 'axios'

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

const sampleArticle: Article = {
  title: 'tti',
  description: 'desc',
  url: 'http://naver.com',
  urlToImage: 'http://via.placeholder.com/160',
}

const NewsList: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=kr&apiKey=87fb81b770dc4ccfbcdce4d469693de6',
        )
        setArticles(response.data.articles)
      } catch (e) {
        console.log(e)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) {
    return <NewsListBlock>대기 중</NewsListBlock>
  }

  if (!articles) {
    return null
  }

  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article}></NewsItem>
      ))}
    </NewsListBlock>
  )
}

export default NewsList
