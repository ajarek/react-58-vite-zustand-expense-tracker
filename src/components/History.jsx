import React from 'react'
import Store from '../store/Store'
const History = () => {
  const { amounts, saveAmount, removeAmount } = Store()
  return (
    <div className='history'>
      <h4>History</h4>
      <div className='wrapper-items'>
        {amounts
          .sort((a, b) => b.date - a.date)
          .map((amount, index) => {
            return (
              <div
                className='item'
                key={index}
                style={
                  +amount.amount > 0
                    ? { borderRight: '3px solid #03b278 ' }
                    : { borderRight: '3px solid #ee3311 ' }
                }
              >
                <button
                  onClick={() => {
                    removeAmount(index)
                    saveAmount()
                  }}
                >
                  ❌
                </button>
                <div className='wrapper-transaction'>
                  <div className='name-transaction'>{amount.text}</div>
                  <div className='amount-transaction'></div>
                  {(+amount.amount).toFixed(2)}
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default History
