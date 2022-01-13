import React from "react";
import {Link } from 'react-router-dom'

function Home() {
  return (
    <div className=" flex justify-center items-center flex-col w-full h-full">
      <h1 className="text-6xl p-8">Welcome to BudgetApp!</h1>
      <h3> The app that helps you manage your budget.</h3>
      <p>Please login or register to start!</p>
      <div className="buttons flex flex-row justify-center items-center mt-12">
        <Link to='/login'><button className="bg-blue-light rounded-full h-12 w-28 mr-8 hover:bg-blue-dark  hover:w-32 transition-all duration-300 ease-linear">
          Login
        </button></Link>
        <button className="bg-blue-light rounded-full h-12 w-28 ml-8  hover:bg-blue-dark  hover:w-32 transition-all duration-300 ease-linear">
          Register
        </button>
      </div>
    </div>
  );
}

export default Home;
