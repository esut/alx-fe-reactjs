
import React from 'react';

function UserProfile() {
  return (
    <div className="bg-gray-100 p-4 sm:p-6 md:p-8 max-w-xs sm:max-w-sm mx-auto my-10 rounded-lg shadow-lg">
      <img
        src="profile-image.jpg"
        alt="User"
        className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full mx-auto"
      />
      <h1 className="text-lg sm:text-xl md:text-2xl text-blue-800 my-4">Mounir</h1>
      <p className="text-sm sm:text-base md:text-lg text-gray-600">
        Developer at Alx Africa. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;
