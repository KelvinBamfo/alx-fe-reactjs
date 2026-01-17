import React, { useContext } from 'react';
import UserContext from './UserContext';
import UserDetails from './UserDetails';

function UserProfile() {
  const user = useContext(UserContext);

  return (
    <div>
      <h1>User Profile</h1>
      <UserDetails user={user} />
    </div>
  );
}

export default UserProfile;