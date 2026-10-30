import { useState } from 'react'
import { Outlet } from 'react-router'

import './App.css'

import AppNav from './components/AppNav'

import NewsData from './data/news.json'



function App() {

  const[articles, setArticles] = useState(NewsData.map((article) => {
    return {
      objectID: article.objectID,
      title: article.title,
      created_at: article.created_at,
      url: article.url,
      author: article.author,
      _tags: article._tags
    }})
    )

  
  return (
    <div className="App">

      <AppNav />
      <Outlet context={{ articles }} />
  
    </div>
  )
}

export default App
