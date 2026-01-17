import React from 'react'
import {useState} from 'react'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import Counter from './components/Counter'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


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
        <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
        <Counter />
      </div>
    </>
  )
}

export default App
