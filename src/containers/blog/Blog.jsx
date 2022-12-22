import React from 'react'
import { Article } from '../../components'
import './blog.css'
import { blog01, blog02, blog03, blog04, blog05 } from './import'

const Blog = () => {
  return (
    <div className='gpt3__blog' id='blog'>
      <div className='gpt3__heading'>
        <h1 className='gradient__text'>
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container__secA'>
          <Article
            title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
            img={blog01}
          />
        </div>
        <div className='gpt3__blog-container__secB'>
          <Article
            title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
            img={blog02}
          />
          <Article
            title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
            img={blog03}
          />
          <Article
            title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
            img={blog04}
          />
          <Article
            title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
            img={blog05}
          />
        </div>
      </div>
    </div>
  )
}

export default Blog
