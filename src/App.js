import React from 'react'
import { Article, Navbar, Feature, Brand, Cta } from './components'
import {
  Footer,
  Header,
  Features,
  Blog,
  WhatGPT3,
  Possibility,
} from './containers'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
