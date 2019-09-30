import React from 'react'
import styled, { css } from 'styled-components'

interface ICategory {
  name: string
  text: string
}

const categories: ICategory[] = [
  { name: 'business', text: '비즈니스' },
  { name: 'entertainment', text: '엔터테인먼트' },
  { name: 'health', text: '건강' },
  { name: 'science', text: '과학' },
  { name: 'sports', text: '스포츠' },
  { name: 'technology', text: '테크' },
]

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 100%;
    overflow: auto;
  }
`
const Category = styled.div<{
  active?: boolean
}>`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;
  &:hover {
    color: #495057;
  }
  ${(props) =>
    props.active &&
    css`
      font-weight: 600;
      border-bottom: 2px solid #22b8cf;
      color: #22b8cf;
      &:hover {
        color: #3bc9db;
      }
    `}

  & + & {
    margin-left: 1rem;
  }
`

interface IProps {
  category: string
  onSelect: (category: string) => void
}

const Categories: React.FC<IProps> = (props) => {
  const { category, onSelect } = props
  return (
    <CategoriesBlock>
      {categories.map((c) => {
        const { name, text } = c
        return (
          <Category
            key={name}
            onClick={() => onSelect(name)}
            active={name === category}
          >
            {text}
          </Category>
        )
      })}
    </CategoriesBlock>
  )
}

export default Categories
