import Header from './components/Header.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import GalleryPage from './pages/GalleryPage.jsx'
import './styles/site.css'

function App() {
  const path = window.location.pathname.replace(/\/$/, '')
  let page = <HomePage />

  if (path === '/about') page = <AboutPage />
  if (path === '/gallery') page = <GalleryPage />

  return (
    <div className="site-shell">
      <Header />
      {page}
    </div>
  )
}

export default App
