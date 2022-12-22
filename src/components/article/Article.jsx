import React from 'react'
import './Article.css'

const Article = ({ title, img }) => {
  return (
    <div className='gpt3__article'>
      <div className='gpt3__article-container'>
        <div className='gpt3__article-image'>
          <img src={img} alt='img' />
        </div>
        <div className='gpt3__article-content'>
          <p>Sep 26, 2021</p>
          <h3>{title}</h3>
          <p>Read Full Article</p>
        </div>
      </div>
    </div>
  )
}

export default Article
