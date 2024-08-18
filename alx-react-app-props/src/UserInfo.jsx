import React, { useContext } from 'react';
import UserDetails from './UserDetails';
import UserContext from './UserContext'; // استيراد UserContext

function UserInfo() {
  const userData = useContext(UserContext); // استخدام useContext لاستهلاك البيانات

  return <UserDetails />;
}

export default UserInfo;
