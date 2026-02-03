import { createSlice } from '@reduxjs/toolkit' 
 
const coinSlice = createSlice({ 
  name: 'coins', 
  initialState: { 
    transactions: [], 
    total: 0, 
    loading: false, 
    error: null, 
  }, 
  reducers: { 
    setCoins: (state, action) =
      state.total = action.payload.total 
      state.transactions = action.payload.transactions 
    }, 
    addCoins: (state, action) =
      state.total += action.payload.amount 
      state.transactions.unshift({ 
        id: Date.now(), 
        amount: action.payload.amount, 
        type: action.payload.type, 
        description: action.payload.description, 
        timestamp: new Date().toISOString(), 
      }) 
    }, 
    clearCoins: (state) =
      state.transactions = [] 
      state.total = 0 
      state.error = null 
    }, 
  }, 
}) 
 
export const { setCoins, addCoins, clearCoins } = coinSlice.actions 
export default coinSlice.reducer 
