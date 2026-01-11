import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import React from 'react'
import UserProfile './components/UserProfile'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return ( 
    <>
      <div>--
        <WelcomeMessage />
        <Header />
        <MainContent />
        <Footer />
      </div>
      <div>
        <UserProfile
        name="Kofi"
        age={22}
        bio="A travel photographer who loves cityscapes and street food."
         />
      </div>
    </>
  )
}

export default App
