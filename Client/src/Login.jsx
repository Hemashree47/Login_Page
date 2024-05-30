import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3001/login', { username, password })
      .then((result) => {
        console.log(result);
        if (result.data === "success") {
          navigate("/home");
        } else if (result.data === "Invalid") {
          setErrorMessage("Username and password do not match");
          setTimeout(() => {
            setErrorMessage('');
            window.location.reload();
          }, 1000); // refresh after 3 seconds
        } else if (result.data === "Username not found") {
          setErrorMessage("Username not found");
          setTimeout(() => {
            setErrorMessage('');
            window.location.reload();
          }, 1000); // refresh after 3 seconds
        }
      })
      .catch((err) => {
        console.error(err);
        setErrorMessage("An error occurred. Please try again later.");
        setTimeout(() => {
          setErrorMessage('');
          window.location.reload();
        }, 1000); // refresh after 3 seconds
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-extrabold text-center text-gray-900">Login</h2>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            {errorMessage && (
              <div className="mb-4 text-red-500 text-center">
                {errorMessage}
              </div>
            )}
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="mb-3">
                <label htmlFor="user" className="sr-only">Username</label>
                <input
                  type="text"
                  id="user"
                  name="user"
                  placeholder="Enter username"
                  required
                  autoComplete="off" // Turn off autocomplete for username
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  onChange={(e) => setUser(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter Password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
