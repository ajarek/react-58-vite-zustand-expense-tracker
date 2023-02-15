import { create } from 'zustand'

const Store = create((set) => ({
  amounts: JSON.parse(window.localStorage.getItem('amounts')) || [],
  addAmount: (amount) => {
    set((state) => ({
      amounts: [...state.amounts, amount],
    }))
  },
  
  
  saveAmount: () => {
    set((state) => {
      window.localStorage.setItem('amounts', JSON.stringify(state.amounts))
      return { state }
    })
  },
  
}))

export default Store