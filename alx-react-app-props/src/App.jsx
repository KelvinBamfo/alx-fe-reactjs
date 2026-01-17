import React from 'react'
import UserContext from './UserContext'
import ProfilePage from './ProfilePage'
import UserInfo from './UserInfo'
import UserDetails from './UserDetails'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return <ProfilePage userData={userData} />;
}

export default App;
