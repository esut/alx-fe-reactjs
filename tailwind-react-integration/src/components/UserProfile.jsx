
import React from 'react';

function UserProfile() {
  return (
    <div className="bg-gray-100 p-4 sm:p-4 md:p-8 max-w-xs sm:max-w-sm md:max-w-sm mx-auto my-10 rounded-lg shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-xl">
      <img
        src="profile-image.jpg"
        alt="User"
        className="w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-full mx-auto transition-transform duration-300 ease-in-out hover:scale-110"
      />
      <h1 className="text-lg sm:text-xl md:text-xl text-blue-800 my-4 transition-colors duration-300 ease-in-out hover:text-blue-500">
        Mounir
      </h1>
      <p className="text-sm sm:text-base md:text-lg text-gray-600">
        Developer at Alx Africa. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;
