import React from 'react'
import './brand.css'
import { atlassian, dropbox, google, shopify, slack } from './import'

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <img src={atlassian} alt='atlassian' />
      </div>
      <div>
        <img src={dropbox} alt='atlassian' />
      </div>
      <div>
        <img src={google} alt='atlassian' />
      </div>
      <div>
        <img src={shopify} alt='atlassian' />
      </div>
      <div>
        <img src={slack} alt='atlassian' />
      </div>
    </div>
  )
}

export default Brand
