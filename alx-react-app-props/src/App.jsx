import React from 'react'
import UserContext from './UserContext'
import ProfilePage from './ProfilePage'
import UserInfo from './UserInfo'
import UserDetails from './UserDetails'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

function App() {
  return (
  <UserContext.Provider value={userData}>
    <ProfilePage />
  </UserContext.Provider>
  );
}

export default App;
