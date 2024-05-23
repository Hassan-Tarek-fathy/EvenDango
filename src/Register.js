import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './img/Logo.png'; // Make sure to import your logo

const RegistrationPage = () => {
  const [userType, setUserType] = useState('user');
   // Default to 'user'

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  return (
    <>
      <header className="bg-white shadow-sm w-full">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 lg:gap-8">
            <div className="flex items-center">
              <Link to="/">
                <img src={Logo} alt="EvenDango" className="block h-10 w-auto" />
              </Link>
              <span className="font-semibold mt-2 text-lg text-gray-900">
                ven<span className="text-red-600">D</span>ango
              </span>
            </div>
            
          </div>
        </div>
      </header>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-6xl ">
          <div className='flex '>
          <h2 className="text-2lg mb-4 font-bold">Register as:</h2>
          <div>
          <Link to="/login" className="text-blue-500 hover:text-blue-700 flex pl-12">
             you already have account 
            </Link>
          </div>
          </div>
          
          
          <select
            className="block w-full p-2 border rounded mb-4"
            onChange={handleUserTypeChange}
            value={userType}
          >
            <option value="user">User</option>
            <option value="admin">Manager</option>
          </select>

          {userType === 'user' ? (
            <UserRegistrationForm />
          ) : (
            <AdminRegistrationForm />
          )}
        </div>
      </div>
    </>
  );
};
const UserRegistrationForm = () => {
  // You can add state and handle changes for each field as needed
  return (
    <form className="space-y-4 w-full">
      <h3 className="text-md">User Registration</h3>
      <div>
        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
          First Name
        </label>
        <input
          type="text"
          id="first-name"
          className="mt-1 block w-full p-2 border border-gray-300 rounded shadow-sm"
          placeholder="Enter your first name"
          required
        />
      </div>
      <div>
        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
          Last Name
        </label>
        <input
          type="text"
          id="last-name"
          className="mt-1 block w-full p-2 border border-gray-300 rounded shadow-sm"
          placeholder="Enter your last name"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="mt-1 block w-full p-2 border border-gray-300 rounded shadow-sm"
          placeholder="example@example.com"
          required
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          className="mt-1 block w-full p-2 border border-gray-300 rounded shadow-sm"
          placeholder="+1234567890"
          required
        />
      </div>
      <div>
        <label htmlFor="specialization" className="block text-sm font-medium text-gray-700">
          Specialization
        </label>
        <input
          type="text"
          id="specialization"
          className="mt-1 block w-full p-2 border border-gray-300 rounded shadow-sm"
          placeholder="Enter your specialization"
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="mt-1 block w-full p-2 border border-gray-300 rounded shadow-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirm-password"
          className="mt-1 block w-full p-2 border border-gray-300 rounded shadow-sm"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded"
      >
        Register as User
      </button>
    </form>
  );
};

const AdminRegistrationForm = () => {
  // You can add state and handle changes for each field as needed
  return (
    <form className="space-y-4">
      <h3 className="text-md">manager Registration</h3>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="mt-1 block w-full p-2 border border-gray-300 rounded shadow-sm"
          placeholder="Enter your name"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="mt-1 block w-full p-2 border border-gray-300 rounded shadow-sm"
          placeholder="example@example.com"
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="mt-1 block w-full p-2 border border-gray-300 rounded shadow-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirm-password"
          className="mt-1 block w-full p-2 border border-gray-300 rounded shadow-sm"
          required
        />
      </div>
      <button
        type="submit" 
        className="w-full bg-green-500 text-white p-2 rounded"
      >
        Register as manager
      </button>
    </form>
  );
};


export default RegistrationPage;
