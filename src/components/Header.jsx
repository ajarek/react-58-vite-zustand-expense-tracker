import React, { useEffect, useState } from 'react'
import Store from '../store/Store'
const Header = () => {
  const { amounts } = Store()
  const [sumStateIncomes, setStateSumIncomes] = useState(0)
  const [sumStateExpense, setStateSumExpense] = useState(0)
  useEffect(() => {
    const sumIncomes = () => {
      const allIncomes = [...amounts]
      const allSumIncomes = allIncomes
        .filter((el) => el.amount > 0)
        .reduce((acc, item) => acc + Number(item.amount), 0)
      setStateSumIncomes(allSumIncomes)
    }
    sumIncomes()
  })

  useEffect(() => {
    const sumExpense = () => {
      const allExpense = [...amounts]
      const allSumExpense = allExpense
        .filter((el) => el.amount <= 0)
        .reduce((acc, item) => acc + Number(item.amount), 0)
      setStateSumExpense(allSumExpense)
    }
    sumExpense()
  })
  return (
    <div className='header'>
      <div className='title'>
        <h1>Expense Tracker</h1>
      </div>
      <div className='result-balance'>
        <h2>Your balance</h2>
        <h2>
          <span>PLN </span>
          <span>{(sumStateIncomes + sumStateExpense).toFixed(2)}</span>
        </h2>
      </div>
      <div className='income-expense-card'>
        <div className='income'>
          <h3>
            Income <span>{sumStateIncomes.toFixed(2)}</span>
          </h3>
        </div>
        <div className='expense'>
          <h3>
            Expense <span>{sumStateExpense.toFixed(2)}</span>
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Header
