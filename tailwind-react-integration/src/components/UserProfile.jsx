import React from 'react';

function UserProfile() {
  return (
    <div className="bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-xl">
      <img
        src="profile-image.jpg"
        alt="User"
        className="w-36 h-36 rounded-full mx-auto transition-transform duration-300 ease-in-out hover:scale-110"
      />
      <h1 className="text-xl text-blue-800 my-4 transition-colors duration-300 ease-in-out hover:text-blue-500">
        Mounir
      </h1>
      <p className="text-base text-gray-600">
        Developer at Alx Africa. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;
