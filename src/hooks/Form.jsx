import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export const Form = ({ onSubmit }) => {
  const schema = yup.object().shape({
    amount: yup.string().required(),
    text: yup.string().min(4).max(100).required(),
  })

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
  })
  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        amount: '',
        text: '',
      })
    }
  }, [formState, reset])

  return (
    <form
      className='form'
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        type='text'
        placeholder='Text...'
        {...register('text')}
      />
      <p>{errors.text?.message}</p>
     
      <input
        type='number'
        placeholder='Amount 50.00 or-50.00'
        {...register('amount')}
      />
      <p>{errors.amount?.message}</p>
     
      <input
        type='submit'
        value={'Add Transaction'}
      />
    </form>
  )
}