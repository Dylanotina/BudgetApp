import React from 'react';
import { Routes, Route,  Link  } from 'react-router-dom';
import Budget from './pages/Budget';
import Home from './pages/Home';
import Savings from './pages/Savings';
import Login from './pages/Login';
import LoanCalculator from './pages/LoanCalculator';
import NotFoundPage from './pages/NotFoundPage';




function App() {
  return (
    <div className=" w-screen min-h-screen bg-black text-white">
      <header className="min-h-[10vh] flex flex-row justify-center items-center text-[calc(10px + 2vmin)]">
        <Link to='/'><h4>BudgetApp</h4></Link>
        <div className='w-[70vw] flex flex-row justify-evenly'>
        <Link to='/budget'><h5>Budget</h5></Link>
        <Link to='/savings'><h5>Savings Calculator</h5></Link>
        <Link to='/loan'><h5>Loan Calculator</h5></Link>
        </div>
        <Link to='/login'><h6>Login</h6></Link>
      </header>
      <div className='min-h-[90vh] w-full flex justify-center items-center'>
    <Routes>
      <Route path="/" element={<Home/>}  />
      <Route path="/login" element={<Login/>}/>
      <Route path="/budget" element={<Budget/>}/>
      <Route path="/savings" element={<Savings/>}/>
      <Route path="/loan" element={<LoanCalculator/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
    </div>
    </div>
  );
}

export default App;
