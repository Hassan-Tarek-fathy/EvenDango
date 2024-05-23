import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import myPhoto from './img/3.jpg'; // Import your photo file
import Logo from './img/Logo.png';
import NavbarPage from './Home/navbar/navbar';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // إضافة حالة جديدة لتخزين نوع المستخدم
  const [userType, setUserType] = useState('user'); // 'user' أو 'manager'
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // تعديل دالة handleSubmit لتشمل نوع المستخدم
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // تحقق من نوع المستخدم وبيانات الاعتماد
    if (userType === 'manager' && formData.email === 'manager@gmail.com' && formData.password === 'admin123') {
      window.location.href = '/dashboard';
    } else if (userType === 'user' && formData.email === 'Evendango@gmail.com' && formData.password === '123456') {
      window.location.href = '/home';
    } else {
      setError('Email or password is incorrect');
    }
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
     
      <div className="mx-auto w-3/4 h-3/4 p-8 mt-20 md:pt-20">
        <div className="flex justify-end">
          <p className="text-gray-600 font-bold">
            New User?{' '}
            <Link className="text-green-500 hover:underline pl-4 font-bold" to="/register">
              Sign Up
            </Link>
          </p>
        </div>

        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-black">
            Login to continue
          </h2>
        </div>

        <form className="mt-8 space-y-4 w-full" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="block mb-4 text-sm font-medium text-gray-900 dark:text-white">
            <div className='mb-4'>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
              {error && <span className="text-red-500 text-xs">{error}</span>}
            </div>
            <div className='mb-4'>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={formData.password}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
            {/* إضافة حقل تحديد نوع المستخدم */}
            <div className='mb-4'>
              <label htmlFor="user-type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">I am a:</label>
              <select
                id="user-type"
                name="userType"
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option value="user">User</option>
                <option value="manager">Manager</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-900 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
