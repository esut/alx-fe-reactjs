import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Profile() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="details">Profile Details</Link>
          </li>
          <li>
            <Link to="settings">Profile Settings</Link>
          </li>
        </ul>
      </nav>
      <Outlet /> 
    </div>
  );
}

export default Profile;




