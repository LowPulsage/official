import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.scss'
import MainPage from './components/main'
import Animation from './components/animation/animation'
import ContactPage from './components/contact-page/contact'
import { Footer } from './components/footer'
import { Header } from './components/header'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/">
          <Animation />
          <MainPage />
        </Route>
        <Route exact path="/contact">
          <ContactPage />
        </Route>
        <Footer />
      </div>
    </Router>
  )
}

export default App
