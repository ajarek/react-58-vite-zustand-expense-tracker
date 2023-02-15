import React from 'react'
import Store from '../store/Store'
const History = () => {
  const { amounts, addAmount, saveAmount } = Store()
  return (
    <div className='history'>
      <h4>History</h4>
      <div className='wrapper-items'>
        {amounts.map((amount, index) => {
          return (
            <div className='item' key={index}>
              <div className='name-transaction'>{amount.text}</div>
              <div className='amount-transaction'>{(+amount.amount).toFixed(2)}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default History
