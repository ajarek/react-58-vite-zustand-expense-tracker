import React from 'react'

const History = () => {
  return (
    <div className='history'>
      <h4>History</h4>
      <div className="wrapper-items">
        <div className="item">
          <div className="name-transaction">Book</div>
          <div className="amount-transaction">-50$</div>
        </div>
        <div className="item">
          <div className="name-transaction">Payment</div>
          <div className="amount-transaction">400$</div>
        </div>
      </div>
    </div>
  )
}

export default History