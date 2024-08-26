
import React, { useContext } from 'react';
import UserContext from './UserContext';

function UserDetails() {
  const userData = useContext(UserContext);

  return (
    <div>
      <p>name: {userData.name}</p>
      <p> mail address: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
