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

interface IProps {
  category: string
}
const NewsList: React.FC<IProps> = (props) => {
  const { category } = props
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      try {
        const url = `https://newsapi.org/v2/top-headlines?country=kr&${
          category === 'all' ? '' : `category=${category}&`
        }apiKey=87fb81b770dc4ccfbcdce4d469693de6`
        console.log(url)

        const response = await axios.get(url)
        setArticles(response.data.articles)
      } catch (e) {
        console.log(e)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [category])

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
