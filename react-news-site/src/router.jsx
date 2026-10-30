import { createBrowserRouter } from 'react-router'

import App from './App'
import HomePage from './pages/HomePage'
import ArticlePage from './pages/ArticlePage'
import SectionPage from './pages/SectionPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'articles/:articleID', element: <ArticlePage /> },
      { path: 'sections/:sectionName', element: <SectionPage /> },
    ],
  },
])

export default router
