import React from 'react'
import Store from '../store/Store'
const Header = () => {
  const { amounts, addAmount, saveAmount } = Store()
  return (
    <div className='header'>
      <div className="title">
        <h1>Expense Tracker</h1>
      </div>
      <div className="result-balance">
        <h2>Your balance</h2>
        <h2><span>$</span><span>350.00</span></h2>
      </div>
      <div className="income-expense-card">
        <div className="income"><h3>Income <span>400.00</span></h3></div>
        <div className="expense"><h3>Expense <span>50.00</span></h3></div>
      </div>
    </div>
  )
}

export default Header