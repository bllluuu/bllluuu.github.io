import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import Footer from './components/footer'
import Header from './components/header'
// import Navbar from './components/navbar'
import './components/styles/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>,
)
