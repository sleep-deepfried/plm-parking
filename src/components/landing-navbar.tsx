'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const LandingNavbar = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    const data = await response.json();
    if (data.status === 'success') {
      // Login was successful
    } else {
      // Login failed
    }
  };

  return (
    <>
      {/* Navbar Container */}
      <div className='bg-gray-900 h-24 w-screen flex flex-row justify-between items-center'>

        {/* Logo */}
        <div className='ml-36'>
          <Image src="/images/logo.png" alt="logo" width={300} height={21}/>
        </div>

        {/* Links */}
        <div className='container flex justify-between text-white text-xl w-96'>
          <a href='#' className='no-underline hover:underline underline-offset-8'>How it Works</a>
          <a href='#' className='no-underline hover:underline underline-offset-8'>Features</a>
          <a href='#' className='no-underline hover:underline underline-offset-8'>About Us</a>
        </div>

        {/* Login Button with Popup */}
        <div className='mr-36'>
          <button
            onClick={openPopup}
            className='bg-green-500 hover:bg-green-700 text-white font-bold rounded-3xl w-40 h-14 text-2xl'
          >
            Login
          </button>
          {isPopupOpen && (
            <div className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-gray-800 p-8 rounded-lg">
                {/* User Login Form */}
                <form onSubmit={handleSubmit}>
                  <div>
                    <Image src="/images/logo.png" alt="logo" width={200} height={21}/>
                  </div>
                  <div>
                    <label className="block text-gray-100 text-sm font-bold mb-2 mt-4" htmlFor="username">
                      Username
                    </label>
                    <input 
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                      id="username" 
                      type="text" 
                      placeholder="Username" 
                      value={username} 
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-100 text-sm font-bold mb-2 mt-4" htmlFor="password">
                      Password
                    </label>
                    <input 
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                      id="password" 
                      type="password" 
                      placeholder="Password" 
                      value={password} 
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold rounded-3xl px-4 py-2 mt-4" type="submit">
                    Login
                  </button>
                  <button onClick={closePopup} className="bg-gray-500 hover:bg-gray-700 text-white font-bold rounded-3xl px-4 py-2 mt-4">
                    Close
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default LandingNavbar;