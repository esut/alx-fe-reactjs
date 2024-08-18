import React, { useContext } from 'react';
import UserContext from './UserContext'; // استيراد UserContext

function UserDetails() {
  const userData = useContext(UserContext); // استخدام useContext لاستهلاك البيانات

  if (!userData) {
    return <div>No user data available</div>; // التعامل مع حالة عدم توفر البيانات
  }

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
