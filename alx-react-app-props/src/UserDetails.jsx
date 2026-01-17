import React, { useContext } from 'react';
import UserContext from './components/UserContext';

function UserDetails({ user }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserDetails;