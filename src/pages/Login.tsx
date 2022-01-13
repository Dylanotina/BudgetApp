import React from "react";

export default function Login() {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <div className="mb-8">
        <h1 className="text-3xl font-bold pb-4">Sign In</h1>
        <p>
          New here? <a href="/" className="hover:text-blue-light">Sign up!</a>
        </p>
      </div>
      <div className="w-full max-w-xs">
        <form action="" className="bg-grey shadow-md rounded px-8 pt-6 pb-8">
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-bold mb-2">
              Username
            </label>
            <input
              type="text"
              className="shadow appearance-none text-black border rounded w-full py-2 px-3 focus:outline-none focus:border-blue-dark focus:ring-1 focus:ring-black"
              placeholder="Username"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              className="shadow appearance-none text-black border rounded w-full py-2 px-3 focus:outline-none focus:border-blue-dark focus:ring-1 focus:ring-black "
                placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-dark hover:bg-black font-bold py-2 px-4 rounded">
              Sign In
            </button>
            <p className="align-baseline font-bold text-sm hover:text-black hover:cursor-pointer">
              Forgot Password?
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
