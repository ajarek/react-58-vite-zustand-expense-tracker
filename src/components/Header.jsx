import React from 'react'
import Store from '../store/Store'
const Header = () => {
  const { amounts, addAmount, saveAmount } = Store()
 const sumIncomes= () =>{
      const allIncomes = [...amounts]
     const all= allIncomes.filter(el=>el.amount>0).reduce((acc,item)=>acc+Number(item.amount),0)
      return all
    }
 const sumExpense= () =>{
      const allIncomes = [...amounts]
     const all= allIncomes.filter(el=>el.amount<=0).reduce((acc,item)=>acc+Number(item.amount),0)
      return all
    }
 
  return (
    <div className='header'>
      <div className="title">
        <h1>Expense Tracker</h1>
      </div>
      <div className="result-balance">
        <h2>Your balance</h2>
        <h2><span>PLN</span><span>{(sumIncomes()+sumExpense()).toFixed(2)}</span></h2>
      </div>
      <div className="income-expense-card">
        <div className="income"><h3>Income <span>{ sumIncomes().toFixed(2)}</span></h3></div>
        <div className="expense"><h3>Expense <span>{sumExpense().toFixed(2)}</span></h3></div>
      </div>
    </div>
  )
}

export default Header