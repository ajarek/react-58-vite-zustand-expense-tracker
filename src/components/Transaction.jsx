import React from 'react'
import { Form } from '../hooks/Form'
import Store from '../store/Store'

const Transaction = () => {
  const { addAmount, saveAmount } = Store()
  const onSubmit = (data) => {
    const newData = {
      text: data.text,
      amount: data.amount,
      date: new Date(),
    }
    addAmount(newData)
    saveAmount()
  }

  return (
    <div className='transaction'>
      <h4>Add new transaction</h4>
      <Form onSubmit={onSubmit} />
    </div>
  )
}

export default Transaction
